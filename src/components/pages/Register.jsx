import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import api from "../../../services/api";
import { useAuth } from "../../Context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    // Check all fields
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Check passwords
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      const { token, user } = response.data;
      
      login(token,user);
      toast.success("Account created successfully!");

      // Go to login after successful registration
      navigate("/");

    } catch (error) {
  console.error(
    "Registration error:",
    error.response?.data || error
  );

  toast.error(
    error.response?.data?.message ||
    "Unable to create account."
  );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-stone-900 p-8 rounded-lg shadow-xl">

        <div className="text-center mb-8">

          <h1 className="font-serif text-3xl tracking-widest text-amber-400">
            CREATE ACCOUNT
          </h1>

          <p className="text-stone-400 text-sm mt-3">
            Create an account to start shopping with Be-Jewelry.
          </p>

        </div>


        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}

          <div>

            <label className="block text-sm text-stone-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={isLoading}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 outline-none focus:border-amber-500 disabled:opacity-60"
            />

          </div>


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
              placeholder="Create a password"
              disabled={isLoading}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 outline-none focus:border-amber-500 disabled:opacity-60"
            />

          </div>


          {/* Confirm Password */}

          <div>

            <label className="block text-sm text-stone-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              disabled={isLoading}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 outline-none focus:border-amber-500 disabled:opacity-60"
            />

          </div>


          {/* Submit */}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-500 text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >

            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}

          </button>

        </form>


        {/* Login Link */}

        <p className="text-center text-sm text-stone-400 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-amber-400 hover:text-amber-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;