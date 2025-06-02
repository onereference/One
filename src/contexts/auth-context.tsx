
"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase'; // Import auth and db
import { onAuthStateChanged, User as FirebaseUser, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

export type UserType = 'agency' | 'individual' | null;

interface UserProfile {
  uid: string;
  email: string | null;
  userType: UserType;
  onboardingComplete: boolean;
  createdAt?: any; // Firebase Timestamp
}

interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: FirebaseUser | null; // Firebase user object
  userProfile: UserProfile | null; // Our custom user profile from Firestore
  loginWithEmail: (email: string, password: string) => Promise<void>; // Kept for AuthForm structure
  signupWithEmail: (email: string, password: string) => Promise<void>; // Kept for AuthForm structure
  logout: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
  selectedUserType: UserType;
  setSelectedUserType: (type: UserType) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedUserType, setSelectedUserTypeState] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Load selectedUserType from localStorage (for pre-auth selection)
    try {
      const storedSelectedType = localStorage.getItem('onereference-selected-type');
      if (storedSelectedType) {
        setSelectedUserTypeState(storedSelectedType as UserType);
      }
    } catch (error) {
      console.error("Error loading selected user type from localStorage:", error);
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      if (user) {
        setCurrentUser(user);
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const profileData = userDocSnap.data() as UserProfile;
          setUserProfile(profileData);
          // If user exists, their type is set. Clear selectedUserType if it was from pre-auth.
          // setSelectedUserTypeState(null); // Let profile data dictate type
          // localStorage.removeItem('onereference-selected-type');

          if (!profileData.onboardingComplete) {
            router.push(profileData.userType === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
          } else {
            // router.push(profileData.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
            // Avoid redirecting here if already on a dashboard page or other internal page
          }
        } else {
          // New user, but Firebase auth happened before Firestore doc creation (e.g. social signup flow)
          // Or, this is an email signup, and we will create the doc in signupWithEmail
          setUserProfile(null); // No profile yet
          // If selectedUserType exists, it means we are in a signup flow
          if (selectedUserType) {
             // This case should be handled by signup flow setting the doc
            console.warn("User authenticated but no Firestore profile found. Signup flow should create this.");
          } else {
            // User logged in (maybe old session) but no profile and no selected type.
            // This is an edge case, perhaps prompt for user type again or log out.
            console.error("User authenticated but no Firestore profile or selected type. Logging out.");
            await firebaseSignOut(auth); // Log them out if inconsistent state
          }
        }
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router, selectedUserType]); // Added selectedUserType as dependency

  const loginWithEmail = async (email: string, password: string) => {
    // Actual Firebase login is handled by AuthForm calling signInWithEmailAndPassword
    // onAuthStateChanged will pick up the new user state
    // This function can be a stub or removed if AuthForm calls Firebase directly
    console.log("AuthContext: loginWithEmail called, but Firebase handles actual login via AuthForm.");
  };

  const signupWithEmail = async (email: string, password: string) => {
    // Actual Firebase signup is handled by AuthForm calling createUserWithEmailAndPassword
    // After successful Firebase signup, AuthForm should call a method here or this context
    // should react to onAuthStateChanged for new users to create the Firestore document
    console.log("AuthContext: signupWithEmail called, but Firebase handles actual signup via AuthForm.");
    // The creation of user doc is now typically handled by onAuthStateChanged if user is new and selectedUserType exists
    // OR, more robustly, the AuthForm should call a specific context function post-Firebase-signup
  };
  
  const logout = async () => {
    setIsLoading(true);
    await firebaseSignOut(auth);
    // onAuthStateChanged will set currentUser and userProfile to null
    // SelectedUserType is kept for potential re-login without re-selecting type
    setIsLoading(false);
    router.push('/');
  };

  const completeOnboarding = async () => {
    if (currentUser && userProfile) {
      setIsLoading(true);
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, { onboardingComplete: true });
      setUserProfile({ ...userProfile, onboardingComplete: true });
      setIsLoading(false);
      router.push(userProfile.userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
    } else {
      console.error("Cannot complete onboarding: no current user or profile.");
      router.push('/'); // Fallback redirect
    }
  };
  
  const setSelectedUserType = (type: UserType) => {
    setSelectedUserTypeState(type);
    if (type) {
      localStorage.setItem('onereference-selected-type', type);
    } else {
      localStorage.removeItem('onereference-selected-type');
    }
  };

  // Helper for AuthForm to create user document after Firebase signup
  const createUserProfileDocument = async (firebaseUser: FirebaseUser, type: UserType) => {
    if (!type) {
      console.error("Cannot create user profile: user type not selected.");
      // Potentially log out the user or redirect to type selection
      await firebaseSignOut(auth);
      router.push('/user-type-selection');
      return;
    }
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    const newUserProfile: UserProfile = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      userType: type,
      onboardingComplete: false,
      createdAt: serverTimestamp(),
    };
    await setDoc(userDocRef, newUserProfile);
    setUserProfile(newUserProfile); // Update context state
    // onAuthStateChanged might also pick this up, but explicit set is good.
  };


  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: !!currentUser, 
      currentUser,
      userProfile,
      loginWithEmail, 
      signupWithEmail,
      logout, 
      completeOnboarding,
      selectedUserType, 
      setSelectedUserType, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Add this function to AuthContextType if AuthForm will call it
export interface AuthContextType {
    // ... existing properties
    createUserProfileDocument: (firebaseUser: FirebaseUser, type: UserType) => Promise<void>;
}
