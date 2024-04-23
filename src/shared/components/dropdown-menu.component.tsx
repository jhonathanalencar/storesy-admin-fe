'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { EllipsisIcon } from 'lucide-react';

export function DropdownMenu() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          aria-label="Product options"
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-700 outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <EllipsisIcon />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="data-[state=open]:animate-slide-down-and-fade data-[state=closed]:animate-slide-up-and-fade-out min-w-28 rounded bg-zinc-800 p-2 text-zinc-200 shadow-md"
          sideOffset={5}
        >
          <DropdownMenuPrimitive.Item className="flex h-7 select-none items-center rounded px-1 text-sm font-medium capitalize leading-none outline-none data-[highlighted]:bg-orange-400 data-[highlighted]:text-zinc-800">
            edit
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-7 select-none items-center rounded px-1 text-sm font-medium capitalize leading-none outline-none data-[highlighted]:bg-orange-400 data-[highlighted]:text-zinc-800">
            delete
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="flex h-7 select-none items-center rounded px-1 text-sm font-medium capitalize leading-none outline-none data-[highlighted]:bg-orange-400 data-[highlighted]:text-zinc-800">
            release
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Arrow className="fill-zinc-800" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
