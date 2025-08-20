"use client";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function SignUpPage( {signUp} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && email && password) {
      await signUp(username, email, password);
    }
  };

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="bg-black h-screen w-[50vw] hidden lg:flex flex-col justify-center items-center">
        <div className="w-[30rem] h-[30rem]">
          <DotLottieReact src="/Login.lottie" loop autoplay />
        </div>
        <h1 className="font-extrabold text-4xl text-center p-20 text-white">
          Join us
        </h1>
      </div>

      {/* Right Section */}
      <div className="bg-white text-black h-screen w-full lg:w-[50vw] flex flex-col justify-center items-center gap-2 px-[72px]">
        <h1 className="font-extrabold text-4xl underline mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-bold text-xl">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username.."
              className="border-2 p-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-bold text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email.."
              className="border-2 p-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-bold text-xl">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password.."
              className="border-2 p-4 rounded-2xl"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 py-4 rounded-2xl text-white font-bold hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>

        <span className="text-sm">
          Have an account?{" "}
          <a
            href="/login"
            className="hover:underline hover:text-blue-600 font-medium"
          >
            Login
          </a>
        </span>
      </div>
    </div>
  );
}
