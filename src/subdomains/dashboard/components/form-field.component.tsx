import {
  forwardRef,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface FormFieldRootProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

function FormFieldRoot({
  children,
  className = '',
  ...rest
}: FormFieldRootProps) {
  return (
    <div className={twMerge('mt-3 flex flex-col gap-1', className)} {...rest}>
      {children}
    </div>
  );
}

interface FormFieldLabelProps extends ComponentPropsWithoutRef<'label'> {
  children: ReactNode;
  className?: string;
}

function FormFieldLabel({
  children,
  className = '',
  ...rest
}: FormFieldLabelProps) {
  return (
    <label
      className={twMerge('font-medium text-zinc-300', className)}
      {...rest}
    >
      {children}
    </label>
  );
}

interface FormFieldInputProps extends ComponentPropsWithRef<'input'> {
  className?: string;
}

const FormFieldInput = forwardRef<HTMLInputElement, FormFieldInputProps>(
  ({ className = '', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70',
          className
        )}
        {...rest}
      />
    );
  }
);
FormFieldInput.displayName = 'FormFieldInput';

interface FormFieldErrorProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
  className?: string;
}

function FormFieldError({
  children,
  className = '',
  ...rest
}: FormFieldErrorProps) {
  return (
    <p
      role="alert"
      className={twMerge('text-sm text-red-500', className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export const FormField = {
  Root: FormFieldRoot,
  Label: FormFieldLabel,
  Input: FormFieldInput,
  Error: FormFieldError,
};
