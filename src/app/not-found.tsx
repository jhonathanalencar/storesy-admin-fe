import Link from 'next/link';

import { AppLayout } from '@shared/layouts/app.layout';

export default function NotFound() {
  return (
    <AppLayout>
      <section className="mx-auto min-h-full max-w-7xl p-4">
        <div className="grid place-items-center">
          <p className="text-base font-semibold text-orange-500 md:text-lg">
            404
          </p>
          <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Page not found
          </h1>
          <Link
            href="/"
            className="mt-10 flex h-12 items-center justify-center rounded border border-zinc-800 bg-zinc-800/0 px-4 font-semibold outline-none hover:bg-zinc-800/30 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            Go back home
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
