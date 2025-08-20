"use client";
import HomePage from "./home/page.js";
import LoginPage from "./login/page.js";
import axios from "axios";
import { useState } from "react";
import SignUpPage from "./signup/page.js";

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  async function Login(username, password) {
    try {
      const response = await axios.post("http://127.0.0.1:4000/login", {
        username,
        password,
      });

      const { user, token } = response.data;

      // localStorage.setItem("token", token);

      setLoginStatus(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function SignUp(username, email, password) {
    try {
      const response = await axios.post("http://127.0.0.1:4000/register", {
        username,
        email,
        password,
      });
      const { user, token } = response.data;
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  if (loginStatus) {
    return <HomePage />;
  } else {
    return  <LoginPage login={Login} />;
  }
}
