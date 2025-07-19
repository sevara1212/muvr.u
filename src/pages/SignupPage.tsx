import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { doc, setDoc, usersCollection } from "@/lib/firebase";
import { ActivityLevel, Gender } from "@/types";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const { currentUser, signup } = useAuth();
  
  // Redirect if already logged in
  if (currentUser) {
    navigate("/");
    return null;
  }
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Use context signup method
      const result = await signup(
        email,
        password,
        name,
        gender || undefined,
        age ? parseInt(age) : undefined
      );
      if (result.success) {
        toast.success("Account created successfully!");
        navigate("/");
      } else {
        toast.error(result.error || "Failed to create account");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleSignup} className="w-full max-w-sm space-y-4">
        <div className="text-xl font-bold text-center mb-1 text-black">Create an account</div>
        <div className="text-center text-black mb-4 text-sm">
          Enter your information to create an account
        </div>
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-xs font-medium mb-1 text-black">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black placeholder-gray-400 text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-xs font-medium mb-1 text-black">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black placeholder-gray-400 text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-xs font-medium mb-1 text-black">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-xs font-medium mb-1 text-black">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm"
            >
              <option value="">Select gender</option>
              <option value={Gender.Male}>Male</option>
              <option value={Gender.Female}>Female</option>
              <option value={Gender.Both}>Both</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="age" className="block text-xs font-medium mb-1 text-black">Age</label>
            <input
              id="age"
              type="number"
              placeholder="25"
              min="14"
              max="60"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black placeholder-gray-400 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Age between 14-60</p>
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full py-1.5 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <div className="text-center text-xs mt-3 text-black">
          Already have an account?{' '}
          <a href="/login" className="text-[#35179d] font-semibold hover:underline">Log in</a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage; 
