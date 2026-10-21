// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Topics", href: "/topics/frontend/react" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-6">
          <Link href="/courses" className="text-xl font-bold text-blue-600 tracking-tight">
            LearnSpace
          </Link>

          <div className="relative hidden md:block w-72">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-xs">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search curriculum index..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-blue-500 text-slate-800"
            />
          </div>

          <nav className="flex items-center gap-6 ml-2">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href.split("/")[1] ? `/${link.href.split("/")[1]}` : link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium pb-5 pt-5 transition relative ${isActive ? "text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <button className="hover:text-slate-800 text-base" title="Notifications">
            🔔
          </button>
          <button className="hover:text-slate-800 text-base" title="Help">
            ❔
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-3.5 py-1.5 rounded-md transition shadow-sm">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
