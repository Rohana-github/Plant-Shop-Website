import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.success("Password and Confirm Password do not match");
      return;
    }

    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      toast.success("Signup successful");
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data || error);
      toast.success(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] flex items-center justify-center px-6 font-['Poppins']">
      <div className="w-full max-w-md bg-white shadow-2xl p-8 md:p-10 text-[#005746]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>
          <p className="text-xs italic text-[#005746]/70 mt-1">Garden</p>

          <h2 className="text-2xl font-light mt-8">Create Account</h2>
          <p className="text-sm text-gray-500 mt-2">
            Join Plantify and start shopping
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 border border-[#005746]/40 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-[#005746]/40 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-[#005746]/40 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 border border-[#005746]/40 outline-none"
            required
          />

          <button className="w-full h-12 bg-[#005746] text-white">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#005746] underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;