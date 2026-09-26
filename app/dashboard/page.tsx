
import { createSupabaseServerClient } from "@/lib/supabase-server";
import LogoutButton from "../logout/LogoutButton";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-amber-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-700">
            You are not logged in.
          </h1>

          <a
            href="/login"
            className="mt-4 inline-block rounded-full bg-amber-600 px-6 py-3 font-semibold text-white"
          >
            Go to Login
          </a>
        </div>
      </main>
    );
  }

  // Get the customer's profile from our database
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, membership_code")
    .eq("id", user.id)
    .single();

  const customerName = profile?.full_name || "Waffle Café Member";
  const membershipCode = profile?.membership_code || "Not available";

  return (
    <main className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="border-b border-amber-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="block">
            <h1 className="text-2xl font-bold text-amber-950">
              Waffle Café
            </h1>

            <p className="text-xs text-amber-700">
              Fresh. Sweet. Happy.
            </p>
          </a>

          <div className="flex items-center gap-3">
  <a
    href="/"
    className="font-semibold text-amber-800 hover:text-amber-600"
  >
    Home
  </a>

  <LogoutButton />
</div>
        </div>
      </nav>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {/* Welcome */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Customer Dashboard
          </p>

          <h2 className="mt-2 text-4xl font-bold text-amber-950">
            Welcome, {customerName}! 👋
          </h2>

          <p className="mt-3 text-gray-600">
            Here is your Waffle Café membership.
          </p>
        </div>

        {/* Membership card */}
        <div className="mt-8 rounded-3xl bg-amber-600 p-8 text-white shadow-lg">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-100">
                Waffle Café Member
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {customerName}
              </h3>

              <p className="mt-4 text-sm text-amber-100">
                Membership Code
              </p>

              <p className="mt-1 text-xl font-bold tracking-widest">
                {membershipCode}
              </p>
            </div>

            <div className="rounded-2xl bg-white/20 p-6 text-center">
              <p className="text-sm text-amber-100">
                Bonus Points
              </p>

              <p className="mt-1 text-4xl font-bold">
                0
              </p>

              <p className="mt-1 text-sm text-amber-100">
                points
              </p>
            </div>
          </div>
        </div>

        {/* Loyalty progress */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-amber-950">
                Your Loyalty Card
              </h3>

              <p className="mt-1 text-gray-600">
                Buy 6 waffles and get your 7th free.
              </p>
            </div>

            <span className="font-bold text-amber-700">
              0 / 6
            </span>
          </div>

          <div className="mt-6 grid grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div
                key={number}
                className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-amber-200 bg-amber-50 text-xl"
              >
                🧇
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            6 purchases completed → 7th waffle free 🎉
          </p>
        </div>

        {/* Quick actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="/order"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <div className="text-3xl">🛍️</div>

            <h3 className="mt-4 text-xl font-bold text-amber-950">
              Order Ahead
            </h3>

            <p className="mt-2 text-gray-600">
              Choose your favourite waffles and prepare your order.
            </p>
          </a>

          <a
            href="/deals"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <div className="text-3xl">🎁</div>

            <h3 className="mt-4 text-xl font-bold text-amber-950">
              Deals & Rewards
            </h3>

            <p className="mt-2 text-gray-600">
              Discover member-only offers and rewards.
            </p>
          </a>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📋</div>

            <h3 className="mt-4 text-xl font-bold text-amber-950">
              Order History
            </h3>

            <p className="mt-2 text-gray-600">
              Your previous orders will appear here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}