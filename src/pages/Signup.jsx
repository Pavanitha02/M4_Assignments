import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    navigate("/todos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 p-6 border rounded-xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <Button className="w-full">Create Account</Button>

        <p className="text-sm text-center">
          Already have an account? <Link to="/login" className="underline">Login</Link>
        </p>
      </form>
    </div>
  );
}
