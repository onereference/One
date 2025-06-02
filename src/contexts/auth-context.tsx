
"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserType = 'agency' | 'individual' | null;

interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType;
  userEmail: string | null; 
  onboardingComplete: boolean;
  login: (type: UserType, email: string, redirectTo?: string) => void;
  signup: (type: UserType, email: string) => void;
  logout: () => void;
  completeOnboarding: () => void;
  selectedUserType: UserType; 
  setSelectedUserType: (type: UserType) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [selectedUserType, setSelectedUserTypeState] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('onereference-auth');
      if (storedAuth) {
        const { loggedIn, type, email, onboarding } = JSON.parse(storedAuth);
        setIsLoggedIn(loggedIn);
        setUserType(type);
        setUserEmail(email || null);
        setOnboardingComplete(onboarding || false);
      }
      const storedSelectedType = localStorage.getItem('onereference-selected-type');
      if (storedSelectedType) {
        setSelectedUserTypeState(storedSelectedType as UserType);
      }
    } catch (error) {
      console.error("Error loading auth state from localStorage:", error);
      localStorage.removeItem('onereference-auth');
      localStorage.removeItem('onereference-selected-type');
    }
    setIsLoading(false);
  }, []);

  const updateLocalStorage = (data: Partial<AuthContextType & { loggedIn: boolean, type: UserType, email: string | null, onboarding: boolean }>) => {
    const currentAuthString = localStorage.getItem('onereference-auth');
    const currentAuth = currentAuthString ? JSON.parse(currentAuthString) : {};
    localStorage.setItem('onereference-auth', JSON.stringify({ ...currentAuth, ...data }));
  };
  

  const login = (type: UserType, email: string, redirectTo?: string) => {
    setIsLoggedIn(true);
    setUserType(type);
    setUserEmail(email);
    // onboardingComplete status is assumed to be correct from localStorage or signup
    updateLocalStorage({ loggedIn: true, type, email, onboarding: onboardingComplete });

    if (!onboardingComplete) {
      router.push(type === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
    } else if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.push(type === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
    }
  };

  const signup = (type: UserType, email: string) => {
    setIsLoggedIn(true); 
    setUserType(type);
    setUserEmail(email);
    setOnboardingComplete(false); 
    updateLocalStorage({ loggedIn: true, type, email, onboarding: false });
    router.push(type === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
  };
  
  const completeOnboarding = () => {
    setOnboardingComplete(true);
    updateLocalStorage({ onboarding: true, loggedIn: isLoggedIn, type: userType, email: userEmail });
    if (userType) {
      router.push(userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
    } else {
      router.push('/'); 
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUserEmail(null);
    setOnboardingComplete(false); 
    // selectedUserType is kept so user doesn't have to re-select it on next login attempt
    localStorage.removeItem('onereference-auth'); // Clears loggedIn, type, email, onboarding
    router.push('/'); // Redirect to the new landing page
  };
  
  const setSelectedUserType = (type: UserType) => {
    setSelectedUserTypeState(type);
    if (type) {
      localStorage.setItem('onereference-selected-type', type);
    } else {
      localStorage.removeItem('onereference-selected-type');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      userType, 
      userEmail,
      onboardingComplete,
      login, 
      signup,
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
