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

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const passwordChecks = [
  {
    label: "At least 8 characters",
    test: (pwd: string) => pwd.length >= 8,
  },
  {
    label: "At least one number",
    test: (pwd: string) => /\d/.test(pwd),
  },
  {
    label: "At least one uppercase letter",
    test: (pwd: string) => /[A-Z]/.test(pwd),
  },
  {
    label: "At least one lowercase letter",
    test: (pwd: string) => /[a-z]/.test(pwd),
  },
];

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const { currentUser, signup } = useAuth();
  
  // Redirect if already logged in
  if (currentUser) {
    navigate("/");
    return null;
  }
  
  // Password strength check
  const checkPasswordStrength = (pwd: string) => {
    if (!pwd) return "";
    if (!strongPasswordRegex.test(pwd)) {
      return "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(checkPasswordStrength(e.target.value));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setLoading(true);
    if (checkPasswordStrength(password)) {
      setPasswordError(checkPasswordStrength(password));
      setLoading(false);
      return;
    }
    if (!gender) {
      setFormError("Please select a gender.");
      setLoading(false);
      return;
    }
    if (!age || +age < 14 || +age > 75) {
      setFormError("Age must be between 14 and 75.");
      setLoading(false);
      return;
    }
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
        setFormError(result.error || "Failed to create account");
        toast.error(result.error || "Failed to create account");
      }
    } catch (error: any) {
      setFormError(error.message || "Failed to create account");
      toast.error(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };
  
  const allPasswordChecksPassed = passwordChecks.every(check => check.test(password));

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleSignup} className="w-full max-w-sm space-y-4">
        <div className="text-xl font-bold text-center mb-1 text-black">Create an account</div>
        <div className="text-center text-black mb-4 text-sm">
          Enter your information to create an account
        </div>
        {formError && <div className="text-center text-red-600 text-xs mb-2">{formError}</div>}
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
              onChange={handlePasswordChange}
              minLength={8}
              required
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm"
            />
            <div className="mt-2 space-y-1">
              {passwordChecks.map((check, idx) => {
                const passed = check.test(password);
                return (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <span className={passed ? "text-green-600" : "text-red-500"}>{passed ? "✅" : "❌"}</span>
                    <span className={passed ? "text-green-700" : "text-gray-700"}>{check.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-xs font-medium mb-1 text-black">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm"
              required
            >
              <option value="">Select gender</option>
              <option value={Gender.Male}>Male</option>
              <option value={Gender.Female}>Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="age" className="block text-xs font-medium mb-1 text-black">Age</label>
            <input
              id="age"
              type="number"
              placeholder="25"
              min="14"
              max="75"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black placeholder-gray-400 text-sm"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Age between 14-75</p>
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full py-1.5 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition"
          disabled={loading || !allPasswordChecksPassed}
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
