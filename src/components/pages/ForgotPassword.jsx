import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/forgot-password", {
        email,
      });

      toast.success(response.data.message);

      setEmail("");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-lg p-8">

        <h1 className="text-3xl font-serif tracking-widest uppercase text-center text-white">
          Forgot Password
        </h1>

        <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-4 mb-8"></div>

        <p className="text-zinc-400 text-center text-sm mb-8">
          Enter your email address and we'll send you a password reset link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded focus:border-amber-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded transition"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <div className="mt-6 text-center">

          <Link
            to="/login"
            className="text-amber-500 hover:underline text-sm"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;