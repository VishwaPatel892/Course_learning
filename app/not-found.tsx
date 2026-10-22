// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-8 py-12 text-center max-w-lg mx-auto">
      <span className="inline-block text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
        404 · LESSON OR COURSE NOT FOUND
      </span>



      <p className="text-sm text-slate-500 leading-relaxed">
        The requested syllabus module or lesson could not be resolved in the curriculum directory.
      </p>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          href="/courses"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-md transition shadow-sm"
        >
          Return to Course Catalog
        </Link>
        <Link
          href="/topics/frontend/react"
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-md transition"
        >
          Explore Topics
        </Link>
      </div>
    </div>
  );
}
