import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from"../../../services/api";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        `/auth/reset-password/${token}`,
        {
          password,
        }
      );

      toast.success(response.data.message);

      navigate("/login");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl">

        <h1 className="text-3xl font-serif text-center text-white tracking-widest uppercase">
          Reset Password
        </h1>

        <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-4 mb-8"></div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block text-zinc-300 text-sm mb-2 tracking-wide">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-amber-500"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 rounded transition"
          >
            {loading
              ? "Resetting..."
              : "Reset Password"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResetPassword;