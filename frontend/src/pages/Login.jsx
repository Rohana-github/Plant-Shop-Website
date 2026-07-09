import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import API from "../api/axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error);
      toast.success(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] flex items-center justify-center px-6 font-['Poppins']">
      <div className="w-full max-w-md bg-white shadow-2xl p-8 md:p-10 text-[#005746]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>
          <p className="text-xs italic text-[#005746]/70 mt-1">Garden</p>

          <h2 className="text-2xl font-light mt-8">User Login</h2>
          <p className="text-sm text-gray-500 mt-2">
            Login to shop your favorite plants
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="user@example.com"
              className="w-full h-12 px-4 border border-[#005746]/40 outline-none focus:border-[#005746]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full h-12 px-4 border border-[#005746]/40 outline-none focus:border-[#005746]"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#005746]" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-[#005746] hover:underline"
            >
              Forgot?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#005746] text-white font-medium hover:bg-[#004638] duration-300"
          >
            Login as User
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        <div className="flex justify-center">
<GoogleLogin
  onSuccess={async (credentialResponse) => {
    try {
      const res = await API.post("/auth/google", {
        credential: credentialResponse.credential,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Google login successful");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error);
      alert(error.response?.data?.message || "Google login failed");
    }
  }}
  onError={() => {
    alert("Google Login Failed");
  }}
/>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#005746] underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;