interface DashboardInterfaceProps {
  userName: string;
}

export function DashboardInterface({ userName }: DashboardInterfaceProps) {
  return (
    <section aria-label="dashboard welcome">
      <div className="mx-auto flex w-full max-w-6xl justify-center p-2 md:p-4">
        <div className="w-full max-w-[500px] rounded border border-zinc-700 bg-zinc-800 p-4 drop-shadow-md md:p-8">
          <h3 className="text-xl font-semibold">
            Welcome to Storesy Admin, {userName}
          </h3>
          <p className="mt-4 tracking-wide text-zinc-300">
            With this application you can view, add, and manage products,
            categories, discounts and users.
          </p>
        </div>
      </div>
    </section>
  );
}
