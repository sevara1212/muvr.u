import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import muvrLogo from '/public/images/muvr_logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const { currentUser, login, error: authError, loading: authLoading } = useAuth();
  
  // Clear error when user starts typing
  useEffect(() => {
    if (authError) {
      setLocalError(authError);
    } else {
      setLocalError(null);
    }
  }, [authError]);

  // Clear local error when user starts typing
  useEffect(() => {
    if (localError && (email || password)) {
      setLocalError(null);
    }
  }, [email, password, localError]);
  
  // Redirect if already logged in (but not if there's an error or loading)
  if (currentUser && !authError && !authLoading) {
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
        // Don't show toast here since the error will be handled by the auth state
        console.log("Login failed:", result.error);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f6fa] to-[#e9e6f7]">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#35179d] hover:text-[#2a146a] transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>
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
          {localError && (
            <div className="text-center text-red-600 text-sm mb-2 bg-red-50 rounded p-3 border border-red-200">
              <div className="font-medium">{localError}</div>
            </div>
          )}
          <Button type="submit" className="w-full py-2 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
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