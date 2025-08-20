"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function LoginPage( {login}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(login)
  const Submit = async (e) => {
    e.preventDefault();
    if (username && password) {
      await login(username, password)
    }
  };

  return (
    <div className="flex">
      <div className="bg-black h-screen w-[50vw] hidden lg:flex flex-col justify-center items-center">
        <div className="w-[30rem] h-[30rem]">
          <DotLottieReact src="/Login.lottie" loop autoplay />
        </div>
        <h1 className="font-extrabold text-4xl text-center p-20 text-white">
          Welcome back!
        </h1>
      </div>

      <div className="bg-white text-black h-screen w-full lg:w-[50vw] flex flex-col justify-center items-center gap-2 px-[72px]">
        <h1 className="font-extrabold text-4xl underline mb-4">Login</h1>
        <form onSubmit={Submit} className="space-y-4 w-full">
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-bold text-xl">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username.."
              className="border-2 p-4 rounded-2xl"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-bold text-xl">
              Password
            </label>
            <input
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
            Login
          </button>
        </form>

        <a
          href="#"
          className="self-end hover:underline hover:text-blue-600 text-sm"
        >
          Forgotten password?
        </a>
        <span className="text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="hover:underline hover:text-blue-600 font-medium"
          >
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
}
