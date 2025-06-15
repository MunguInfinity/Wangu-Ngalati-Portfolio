
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  // Properly sync session state with Supabase
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s) {
        navigate("/");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (authMode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ title: "Login failed", description: error.message });
      } else {
        toast({ title: "Logged in!", description: "Welcome back." });
      }
    } else {
      // Always set emailRedirectTo for confirmation flow
      const redirectUrl = window.location.origin + "/";
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: redirectUrl } });
      if (error) {
        toast({ title: "Signup failed", description: error.message });
      } else {
        toast({ title: "Signup successful", description: "Check your email for confirmation." });
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 bg-card border border-border p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">{authMode === "login" ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleAuth} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          autoComplete={authMode === "login" ? "current-password" : "new-password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (authMode === "login" ? "Logging in..." : "Signing up...") : (authMode === "login" ? "Login" : "Sign Up")}
        </Button>
      </form>
      <div className="text-center mt-4">
        {authMode === "login" ? (
          <span>
            Don't have an account?{" "}
            <button className="text-primary underline" onClick={() => setAuthMode("signup")}>Sign Up</button>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <button className="text-primary underline" onClick={() => setAuthMode("login")}>Login</button>
          </span>
        )}
      </div>
    </div>
  );
}
