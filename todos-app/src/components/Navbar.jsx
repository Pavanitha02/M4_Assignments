import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();

  return (
    <div className="h-14 border-b flex items-center justify-between px-6">
      <h1 className="font-bold text-xl">Todos App</h1>

      <div className="flex gap-3">
        {["all", "completed", "pending"].map(f => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      {user && <Button onClick={logout}>Logout</Button>}
    </div>
  );
}
