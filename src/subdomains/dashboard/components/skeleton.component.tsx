import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      role="alert"
      aria-busy
      aria-live="polite"
      aria-label="Loading..."
      className={twMerge('shimmer h-full w-full rounded', className)}
    />
  );
}
