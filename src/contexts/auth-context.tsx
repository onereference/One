"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserType = 'agency' | 'individual' | null;
interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType;
  login: (type: UserType, redirectTo?: string) => void;
  logout: () => void;
  selectedUserType: UserType; 
  setSelectedUserType: (type: UserType) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [selectedUserType, setSelectedUserTypeState] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('onereference-auth');
      if (storedAuth) {
        const { loggedIn, type } = JSON.parse(storedAuth);
        setIsLoggedIn(loggedIn);
        setUserType(type);
      }
      const storedSelectedType = localStorage.getItem('onereference-selected-type');
      if (storedSelectedType) {
        setSelectedUserTypeState(storedSelectedType as UserType);
      }
    } catch (error) {
      console.error("Error loading auth state from localStorage:", error);
      // Reset to default if localStorage is corrupt or inaccessible
      localStorage.removeItem('onereference-auth');
      localStorage.removeItem('onereference-selected-type');
    }
    setIsLoading(false);
  }, []);

  const login = (type: UserType, redirectTo?: string) => {
    setIsLoggedIn(true);
    setUserType(type);
    localStorage.setItem('onereference-auth', JSON.stringify({ loggedIn: true, type }));
    if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.push(type === 'agency' ? '/agency/dashboard' : '/individual/dashboard');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
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
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout, selectedUserType, setSelectedUserType, isLoading }}>
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
