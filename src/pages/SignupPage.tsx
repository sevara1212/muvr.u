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
import muvrLogo from '/public/images/muvr_logo.png';

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
  {
    label: "At least one special character (!@#$%^&*)",
    test: (pwd: string) => /[!@#$%^&*]/.test(pwd),
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
  const { currentUser, signup, error: authError, googleSignIn } = useAuth();
  
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

  const handleGoogleSignup = async () => {
    setLoading(true);
    setFormError("");
    try {
      const result = await googleSignIn();
      if (result.success) {
        toast.success("Signed up with Google!");
        navigate("/");
      } else {
        setFormError(result.error || "Google sign up failed");
        toast.error(result.error || "Google sign up failed");
      }
    } catch (error: any) {
      setFormError(error.message || "Google sign up failed");
      toast.error(error.message || "Google sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f6fa] to-[#e9e6f7]">
      <Card className="w-full max-w-md p-8 shadow-xl border-0">
        <div className="flex flex-col items-center mb-6">
          <img src={muvrLogo} alt="Muvr Logo" className="h-14 mb-2" />
          <div className="text-2xl font-extrabold text-[#35179d] tracking-tight">Muvr</div>
        </div>
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="text-lg font-semibold text-center mb-1 text-[#35179d]">Create an account</div>
          <div className="text-center text-gray-500 mb-4 text-sm">
            Enter your information to create an account
          </div>
          {(formError || authError) && (
            <div className="text-center text-red-600 text-xs mb-2 bg-red-50 rounded p-2 border border-red-200">{formError || authError}</div>
          )}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                minLength={8}
                required
              />
              <div className="mt-2 space-y-1">
                {passwordChecks.map((check, idx) => {
                  const passed = check.test(password);
                  return (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className={passed ? "text-green-600" : "text-red-500"}>{passed ? "✔️" : "❌"}</span>
                      <span className={passed ? "text-green-700" : "text-gray-700"}>{check.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm bg-white mt-1"
                required
              >
                <option value="">Select gender</option>
                <option value={Gender.Male}>Male</option>
                <option value={Gender.Female}>Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                min="14"
                max="75"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full py-2 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </Button>
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-200" />
          </div>
          <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100" onClick={handleGoogleSignup} disabled={loading}>
            <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.22l6.85-6.85C36.64 2.36 30.74 0 24 0 14.82 0 6.73 5.06 2.69 12.44l7.98 6.2C12.13 13.16 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.42-4.74H24v9.04h12.42c-.54 2.92-2.18 5.39-4.65 7.06l7.18 5.59C43.91 37.36 46.1 31.36 46.1 24.5z"/><path fill="#FBBC05" d="M10.67 28.64c-1.04-3.12-1.04-6.52 0-9.64l-7.98-6.2C.64 16.36 0 20.06 0 24c0 3.94.64 7.64 2.69 11.2l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.74 0 12.64-2.24 16.85-6.1l-7.18-5.59c-2.01 1.36-4.58 2.19-7.67 2.19-6.38 0-11.87-3.66-14.33-8.94l-7.98 6.2C6.73 42.94 14.82 48 24 48z"/></g></svg>
            Continue with Google
          </Button>
          <div className="text-center text-xs mt-3 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#35179d] font-semibold hover:underline">Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignupPage; 
