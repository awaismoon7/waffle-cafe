"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Creating your account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: phone,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created! Please check your email if email confirmation is required."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-amber-950">
          Join Waffle Café
        </h1>

        <p className="mt-2 text-gray-600">
          Create your membership account.
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={6}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 px-4 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Create Account
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}