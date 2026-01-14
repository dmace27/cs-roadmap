import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {children}
    </div>
  );
}
