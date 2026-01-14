import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-2 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <h2>{title}</h2>
        {description ? <p className="text-slate-600">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
