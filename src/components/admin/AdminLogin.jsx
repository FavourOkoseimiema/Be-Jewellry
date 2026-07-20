import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/admin/login", {
        email,
        password,
      });

    localStorage.setItem("token", response.data.token);

localStorage.setItem(
  "admin",
  JSON.stringify(response.data.admin)
);

navigate("/admin/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-stone-900 p-8 rounded-lg w-full max-w-md space-y-5"
      >

        <h1 className="text-3xl text-center text-amber-400 font-bold">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-3 rounded bg-stone-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 rounded bg-stone-800"
        />

        <button
          className="w-full bg-amber-500 text-black py-3 rounded font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;