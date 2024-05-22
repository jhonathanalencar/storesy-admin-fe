'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { EllipsisIcon } from 'lucide-react';

import { deleteProductAction, releaseProductAction } from '../actions';

import { DropdownMenu } from '@shared/components/dropdown-menu.component';

interface DropdownMenuProps {
  productId: string;
  productName: string;
}

export function DropdownMenuOptions({
  productId,
  productName,
}: DropdownMenuProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label={`${productName} options`}
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-700 outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <EllipsisIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Link
            href={`/dashboard/products/${productId}/edit`}
            className="flex h-full w-full items-center"
          >
            edit
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <form
            action={() => {
              startTransition(async () => {
                const data = await deleteProductAction({ productId });
                if (data?.error) {
                  alert(data.error.message);
                  return;
                }
                alert('Product deleted');
              });
            }}
            className="h-full w-full"
          >
            <button
              type="submit"
              disabled={isPending}
              className="h-full w-full text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              delete
            </button>
          </form>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <form
            action={() => {
              startTransition(async () => {
                const data = await releaseProductAction({ productId });
                if (data?.error) {
                  alert(data.error.message);
                  return;
                }
                alert('Product released');
              });
            }}
            className="h-full w-full"
          >
            <button
              type="submit"
              disabled={isPending}
              className="h-full w-full text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              release
            </button>
          </form>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
