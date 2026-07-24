import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { FiArrowLeftCircle } from "react-icons/fi";
import toast from "react-hot-toast";
function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

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
    } catch (error) {() => {
      toast.error("Invalid email or password")
    navigate("/")}
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 flex justify-center items-center">

      <form
        onSubmit={handleLogin}
        className="bg-stone-900 p-8 rounded-lg w-[400px] shadow-xl"
      >
          <div>
          <button onClick={() => navigate("/")} className="text-amber-500   "><FiArrowLeftCircle/></button>
            <h1 className="text-3xl text-amber-500 font-serif mb-8 text-center">
          Admin Login
        </h1></div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-5 bg-stone-800 text-white rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-stone-800 text-white rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full bg-amber-500 hover:bg-amber-600 text-black p-3 rounded font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;