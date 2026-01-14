import Link from "next/link";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
};

export default function Card({ title, description, href }: CardProps) {
  const content = (
    <div className="flex h-full flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow">
      <h3 className="text-base font-semibold text-blue-900">{title}</h3>
      {description ? <p className="text-sm text-slate-600">{description}</p> : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
