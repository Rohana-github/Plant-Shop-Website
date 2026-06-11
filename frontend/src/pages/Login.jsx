function Login({ setPage }) {
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

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full h-12 px-4 border border-[#005746]/40 outline-none focus:border-[#005746]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-12 px-4 border border-[#005746]/40 outline-none focus:border-[#005746]"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#005746]" />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => setPage("forgot")}
              className="hover:underline text-[#005746]"
            >
              Forgot?
            </button>
          </div>

          <button
            type="button"
            onClick={() => setPage("checkout")}
            className="w-full h-12 bg-[#005746] text-white font-medium hover:bg-[#004638] duration-300"
          >
            Login as User
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <button
            type="button"
            className="w-full h-12 border border-[#005746]/40 flex items-center justify-center gap-3 hover:bg-[#eefaf7] duration-300"
          >
            <span className="font-semibold">G</span>
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => setPage("signup")}
            className="text-[#005746] underline"
          >
            Create account
          </button>
        </p>

        <p className="text-center text-sm text-gray-500 mt-3">
          Back to{" "}
          <button
            type="button"
            onClick={() => setPage("login")}
            className="text-[#005746] underline"
          >
            Home
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;