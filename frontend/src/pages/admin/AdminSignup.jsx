import { Link } from "react-router-dom";

const AdminSignup = () => {
  return (
    <div className="min-h-screen bg-[#005746] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-10 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>
          <p className="text-xs italic text-white/70 mt-1">Garden</p>

          <h2 className="text-2xl font-light mt-8">Admin Sign Up</h2>

          <p className="text-sm text-white/70 mt-2">
            Create admin account
          </p>
        </div>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
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