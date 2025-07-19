import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  User as FirebaseUser,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, usersCollection, doc, setDoc, getDoc } from '@/lib/firebase';
import { User, ActivityLevel } from '@/types';

interface AuthState {
  currentUser: User | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  error: string | null;
}

export function useFirebaseAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    currentUser: null,
    firebaseUser: null,
    loading: true,
    error: null
  });

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Get user data from Firestore
          const userRef = doc(usersCollection, firebaseUser.uid);
          const userSnap = await getDoc(userRef);
          
          if (userSnap.exists()) {
            // User exists in Firestore
            const userData = userSnap.data();
            setAuthState({
              currentUser: { id: firebaseUser.uid, ...userData } as User,
              firebaseUser,
              loading: false,
              error: null
            });
          } else {
            // User doesn't exist in Firestore yet (should only happen if auth was created outside our app)
            setAuthState({
              currentUser: null,
              firebaseUser,
              loading: false,
              error: 'User profile not found'
            });
          }
        } catch (error: any) {
          setAuthState({
            currentUser: null,
            firebaseUser,
            loading: false,
            error: error.message
          });
        }
      } else {
        // No user is signed in
        setAuthState({
          currentUser: null,
          firebaseUser: null,
          loading: false,
          error: null
        });
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  // Update current user
  const setCurrentUser = (user: User) => {
    setAuthState(prev => ({
      ...prev,
      currentUser: user
    }));
  };

  // Sign up with email and password
  const signup = async (
    email: string, 
    password: string, 
    name: string,
    gender?: string,
    age?: number
  ) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Update profile with display name
      await updateProfile(firebaseUser, { displayName: name });
      
      // Create user document in Firestore
      const userData = {
        name,
        email,
        avatar: "",
        interests: [],
        activityLevel: ActivityLevel.Beginner,
        joinedDate: new Date().toISOString(),
        joinedRooms: [],
        gender: gender || undefined,
        age: age || undefined,
        preferredGender: 'Both',
        preferredAgeRange: { min: 14, max: 60 }
      };
      
      await setDoc(doc(usersCollection, firebaseUser.uid), userData);
      
      // Update auth state
      setAuthState({
        currentUser: { id: firebaseUser.uid, ...userData } as User,
        firebaseUser,
        loading: false,
        error: null
      });
      
      return { success: true };
    } catch (error: any) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message || 'Failed to create account' 
      }));
      return { success: false, error: error.message };
    }
  };

  // Sign in with email and password
  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error: any) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message || 'Failed to sign in' 
      }));
      return { success: false, error: error.message };
    }
  };

  // Sign out
  const logout = async () => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message || 'Failed to sign out' 
      }));
      return { success: false, error: error.message };
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await sendPasswordResetEmail(auth, email);
      setAuthState(prev => ({ ...prev, loading: false }));
      return { success: true };
    } catch (error: any) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message || 'Failed to send password reset email' 
      }));
      return { success: false, error: error.message };
    }
  };

  return {
    ...authState,
    setCurrentUser,
    signup,
    login,
    logout,
    resetPassword
  };
} 