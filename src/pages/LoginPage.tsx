import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const { currentUser } = useAuth();
  
  // Redirect if already logged in
  if (currentUser) {
    navigate("/");
    return null;
  }
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <div className="text-xl font-bold text-center mb-1 text-black">Login</div>
        <div className="text-center text-black mb-4 text-sm">
          Enter your email and password to login to your account
        </div>
        <div className="space-y-3">
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
              required
              className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#35179d] text-black text-sm"
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full py-1.5 rounded bg-[#35179d] text-white font-bold text-base mt-2 hover:bg-[#2a146a] transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-center text-xs mt-3 text-black">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#35179d] font-semibold hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 
