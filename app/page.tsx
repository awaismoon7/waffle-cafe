import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-700">
          Welcome to
        </p>

        <h1 className="text-5xl font-bold text-amber-950">
          Waffle Café
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-700">
          Fresh waffles, delicious toppings, and happy moments.
        </p>

        <button className="mt-8 rounded-full bg-amber-600 px-8 py-3 font-semibold text-white hover:bg-amber-700">
          Order Ahead
        </button>
      </section>
    </main>
  );
}