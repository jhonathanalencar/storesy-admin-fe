'use client';

import type { ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

interface DropdownMenuRootProps
  extends DropdownMenuPrimitive.DropdownMenuProps {
  children: ReactNode;
}

export function DropdownMenuRoot({ children, ...rest }: DropdownMenuRootProps) {
  return (
    <DropdownMenuPrimitive.Root {...rest}>
      {children}
    </DropdownMenuPrimitive.Root>
  );
}

interface DropdownMenuTriggerProps
  extends DropdownMenuPrimitive.DropdownMenuTriggerProps {
  children: ReactNode;
}

export function DropdownMenuTrigger({
  children,
  ...rest
}: DropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger {...rest}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}

interface DropdownMenuContentProps
  extends DropdownMenuPrimitive.DropdownMenuContentProps {
  children: ReactNode;
}

export function DropdownMenuContent({
  children,
  ...rest
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className="min-w-28 rounded bg-zinc-800 p-2 text-zinc-200 shadow-md data-[state=closed]:animate-slide-up-and-fade-out data-[state=open]:animate-slide-down-and-fade"
        sideOffset={5}
        {...rest}
      >
        {children}
        <DropdownMenuPrimitive.Arrow className="fill-zinc-800" />
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

interface DropdownMenuItemProps
  extends DropdownMenuPrimitive.DropdownMenuItemProps {
  children: ReactNode;
}

export function DropdownMenuItem({ children, ...rest }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className="flex h-7 select-none items-center rounded px-1 text-sm font-medium capitalize leading-none outline-none data-[highlighted]:bg-orange-400 data-[highlighted]:text-zinc-800"
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
