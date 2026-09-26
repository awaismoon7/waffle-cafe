export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Navigation */}
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

          {/* Navigation links */}
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

          {/* Login / Signup */}
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
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-700">
              Your waffle. Your way.
            </p>

            <h2 className="text-5xl font-bold leading-tight text-amber-950 md:text-6xl">
              Fresh waffles,
              <br />
              happy moments.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover delicious waffles, collect loyalty points, enjoy
              exclusive deals, and order ahead from Waffle Café.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/signup"
                className="rounded-full bg-amber-600 px-7 py-3 font-semibold text-white shadow-sm hover:bg-amber-700"
              >
                Join Waffle Café
              </a>

              <a
                href="/login"
                className="rounded-full border border-amber-300 bg-white px-7 py-3 font-semibold text-amber-800 hover:bg-amber-50"
              >
                Login
              </a>
            </div>
          </div>

          {/* Waffle visual */}
          <div className="flex min-h-80 items-center justify-center rounded-3xl bg-amber-100">
            <div className="text-center">
              <div className="text-8xl">🧇</div>

              <p className="mt-4 text-lg font-semibold text-amber-900">
                Freshly made for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Why join?
            </p>

            <h2 className="mt-2 text-3xl font-bold text-amber-950">
              More than just waffles
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <div className="text-3xl">⭐</div>

              <h3 className="mt-4 text-xl font-bold text-amber-950">
                Earn Points
              </h3>

              <p className="mt-2 text-gray-600">
                Collect loyalty points with your purchases and unlock rewards.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <div className="text-3xl">🎁</div>

              <h3 className="mt-4 text-xl font-bold text-amber-950">
                Exclusive Deals
              </h3>

              <p className="mt-2 text-gray-600">
                Get special offers and promotions available to members.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <div className="text-3xl">🛍️</div>

              <h3 className="mt-4 text-xl font-bold text-amber-950">
                Order Ahead
              </h3>

              <p className="mt-2 text-gray-600">
                Choose your favourites and prepare your order before pickup.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Loyalty promotion */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-amber-600 px-8 py-12 text-center text-white">
          
          <p className="text-sm font-bold uppercase tracking-widest">
            Member reward
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Buy 6 waffles, get your 7th free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-amber-50">
            Join Waffle Café and start collecting visits toward your next
            delicious reward.
          </p>

          <a
            href="/signup"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-amber-700 hover:bg-amber-50"
          >
            Become a Member
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
          © 2026 Waffle Café. Fresh waffles, happy moments.
        </div>
      </footer>
    </main>
  );
}