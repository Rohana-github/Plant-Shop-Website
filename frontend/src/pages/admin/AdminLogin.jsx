import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-[#005746] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-10 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>
          <p className="text-xs italic text-white/70 mt-1">Garden</p>

          <h2 className="text-2xl font-light mt-8">Admin Login</h2>
          <p className="text-sm text-white/70 mt-2">
            Access your admin dashboard
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="admin@example.com"
              className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-white/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#005746]" />
              Remember me
            </label>

            <Link to="/admin/forgot-password" className="hover:underline">
              Forgot?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-white text-[#005746] font-medium hover:bg-[#eefaf7] duration-300"
          >
            Login as Admin
          </button>

          <p className="text-center text-sm text-white/70 mt-6">
            Don’t have an account?{" "}
            <Link to="/admin/signup" className="underline text-white">
              Create account
            </Link>
          </p>
        </form>

        <p className="text-center text-sm text-white/70 mt-6">
          Back to{" "}
          <Link to="/" className="text-white underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;