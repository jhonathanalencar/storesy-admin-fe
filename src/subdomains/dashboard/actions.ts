'use server';

import { signOut } from '@shared/libs/auth.lib';

export async function signOutAction() {
  await signOut({
    redirectTo: '/',
    redirect: true,
  });
}
