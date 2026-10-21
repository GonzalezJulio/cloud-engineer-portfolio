import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {children}
    </main>
  );
}
