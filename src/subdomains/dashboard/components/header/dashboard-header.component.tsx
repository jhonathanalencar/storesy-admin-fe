import { PercentIcon, ShoppingCartIcon, TagIcon, UserIcon } from 'lucide-react';

import { getSession } from '@shared/libs/get-session.lib';

import { DashboardLink } from './dashboard-link.component';
import { UserMenu } from '../user-menu.component';

export async function DashboardHeader() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="mx-auto w-full max-w-7xl p-2 md:p-4">
      <div className="grid grid-cols-1 [grid-template-areas:'logo''user'] sm:grid-cols-[1fr_auto] sm:[grid-template-areas:'logo_user']">
        <div className="[grid-area:logo]">
          <h1 className="text-2xl font-black">
            Storesy <span className="text-orange-400">Admin</span>
          </h1>
        </div>
        <div className="flex justify-end gap-2 [grid-area:user]">
          <div className="flex flex-col items-end">
            <strong
              aria-label="username"
              className="text-sm font-semibold leading-[1.125rem] sm:text-lg"
            >
              {user?.name}
            </strong>
            <address
              aria-label="user email"
              className="not-italic leading-none"
            >
              <span className="text-xs text-zinc-300 sm:text-sm">
                {user?.email}
              </span>
            </address>
          </div>
          <div className="h-12 w-12 rounded-full bg-zinc-700">
            {user && <UserMenu user={user} />}
          </div>
        </div>
      </div>
      <nav aria-label="Main menu" className="flex items-center gap-2">
        <DashboardLink href="/dashboard/products" title="Products">
          <ShoppingCartIcon className="h-4 w-4 text-green-400" />
          <span className="hidden text-sm font-medium sm:block">Products</span>
        </DashboardLink>
        <DashboardLink href="/dashboard/categories" title="Categories">
          <TagIcon className="h-4 w-4 text-green-400" />
          <span className="hidden text-sm font-medium sm:block">
            Categories
          </span>
        </DashboardLink>
        <DashboardLink href="/dashboard/discounts" title="Discounts">
          <PercentIcon className="h-4 w-4 text-green-400" />
          <span className="hidden text-sm font-medium sm:block">Discounts</span>
        </DashboardLink>
        <DashboardLink href="/dashboard/users" title="Users">
          <UserIcon className="h-4 w-4 text-green-400" />
          <span className="hidden text-sm font-medium sm:block">Users</span>
        </DashboardLink>
      </nav>
    </header>
  );
}
