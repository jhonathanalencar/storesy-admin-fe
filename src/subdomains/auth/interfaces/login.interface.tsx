import Image from 'next/image';

import { providerMap, signIn } from '@shared/libs/auth.lib';
import logoImage from '@assets/images/logo.png';

export function LoginInterface() {
  return (
    <section className="mx-auto h-full w-full max-w-7xl p-2 md:p-4">
      <div className="flex h-full w-full flex-col items-center justify-center shadow-md md:flex-row">
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center bg-zinc-950">
          <Image
            src={logoImage}
            alt="Storesy Admin"
            priority
            className="h-20 w-20"
          />
          <h1 className="mt-3 text-2xl font-black">
            Storesy <span className="text-orange-400">Admin</span>
          </h1>

          <div className="mt-6 flex flex-col gap-4">
            {Object.values(providerMap).map((provider) => {
              return (
                <form
                  key={provider.id}
                  action={async () => {
                    'use server';
                    await signIn(provider.id);
                  }}
                >
                  <button
                    type="submit"
                    className="rounded bg-green-600 px-4 py-2 font-semibold outline-none transition-colors hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    Signin with {provider.name}
                  </button>
                </form>
              );
            })}
          </div>
        </div>
        <div className="bg-gradient-login bg-gradient h-full w-full flex-1 md:flex-[1.5]" />
      </div>
    </section>
  );
}
