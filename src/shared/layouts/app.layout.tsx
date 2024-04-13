export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-full flex-row bg-zinc-900 text-zinc-100">
      <div className="flex-1">{children}</div>
    </main>
  );
}
