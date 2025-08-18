"use client";

import Navbar from "@/app/components/includes/Navbar";
import { Eye, Mail, Lock, Apple, Chrome } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else if (data.session) {
      router.push("/dashboard");
    } else {
      setMessage("Sign-up successful, please login.");
    }

    setLoading(false);
  };

  return (
    <section className="sign_up_page special_bg bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)]">
      <Navbar />
      <section className="sign_up_form flex items-center justify-center min-h-screen">
        <div className="left w-full max-w-md p-6 bg-blue-950/10 backdrop-blur-2xl shadow-md border border-neutral-600 rounded-2xl ">
          <h2 className="text-2xl font-bold text-center mb-2">
            Hi there, ready to enjoy Creavpn?
          </h2>
          <p className="text-center text-sm text-neutral-300 mb-6">
            SignUp to get your account and start securing your digital life.
          </p>

          <div className="flex items-center border rounded-lg px-3 mb-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-3 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative flex items-center border rounded-lg px-3 mb-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-3 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Eye className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>

          <p className="text-sm text-blue-300 cursor-pointer mb-6">
            Forgot your password?
          </p>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-sky-500 mb-3"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          {message && <p className="text-green-600 mt-2">{message}</p>}

          {/* <button className="w-full py-3 rounded-lg bg-gray-100 font-semibold text-gray-700 hover:bg-gray-200 mb-6">
            Log in with code
          </button> */}

          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full py-3 flex items-center justify-center rounded-lg border font-semibold hover:bg-gray-50/10 mb-3">
            <Chrome className="w-5 h-5 mr-2" />
            Continue with Google
          </button>

          <button className="w-full py-3 flex items-center justify-center rounded-lg border font-semibold hover:bg-gray-50/10">
            <Apple className="w-5 h-5 mr-2" />
            Continue with Apple
          </button>
        </div>
      </section>
    </section>
  );
}
