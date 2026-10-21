import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {children}
      <Analytics />
    </main>
  );
}
