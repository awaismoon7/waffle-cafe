"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();

    setUser(null);

    router.push("/");
    router.refresh();
  }

  return (
    <nav className="border-b border-amber-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="/" className="block">
          <h1 className="text-2xl font-bold text-amber-950">
            Waffle Café
          </h1>

          <p className="text-xs text-amber-700">
            Fresh. Sweet. Happy.
          </p>
        </a>

        {/* Main navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="font-medium text-amber-800 hover:text-amber-600"
          >
            Home
          </a>

          <a
            href="/menu"
            className="font-medium text-gray-600 hover:text-amber-600"
          >
            Menu
          </a>

          <a
            href="/deals"
            className="font-medium text-gray-600 hover:text-amber-600"
          >
            Deals
          </a>

          <a
            href="/order"
            className="font-medium text-gray-600 hover:text-amber-600"
          >
            Order Ahead
          </a>
        </div>

        {/* Customer / Login area */}
        {user ? (
          <div className="flex items-center gap-3">

            {/* Customer icon */}
            <a
              href="/dashboard"
              className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 hover:bg-amber-100"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-lg text-white">
                👤
              </div>

              <span className="hidden font-semibold text-amber-900 sm:block">
                My Account
              </span>
            </a>

            <button
              onClick={handleLogout}
              className="rounded-full px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100"
            >
              Logout
            </button>

          </div>
        ) : (
          <div className="flex items-center gap-3">

            <a
              href="/login"
              className="rounded-full px-5 py-2 font-semibold text-amber-800 hover:bg-amber-50"
            >
              Login
            </a>

            <a
              href="/signup"
              className="rounded-full bg-amber-600 px-5 py-2 font-semibold text-white hover:bg-amber-700"
            >
              Join Us
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}