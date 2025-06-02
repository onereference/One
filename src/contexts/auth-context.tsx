
"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserType = 'agency' | 'individual' | null;

interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType;
  userEmail: string | null; // Store user email
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

  const updateLocalStorage = (data: Partial<AuthContextType>) => {
    const currentAuth = JSON.parse(localStorage.getItem('onereference-auth') || '{}');
    localStorage.setItem('onereference-auth', JSON.stringify({ ...currentAuth, ...data }));
  };

  const login = (type: UserType, email: string, redirectTo?: string) => {
    setIsLoggedIn(true);
    setUserType(type);
    setUserEmail(email);
    // onboardingComplete status is already loaded from localStorage or set by signup/completeOnboarding
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
    setIsLoggedIn(true); // User is "logged in" immediately after signup for onboarding
    setUserType(type);
    setUserEmail(email);
    setOnboardingComplete(false); // New users need onboarding
    updateLocalStorage({ loggedIn: true, type, email, onboarding: false });
    router.push(type === 'agency' ? '/onboarding/agency' : '/onboarding/individual');
  };
  
  const completeOnboarding = () => {
    setOnboardingComplete(true);
    updateLocalStorage({ onboarding: true });
    // Redirect to dashboard after completing onboarding
    if (userType) {
      router.push(userType === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
    } else {
      router.push('/'); // Fallback if userType is somehow null
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUserEmail(null);
    setOnboardingComplete(false); // Reset onboarding status
    // selectedUserType remains to allow easy re-login selection
    localStorage.removeItem('onereference-auth');
    router.push('/');
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

    