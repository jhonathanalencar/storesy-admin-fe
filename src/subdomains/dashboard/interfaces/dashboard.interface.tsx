import Link from 'next/link';
import { PercentIcon, ShoppingCartIcon, TagIcon, UserIcon } from 'lucide-react';

export function DashboardInterface() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl p-2 md:p-4">
        <header>
          <div className="grid grid-cols-1 [grid-template-areas:'logo''user'] sm:grid-cols-[1fr_auto] sm:[grid-template-areas:'logo_user']">
            <div className="[grid-area:logo]">
              <h1 className="text-2xl font-black">
                Storesy <span className="text-orange-400">Admin</span>
              </h1>
            </div>
            <div className="flex justify-end gap-2 [grid-area:user]">
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold leading-[1.125rem] sm:text-lg">
                  Alice
                </span>
                <span className="text-xs text-zinc-300 sm:text-sm">
                  alice@storesy.com
                </span>
              </div>
              <div className="h-12 w-12 rounded-full bg-zinc-700">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="/dashboard/products"
              title="Products"
              className="flex items-center gap-1 rounded-full bg-zinc-700 px-3 py-1.5 hover:bg-white/5"
            >
              <ShoppingCartIcon className="h-4 w-4 text-green-400" />
              <span className="hidden text-sm font-medium sm:block">
                Products
              </span>
            </Link>
            <Link
              href="/dashboard/categories"
              title="Categories"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-white/5"
            >
              <TagIcon className="h-4 w-4 text-green-400" />
              <span className="hidden text-sm font-medium sm:block">
                Categories
              </span>
            </Link>
            <Link
              href="/dashboard/discounts"
              title="Discounts"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-white/5"
            >
              <PercentIcon className="h-4 w-4 text-green-400" />
              <span className="hidden text-sm font-medium sm:block">
                Discounts
              </span>
            </Link>
            <Link
              href="/dashboard/users"
              title="Users"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-white/5"
            >
              <UserIcon className="h-4 w-4 text-green-400" />
              <span className="hidden text-sm font-medium sm:block">Users</span>
            </Link>
          </nav>
        </header>
      </div>

      <div className="my-3 h-px bg-zinc-700" />

      <div className="mx-auto flex w-full max-w-6xl justify-center p-2 md:p-4">
        <div className="w-full max-w-[500px] rounded border border-zinc-700 bg-zinc-800 p-4 drop-shadow-md md:p-8">
          <h3 className="text-2xl font-semibold">
            Welcome to Storesy Admin, Alice
          </h3>
          <p className="mt-4 tracking-wide text-zinc-300">
            With this application you can view, add, and manage products,
            categories, discounts and users.
          </p>
        </div>
      </div>
    </section>
  );
}
