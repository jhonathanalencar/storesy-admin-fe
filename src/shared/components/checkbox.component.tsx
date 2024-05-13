'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from 'lucide-react';

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  labelText: string;
}

export function Checkbox({ labelText, className, id, ...rest }: CheckboxProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        id={id}
        className={twMerge(
          'flex h-5 w-5 items-center justify-center rounded border border-zinc-700 bg-zinc-800 p-1 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
          className
        )}
        {...rest}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="h-4 w-4 text-green-400" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="sr-only">
        {labelText}
      </label>
    </>
  );
}
