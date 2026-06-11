import { Link } from "react-router-dom";

const AdminForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#005746] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-10 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Plantify</h1>

          <p className="text-xs italic text-white/70 mt-1">
            Garden
          </p>

          <h2 className="text-2xl font-light mt-8">
            Forgot Password?
          </h2>

          <p className="text-sm text-white/70 mt-2">
            Enter admin email to reset password
          </p>
        </div>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Admin Email Address"
            className="w-full h-12 px-4 bg-white/90 text-[#005746] outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="w-full h-12 bg-white text-[#005746] font-medium hover:bg-[#eefaf7] duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-sm text-white/70 mt-6">
          Remember password?{" "}
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

export default AdminForgotPassword;