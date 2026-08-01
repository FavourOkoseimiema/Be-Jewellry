import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../services/api";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validate fields
    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store authentication information
      login(token, user);

      toast.success(`Welcome back, ${user.name}!`);

      // Redirect to homepage
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        error.response?.data?.message ||
        "Unable to login. Please try again."
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-stone-900 p-8 rounded-lg shadow-xl">

        {/* Header */}

        <div className="text-center mb-8">

          <h1 className="font-serif text-3xl tracking-widest text-amber-400">
            WELCOME BACK
          </h1>

          <p className="text-stone-400 text-sm mt-3">
            Login to your Be-Jewelry account.
          </p>

        </div>


        {/* Login Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Email */}

          <div>

            <label className="block text-sm text-stone-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 outline-none focus:border-amber-500 disabled:opacity-60"
            />

          </div>


          {/* Password */}

          <div>

            <label className="block text-sm text-stone-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={isLoading}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 outline-none focus:border-amber-500 disabled:opacity-60"
            />

          </div>


          {/* Login Button */}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-500 text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >

            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}

          </button>
          <div className="text-right mt-3">
  <Link
    to="/forgot-password"
    className="text-sm text-amber-500 hover:underline"
  >
    Forgot Password?
  </Link>
</div>

        </form>


        {/* Register Link */}

        <p className="text-center text-sm text-stone-400 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-amber-400 hover:text-amber-300"
          >
            Create an account
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;