import Link from "next/link";

type CallToActionProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function CallToAction({
  href,
  label,
  variant = "primary",
}: CallToActionProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium transition";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}
