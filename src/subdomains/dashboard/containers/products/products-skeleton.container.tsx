import { Skeleton } from '../../components/skeleton.component';

export function ProductsContainerSkeleton() {
  return (
    <section
      aria-label="Loading products"
      className="mx-auto h-full w-full max-w-7xl p-2 md:p-4"
    >
      <Skeleton className="h-7 w-[88px]" />
      <Skeleton className="my-5 h-[42px] w-[234px] rounded-md" />
      <div className="h-[760px] w-full rounded py-3">
        <Skeleton />
      </div>
    </section>
  );
}
