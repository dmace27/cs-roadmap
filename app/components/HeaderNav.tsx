import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-is-cs", label: "What is Computer Science?"},
  { href: "/roadmap", label: "Roadmap" },
  { href: "/python/setup", label: "Python Setup" },
  { href: "/resources", label: "Resources" }
];

export default function HeaderNav() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-5xl px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-4xl font-bold tracking-tight text-blue-900"
            >
              Computer Science Roadmap 
            </Link>
          </div>
        </div>
        <nav className="mt-5 flex flex-wrap gap-2 text-sm text-slate-600 font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-md border border-blue-100 bg-white px-3 py-1.5 text-blue-900 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
 