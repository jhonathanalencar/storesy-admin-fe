'use client';

import { EllipsisIcon } from 'lucide-react';

import { DropdownMenu } from '@shared/components/dropdown-menu.component';

interface DropdownMenuProps {
  productName: string;
}

export function DropdownMenuOptions({ productName }: DropdownMenuProps) {
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
        <DropdownMenu.Item>edit</DropdownMenu.Item>
        <DropdownMenu.Item>delete</DropdownMenu.Item>
        <DropdownMenu.Item>release</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
