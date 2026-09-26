"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Logging in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    // Login successful → customer dashboard
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-amber-950">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-600">
          Login to your Waffle Café account.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 px-4 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-amber-700 hover:text-amber-800"
          >
            Join Waffle Café
          </a>
        </p>
      </div>
    </main>
  );
}