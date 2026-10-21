// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <Link href="/courses" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">About</span>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">About LearnSpace</h1>
        <p className="text-sm text-slate-500 mt-1">Disciplined Academic Minimalist Curriculum Engine</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-4 text-sm text-slate-600 leading-relaxed shadow-sm">
        <p>
          LearnSpace is a curriculum platform built with Next.js App Router to showcase production-grade frontend architecture, modular routing conventions, and interactive technical learning.
        </p>
        <h2 className="text-base font-bold text-slate-900 pt-2">Demonstrated Next.js App Router Concepts</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>
            <strong>Static Routes &amp; Filtering (<code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded text-xs">/courses</code>):</strong>
            Dynamic client-side filtering across curriculum disciplines (Frontend, Backend, Architecture).
          </li>
          <li>
            <strong>Dynamic Route Segments (<code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded text-xs">[courseSlug]</code>):</strong>
            Automated syllabus rendering with static pre-generation for optimal latency.
          </li>
          <li>
            <strong>Nested Dynamic Segments (<code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded text-xs">[courseSlug]/[lessonSlug]</code>):</strong>
            Two-column interactive lesson reader with modular sidebar navigation and active state preservation.
          </li>
          <li>
            <strong>Optional Catch-All Routes (<code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded text-xs">[[...slug]]</code>):</strong>
            Domain tracks and taxonomy resolution (<code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">/topics/frontend/react</code>).
          </li>
        </ul>
      </div>
    </div>
  );
}
