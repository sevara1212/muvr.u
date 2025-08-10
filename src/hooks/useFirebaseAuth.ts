import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  User as FirebaseUser,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, usersCollection, doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, db } from '@/lib/firebase';
import { User, ActivityLevel, RequestStatus } from '@/types';
import { clearUserCache } from '@/services/chatService';
import { toast } from 'sonner';

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

  // Check for approved requests and show notification
  const checkApprovedRequests = async (userId: string) => {
    try {
      const q = query(
        collection(db, "joinRequests"),
        where("userId", "==", userId),
        where("status", "==", RequestStatus.Approved)
      );
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        // Show notification for approved requests
        toast.success("🎉 Your join request has been approved!");
        
        // Delete the approved request from Firebase
        const deletePromises = snapshot.docs.map(doc => 
          deleteDoc(doc.ref)
        );
        await Promise.all(deletePromises);
      }
    } catch (error) {
      console.error("Error checking approved requests:", error);
    }
  };

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔄 Auth state changed:', firebaseUser ? `User: ${firebaseUser.email}` : 'No user');
      
      if (firebaseUser) {
        try {
          // Get user data from Firestore
          const userRef = doc(usersCollection, firebaseUser.uid);
          const userSnap = await getDoc(userRef);
          
          if (userSnap.exists()) {
            // User exists in Firestore
            const userData = userSnap.data();
            const currentUser = { id: firebaseUser.uid, ...userData } as User;
            
            console.log('✅ User authenticated successfully:', currentUser.name);
            
            setAuthState({
              currentUser,
              firebaseUser,
              loading: false,
              error: null
            });
            
            // Show welcome back message for login
            if (firebaseUser.metadata.lastSignInTime === firebaseUser.metadata.creationTime) {
              // This is a new user (just signed up)
              toast.success(`Welcome to Muvr, ${currentUser.name}! 🎉`);
            } else {
              // This is an existing user (logging in)
              toast.success(`Welcome back, ${currentUser.name}! 👋`);
            }
            
            // Check for approved requests after user is loaded
            checkApprovedRequests(firebaseUser.uid);
          } else {
            // User doesn't exist in Firestore - this could be a race condition during signup
            console.log('⚠️ User not found in Firestore (might be during signup):', firebaseUser.email);
            
            // Don't immediately sign out - this might be a race condition during signup
            // Instead, set loading state and let the signup process complete
            setAuthState({
              currentUser: null,
              firebaseUser,
              loading: true,
              error: null
            });
            
            // Wait a bit and check again (for race condition during signup)
            setTimeout(async () => {
              try {
                const userRef = doc(usersCollection, firebaseUser.uid);
                const userSnap = await getDoc(userRef);
                
                if (userSnap.exists()) {
                  // User was created, update state
                  const userData = userSnap.data();
                  const currentUser = { id: firebaseUser.uid, ...userData } as User;
                  
                  console.log('✅ User profile found after delay:', currentUser.name);
                  
                  setAuthState({
                    currentUser,
                    firebaseUser,
                    loading: false,
                    error: null
                  });
                  
                  toast.success(`Welcome to Muvr, ${currentUser.name}! 🎉`);
                  checkApprovedRequests(firebaseUser.uid);
                } else {
                  // User still doesn't exist, this is a real issue
                  console.log('❌ User still not found in Firestore after delay');
                  
                  // Only sign out if this is not a new user (creation time check)
                  const isNewUser = firebaseUser.metadata.lastSignInTime === firebaseUser.metadata.creationTime;
                  const timeSinceCreation = Date.now() - new Date(firebaseUser.metadata.creationTime).getTime();
                  const isRecentlyCreated = timeSinceCreation < 10000; // 10 seconds
                  
                                     if (!isNewUser || !isRecentlyCreated) {
                     // Only set error if this is not during initial load
                     console.log('❌ User profile not found - signing out');
                     await signOut(auth);
                     setAuthState({
                       currentUser: null,
                       firebaseUser: null,
                       loading: false,
                       error: null // Don't set error during initial load
                     });
                   }
                }
              } catch (error) {
                console.error('❌ Error checking user after delay:', error);
              }
            }, 2000); // Wait 2 seconds for signup to complete
          }
        } catch (error: any) {
          console.error('❌ Error fetching user data:', error);
          setAuthState({
            currentUser: null,
            firebaseUser,
            loading: false,
            error: error.message
          });
        }
      } else {
        // No user is signed in
        console.log('👋 No user signed in');
        setAuthState({
          currentUser: null,
          firebaseUser: null,
          loading: false,
          error: null
        });
      }
    });
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
      console.log('🚀 Starting professional signup process...');
      
      // Validate input data
      if (!email || !password || !name) {
        throw new Error('Please fill in all required fields.');
      }
      
      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
      }
      
      // Create user in Firebase Auth
      console.log('🔐 Creating Firebase Auth user...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      console.log('✅ Firebase Auth user created:', firebaseUser.uid);
      
      // Update profile with display name
      console.log('👤 Updating user profile...');
      await updateProfile(firebaseUser, { displayName: name });
      
      // Create user document in Firestore
      console.log('📄 Creating Firestore user document...');
      const userData = {
        name,
        email,
        avatar: "",
        interests: [],
        activityLevel: ActivityLevel.Beginner,
        joinedDate: new Date().toISOString(),
        joinedRooms: [],
        gender: gender || 'Other',
        age: typeof age === 'number' && !isNaN(age) ? age : 14,
        preferredGender: 'Both',
        preferredAgeRange: { min: 14, max: 60 }
      };
      
      // Use setDoc with merge option to handle offline scenarios better
      await setDoc(doc(usersCollection, firebaseUser.uid), userData, { merge: true });
      
      console.log('✅ Firestore user document created successfully');
      
      // Update auth state immediately
      const currentUser = { id: firebaseUser.uid, ...userData } as User;
      setAuthState({
        currentUser,
        firebaseUser,
        loading: false,
        error: null
      });
      
      console.log('🎉 Professional signup completed successfully!');
      console.log('👤 Current user set:', currentUser.name);
      
      // Show success toast
      toast.success(`Welcome to Muvr, ${name}! 🎉`);
      
      return { success: true };
    } catch (error: any) {
      console.error('❌ Professional signup failed:', error);
      
      let errorMessage = 'Failed to create account';
      
      // Provide specific error messages
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please use a different email or try logging in.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please use a stronger password with at least 8 characters, including uppercase, lowercase, and number.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please enter a valid email address.';
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMessage = 'Email/password accounts are not enabled. Please contact support.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.code === 'unavailable' || error.message?.includes('IndexedDB')) {
        errorMessage = 'Browser storage issue. Please try refreshing the page or use a different browser.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage
      }));
      
      // Show error toast
      toast.error(errorMessage);
      
      return { success: false, error: errorMessage };
    }
  };

  // Sign in with email and password
  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      console.log('🔐 Starting professional login process...');
      
      // Validate input data
      if (!email || !password) {
        throw new Error('Please enter both email and password.');
      }
      
      await signInWithEmailAndPassword(auth, email, password);
      
      console.log('✅ Professional login successful');
      
      // Success toast will be shown by the auth state change listener
      return { success: true };
    } catch (error: any) {
      console.error('❌ Professional login failed:', error);
      
      let errorMessage = 'Failed to sign in';
      
      // Provide specific error messages
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email. Please sign up first.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please enter a valid email address.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage
      }));
      
      // Show error toast
      toast.error(errorMessage);
      
      return { success: false, error: errorMessage };
    }
  };

  // Sign out
  const logout = async () => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      await signOut(auth);
      // Clear chat user cache on logout
      clearUserCache();
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
    resetPassword,
  };
} 