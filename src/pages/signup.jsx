import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/logo1.png"; // Adjust path based on your project structure

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    emailPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050A1B] relative overflow-hidden">
      {/* Background chart effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] z-0">
        <div className="w-full h-full flex items-end">
          <div className="w-full flex items-end justify-between gap-1 px-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-green-500/60 w-full"
                style={{
                  height: `${Math.random() * 100 + 50}px`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-green-500/30 to-transparent z-0" />
      </div>

      {/* Logo */}
      <div className=" px-4 sm:px-20 py-4">
       
                 <div className="px-4 sm:px-8 py-5">
                    <div>
                   <img src={Logo1} className="h-8" alt="Website Logo" />
                   </div>
                 </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center px-4 z-10 ">
        <div className="w-full max-w-md bg-[#0A1020]/80 backdrop-blur-sm rounded-lg border  border-gray-800 p-8 ">
          <div className="text-left mb-6">
            <h1 className="text-white text-2xl font-semibold">Sign up</h1>
            <p className="text-gray-400 text-sm mt-1">Just some details to get you in!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-[#0A1020] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="emailPhone"
                placeholder="Email / Phone"
                value={formData.emailPhone}
                onChange={handleChange}
                className="w-full bg-[#0A1020] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#0A1020] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#0A1020] border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0A1020]/80 text-gray-400">Or</span>
              </div>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              {/* Google */}
              <button className="p-2 rounded-full bg-[#0A1020] border border-gray-700 text-white hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                    stroke="none"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                    stroke="none"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                    stroke="none"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                    stroke="none"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              </button>

              {/* Facebook */}
              <button className="p-2 rounded-full bg-[#0A1020] border border-gray-700 text-white hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* GitHub */}
              <button className="p-2 rounded-full bg-[#0A1020] border border-gray-700 text-white hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-400">
              Already Registered?{" "}
              <a href="#" className="text-green-500 hover:underline">
                Login
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-400">
              Support
            </a>
            <a href="#" className="hover:text-gray-400">
              Customer Care
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;