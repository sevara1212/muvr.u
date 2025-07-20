import { createContext, useContext, ReactNode } from "react";
import { FirebaseUser } from "@/lib/firebase";
import { User } from "@/types";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

interface AuthContextType {
  currentUser: User | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  error: string | null;
  setCurrentUser: (user: User) => void;
  signup: (
    email: string,
    password: string,
    name: string,
    gender?: string,
    age?: number
  ) => Promise<{ success: boolean; error?: string }>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  googleSignIn: () => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  firebaseUser: null,
  loading: true,
  error: null,
  setCurrentUser: () => {},
  signup: async () => ({ success: false }),
  login: async () => ({ success: false }),
  logout: async () => ({ success: false }),
  resetPassword: async () => ({ success: false }),
  googleSignIn: async () => ({ success: false })
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useFirebaseAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {!auth.loading && children}
    </AuthContext.Provider>
  );
}; 