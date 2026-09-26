"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-amber-200 px-5 py-2 font-semibold text-amber-800 hover:bg-amber-50"
    >
      Logout
    </button>
  );
}