// app/courses/[courseSlug]/[lessonSlug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/coursesData";
import LessonChecklist from "@/components/LessonChecklist";

export function generateStaticParams() {
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  courses.forEach((c) => {
    c.modules.forEach((m) => {
      m.lessons.forEach((l) => {
        params.push({ courseSlug: c.slug, lessonSlug: l.slug });
      });
    });
  });
  return params;
}

interface PageProps {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}

export default async function LessonViewPage({ params }: PageProps) {
  const { courseSlug, lessonSlug } = await params;
  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    notFound();
  }

  // Find module and lesson
  let foundLesson = course.modules[0]?.lessons.find((l) => l.slug === lessonSlug);
  if (!foundLesson && course.modules.length > 0) {
    foundLesson = course.modules[0].lessons[3] || course.modules[0].lessons[0];
  }

  return (
    <div className="space-y-6">
      {/* Top Banner Bar */}
      <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center justify-between text-xs shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            ← Back to Course Overview
          </Link>
          <span className="text-slate-300">|</span>
          <span className="font-semibold text-slate-900">{course.title}</span>
          <span className="text-2xs font-mono bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded">
            Core Track
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <span>
            Lesson 4 of 14 · <strong className="text-slate-800">28% completed</strong>
          </span>
          <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-600 h-1.5 rounded-full w-[28%]" />
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Sidebar: Course Curriculum Navigation */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-4 shadow-sm text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-2xs">
              Course Curriculum
            </span>
            <span className="text-slate-400">4 Modules</span>
          </div>

          {/* Module 1 */}
          <div className="space-y-2">
            <div className="flex justify-between font-bold text-slate-800 text-xs">
              <span>Module 1: Routing Architecture</span>
              <span className="text-slate-400 text-2xs">3/4 Done</span>
            </div>
            <div className="space-y-1 pl-2">
              <div className="flex items-center justify-between py-1 text-slate-500">
                <span>01 Introduction &amp; Philosophy</span>
                <span className="text-2xs">12m</span>
              </div>
              <div className="flex items-center justify-between py-1 text-slate-500">
                <span>02 Server vs Client Components</span>
                <span className="text-2xs">16m</span>
              </div>
              <div className="flex items-center justify-between py-1 text-slate-500">
                <span>03 Nested Layouts &amp; Templates</span>
                <span className="text-2xs">14m</span>
              </div>
              <div className="flex items-center justify-between py-1 bg-blue-50 text-blue-700 font-semibold px-2 rounded">
                <span>04 Dynamic &amp; Catch-All Routes</span>
                <span className="text-2xs font-mono">6m</span>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between font-bold text-slate-700 text-xs">
              <span>Module 2: Data Fetching &amp; Caching</span>
              <span className="text-slate-400 text-2xs">0/3</span>
            </div>
            <div className="space-y-1 pl-2 text-slate-400">
              <div className="flex justify-between py-1">
                <span>05 Server-side Fetching &amp; Cache</span>
                <span className="text-2xs">22m</span>
              </div>
              <div className="flex justify-between py-1">
                <span>06 Revalidation Strategies</span>
                <span className="text-2xs">14m</span>
              </div>
              <div className="flex justify-between py-1">
                <span>07 Parallel &amp; Intercepting Routes</span>
                <span className="text-2xs">25m</span>
              </div>
            </div>
          </div>

          {/* Module 3 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between font-bold text-slate-700 text-xs">
              <span>Module 3: Mutation &amp; Boundary</span>
              <span className="text-slate-400 text-2xs">0/2</span>
            </div>
            <div className="space-y-1 pl-2 text-slate-400">
              <div className="flex justify-between py-1">
                <span>08 Server Actions &amp; Forms</span>
                <span className="text-2xs">30m</span>
              </div>
              <div className="flex justify-between py-1">
                <span>09 Error Boundaries &amp; notFound()</span>
                <span className="text-2xs">16m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content: Lesson Reading */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-sm">
          {/* Breadcrumb */}
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Courses</span>
            <span>/</span>
            <span>Next.js App Router</span>
            <span>/</span>
            <span>Module 1</span>
            <span>/</span>
            <span className="text-slate-800 font-medium">Dynamic &amp; Catch-All Routes</span>
          </div>

          {/* Lesson Header */}
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-blue-600 font-bold">Module 1 · Lesson 04</span>
              <span>•</span>
              <span className="text-slate-500">System Design Foundations</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              04 Dynamic &amp; Catch-All Routes
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span>6 min read</span>
              <span>•</span>
              <span>Code Practice Available</span>
              <span>•</span>
              <span>Updated for Next.js 15+</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              When building data-driven web platforms, URLs rarely map to static directory names alone. The Next.js App Router utilizes strict directory conventions to resolve dynamic segments without requiring custom regex routing tables.
            </p>
            <p>
              A dynamic segment is defined by wrapping a folder name in square brackets: <code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded font-mono text-xs">[slug]</code> or <code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded font-mono text-xs">[id]</code>. This segment parameter is passed directly to the route&apos;s layout, page, and route handler functions via the asynchronous <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-xs">params</code> promise.
            </p>
          </div>

          {/* Comparison Cards: Single vs Catch-All */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">SINGLE DYNAMIC SEGMENT</span>
                <span className="font-mono text-slate-400">[param]</span>
              </div>
              <p className="text-xs text-slate-500">
                Matches a single path element. For instance, <code className="text-slate-700 font-mono">app/posts/[id]/page.tsx</code> matches <code className="text-blue-600 font-mono">/posts/alpha</code>.
              </p>
              <div className="bg-white border border-slate-200 p-2.5 rounded font-mono text-xs text-slate-700">
                params: &#123; id: &quot;alpha&quot; &#125;
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">CATCH-ALL SEGMENT</span>
                <span className="font-mono text-slate-400">[...slug]</span>
              </div>
              <p className="text-xs text-slate-500">
                Captures multiple arbitrary nested segments sequentially into a string array.
              </p>
              <div className="bg-white border border-slate-200 p-2.5 rounded font-mono text-xs text-slate-700">
                params: &#123; slug: [&quot;docs&quot;, &quot;v2&quot;, &quot;routing&quot;] &#125;
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">
              The Catch-All Convention (<code className="font-mono text-blue-600">[...slug]</code>)
            </h2>
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-900 text-slate-100 text-xs font-mono">
              <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center text-slate-400 text-2xs">
                <span>app/blog/[...slug]/page.tsx</span>
                <span>TypeScript</span>
              </div>
              <pre className="p-4 overflow-x-auto leading-relaxed">
                {`// app/blog/[...slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold">
        Viewing slug path: {slug.join('/')}
      </h1>
    </section>
  );
}`}
              </pre>
            </div>
          </div>

          {/* Key Takeaway Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-900">
            <div>
              <strong className="font-bold">Key Takeaway</strong>
              <p className="mt-0.5 leading-relaxed text-blue-800">
                Catch-all routes (<code className="font-mono">[...slug]</code>) capture all nested path segments into an array of strings. Always remember that starting in modern Next.js versions, the <code className="font-mono">params</code> prop must be awaited before accessing its constituent segments.
              </p>
            </div>
          </div>

          {/* Interactive Self-Assessment Checklist Component */}
          <LessonChecklist />

          {/* Bottom Next/Prev Lesson Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button className="border border-slate-200 rounded-md px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 shadow-sm">
              ← PREVIOUS LESSON: 03 Nested Layouts &amp; Templates
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5 py-2 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              NEXT LESSON: 05 Server-side Fetching &amp; Cache →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
