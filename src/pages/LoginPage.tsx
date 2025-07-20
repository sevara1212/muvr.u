import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff } from 'lucide-react';
import muvrLogo from '/public/images/muvr_logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const { currentUser, login, error: authError, googleSignIn } = useAuth();
  
  // Redirect if already logged in
  if (currentUser) {
    navigate("/");
    return null;
  }
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await login(email, password);
      if (result.success) {
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(result.error || "Failed to log in");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      if (result.success) {
        toast.success("Logged in with Google!");
        navigate("/");
      } else {
        toast.error(result.error || "Google login failed");
      }
    } catch (error: any) {
      toast.error(error.message || "Google login failed");
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
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-lg font-semibold text-center mb-1 text-[#35179d]">Login</div>
          <div className="text-center text-gray-500 mb-4 text-sm">
            Enter your email and password to login to your account
          </div>
          <div className="space-y-3">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pr-10"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M4 4l8 8 8-8"/></svg>
                </span>
              </div>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#35179d] focus:outline-none"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          {authError && (
            <div className="text-center text-red-600 text-xs mb-2 bg-red-50 rounded p-2 border border-red-200">{authError}</div>
          )}
          <Button type="submit" className="w-full py-2 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
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
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#35179d] font-semibold hover:underline">Sign up</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage; 
