import type { ReactNode } from "react";
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderNav />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        {children}
      </main>
      <FooterNav />
    </div>
  );
}
