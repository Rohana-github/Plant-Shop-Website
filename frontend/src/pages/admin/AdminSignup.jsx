import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import toast from "react-hot-toast";

const AdminSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log("Signup button clicked");

    if (password !== confirmPassword) {
      toast.success("Password and Confirm Password do not match");
      return;
    }

    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        password,
        role: "admin",
      });

      toast.success(res.data.message || "Signup successful");

      navigate("/admin/login");
    } catch (error) {
      toast.success(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#005746] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-10 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>
          <p className="text-xs italic text-white/70 mt-1">Garden</p>

          <h2 className="text-2xl font-light mt-8">Admin Sign Up</h2>

          <p className="text-sm text-white/70 mt-2">Create admin account</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full h-12 bg-white text-[#005746] font-medium hover:bg-[#eefaf7] duration-300"
          >
            Sign Up as Admin
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-white/30 flex-1"></div>
          <span className="text-white/60 text-sm">or</span>
          <div className="h-px bg-white/30 flex-1"></div>
        </div>

        <button className="w-full h-12 border border-white/30 flex items-center justify-center gap-3 hover:bg-white/10 duration-300">
          <span className="font-semibold">G</span>
          Continue with Google
        </button>

        <p className="text-center text-sm text-white/70 mt-6">
          Already have an account?{" "}
          <Link to="/admin/login" className="underline text-white">
            Login
          </Link>
        </p>

        <p className="text-center text-sm text-white/70 mt-3">
          Back to{" "}
          <Link to="/" className="underline text-white">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;