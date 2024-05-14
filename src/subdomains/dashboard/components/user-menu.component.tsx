'use client';

import Image from 'next/image';
import type { User } from 'next-auth';

import { signOutAction } from '../actions';

import { DropdownMenu } from '@shared/components/dropdown-menu.component';

import defaultAvatarIcon from '@assets/images/default-avatar-icon.jpg';

interface UserMenuProps {
  user: User;
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
        <Image
          src={user.image ?? defaultAvatarIcon}
          alt={user.name ?? 'User profile'}
          width={48}
          height={48}
          priority
          className="h-full w-full rounded-full"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <form
            action={async () => {
              await signOutAction();
            }}
          >
            <button type="submit">Sign out</button>
          </form>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
