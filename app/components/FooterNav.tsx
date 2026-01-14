import Link from "next/link";

const navLinks = [
  { href: "/", label: "Start Here" },
  { href: "/python/setup", label: "Python Setup" },
  { href: "/python/how-to-use-cs50p", label: "Use CS50P" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/teacher-guide", label: "Teacher Guide" },
];

export default function FooterNav() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-5xl px-6 py-8">
        <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-md border border-blue-100 bg-white px-3 py-1.5 font-mono text-blue-900 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-sm text-slate-500">
          This site provides structure and reassurance. CS50P does the teaching.
        </p>
      </div>
    </footer>
  );
}
