import { Link } from "react-router-dom";

function Signup() {
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

        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full h-12 px-4 border border-[#005746]/40 outline-none" />
          <input type="email" placeholder="Email Address" className="w-full h-12 px-4 border border-[#005746]/40 outline-none" />
          <input type="password" placeholder="Password" className="w-full h-12 px-4 border border-[#005746]/40 outline-none" />
          <input type="password" placeholder="Confirm Password" className="w-full h-12 px-4 border border-[#005746]/40 outline-none" />

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