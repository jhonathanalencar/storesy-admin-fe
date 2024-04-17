import { DashboardHeader } from '@subdomains/dashboard/components/header/dashboard-header.component';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-full flex-col bg-zinc-900 text-zinc-100">
      <DashboardHeader />
      <div role="separator" className="my-3 h-px bg-zinc-700" />
      <div className="flex-1">{children}</div>
    </main>
  );
}
