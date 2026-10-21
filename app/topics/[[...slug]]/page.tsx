// app/topics/[[...slug]]/page.tsx
import Link from "next/link";
import { reactTopicModules } from "@/data/coursesData";

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["frontend"] },
    { slug: ["frontend", "react"] },
  ];
}

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function TopicsCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const currentPath = slug && slug.length > 0 ? `/topics/${slug.join("/")}` : "/topics";

  return (
    <div className="space-y-6">
      {/* Top Special Banner Demonstrating Optional Catch-All */}
      <div className="bg-slate-900 text-white text-xs px-4 py-2.5 rounded-lg flex items-center justify-between font-mono shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">⚡ Route pattern:</span>
          <span className="text-slate-300">/topics/[[...slug]]</span>
          <span className="text-slate-500">→</span>
          <span className="text-emerald-400 font-semibold">resolved to: {currentPath}</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-2xs">
            Optional Catch-All
          </span>
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-2xs">
            SSR Node Layer
          </span>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Link href="/courses" className="text-blue-600 hover:underline">
            ← All Topics
          </Link>
          <span>/</span>
          <span>Topics</span>
          <span>/</span>
          <span>Frontend</span>
          <span>/</span>
          <span className="text-slate-800 font-medium">React</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-2xs font-semibold">
            ● Curriculum Track 2025
          </span>
          <span>4 Modules Available</span>
        </div>
      </div>

      {/* Specialized Domain Track Hero */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
            Specialized Domain Track
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            React &amp; Next.js Ecosystem
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Deep dive into component architecture, state machines, server rendering paradigms, and modern framework primitives designed for production-scale distributed applications.
          </p>
        </div>

        {/* 4 Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-100 text-xs">
          <div>
            <p className="text-slate-400 font-medium">Total Content</p>
            <p className="text-base font-bold text-slate-900 mt-0.5">44 Lessons</p>
          </div>
          <div>
            <p className="text-slate-400 font-medium">Difficulty Range</p>
            <p className="text-base font-bold text-slate-900 mt-0.5">Int. to Advanced</p>
          </div>
          <div>
            <p className="text-slate-400 font-medium">Core Primitives</p>
            <p className="text-base font-bold text-slate-900 mt-0.5">RSC, Hydration, Signals</p>
          </div>
          <div>
            <p className="text-slate-400 font-medium">Verification</p>
            <p className="text-base font-bold text-slate-900 mt-0.5">Peer-Reviewed</p>
          </div>
        </div>
      </div>

      {/* Subcategory Filter Tabs */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-2">
          {["All React", "Server Components", "State & Signals", "Routing Architecture"].map(
            (tab, i) => (
              <button
                key={tab}
                className={`px-3 py-1.5 rounded border ${i === 0
                    ? "bg-blue-600 text-white border-blue-600 font-medium"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <span className="text-slate-400">Sorted by Curriculum Sequence</span>
      </div>

      {/* 4 Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reactTopicModules.map((mod) => (
          <div
            key={mod.moduleNumber}
            className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-mono font-bold text-2xs">
                  {mod.moduleNumber}
                </span>
                <span className="text-slate-400">
                  {mod.lessonsCount} Lessons • {mod.difficulty}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900">{mod.title}</h3>

              <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-2xs flex items-center justify-center">
                  {mod.instructorInitials}
                </div>
                <span>
                  <strong>{mod.instructor}</strong> · {mod.instructorRole}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-400 text-2xs truncate max-w-[180px]">
                Slug: {mod.slug}
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href={mod.slug}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  View course →
                </Link>
                <Link
                  href={mod.slug}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded text-2xs transition"
                >
                  Start topic
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Related Learning Paths */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <div className="flex justify-between items-center text-xs">
          <h4 className="font-bold text-slate-900">Related Learning Paths</h4>
          <span className="text-blue-600 cursor-pointer">Explore graph ↗</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-blue-600 font-bold text-xs">Frontend Architecture</span>
            <p className="text-xs text-slate-500">Design systems, micro-frontends &amp; testing</p>
            <p className="text-xs text-blue-600 font-semibold pt-2">3 Tracks →</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-blue-600 font-bold text-xs">Distributed Web</span>
            <p className="text-xs text-slate-500">Edge computing, caching layers &amp; geo-routing</p>
            <p className="text-xs text-blue-600 font-semibold pt-2">5 Tracks →</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-blue-600 font-bold text-xs">TypeScript Deep Dive</span>
            <p className="text-xs text-slate-500">Conditional types, template literals &amp; ASTs</p>
            <p className="text-xs text-blue-600 font-semibold pt-2">4 Tracks →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
