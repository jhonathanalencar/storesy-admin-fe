import Link from 'next/link';
import { LogInIcon } from 'lucide-react';

export function HomeInterface() {
  return (
    <section className="flex h-full w-full flex-col bg-zinc-900 bg-home p-2 bg-blend-multiply md:p-4">
      <h1 className="text-3xl font-black md:text-4xl">
        Storesy <span className="text-orange-400">Admin</span>
      </h1>

      <div className="my-3 h-px bg-zinc-700" />

      <div className="flex-1">
        <p className="max-w-5xl text-base font-medium text-zinc-300 md:text-lg">
          Welcome to Storesy, our vibrant online marketplace, where convenience
          meets quality! Dive into a world of endless possibilities as you
          explore our curated selection of premium products, handpicked just for
          you. Whether you&apos;re searching for trendy fashion essentials,
          innovative gadgets, or must-have home decor, we&apos;ve got you
          covered.
        </p>
      </div>

      <div className="my-3 h-px bg-zinc-700" />

      <Link
        href="/auth/login"
        className="flex w-fit items-center gap-1 rounded bg-green-500 px-4 py-2 font-medium transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
      >
        <span className="text-lg text-zinc-100">Login</span>
        <LogInIcon className="size-6" />
      </Link>
    </section>
  );
}
