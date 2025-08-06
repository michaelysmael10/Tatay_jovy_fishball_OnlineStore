'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/lib/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, isLoading: true });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState({ user, isLoading: false });
      } catch (error) {
        setState({ user: null, isLoading: false });
      }
    } else {
      setState({ user: null, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple mock authentication
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      
      setState({ user, isLoading: false });
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (name && email && password.length >= 6) {
      const user: User = {
        id: Date.now().toString(),
        email,
        name
      };
      
      setState({ user, isLoading: false });
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setState({ user: null, isLoading: false });
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isLoading: state.isLoading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}