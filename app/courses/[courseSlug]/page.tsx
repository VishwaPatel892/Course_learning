// app/courses/[courseSlug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/coursesData";

export function generateStaticParams() {
  return courses.map((course) => ({
    courseSlug: course.slug,
  }));
}

interface PageProps {
  params: Promise<{ courseSlug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseSlug } = await params;
  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Link href="/courses" className="hover:text-slate-700">
            Courses
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{course.title}</span>
        </div>
        <Link href="/courses" className="hover:text-slate-700 flex items-center gap-1">
          ← Back to courses
        </Link>
      </div>

      {/* Hero & Structure Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
              {course.difficulty}
            </span>
            <span className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
              {course.lessonsCount} Lessons
            </span>
            <span className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
              Estimated {course.estimatedHours} hrs
            </span>
            <span className="bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Open Access
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {course.title}
          </h1>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
              {course.instructorInitials}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{course.instructor}</p>
              <p className="text-xs text-slate-500">{course.instructorRole}</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed pt-2">{course.description}</p>

          <div className="flex items-center gap-3 pt-4">
            <Link
              href={`/courses/${course.slug}/lesson-04`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-md transition shadow-sm"
            >
              Start learning
            </Link>
            <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-md transition">
              View syllabus
            </button>
          </div>
        </div>


        <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-700">Curriculum Structure</span>
            <span className="font-mono text-slate-400">{course.versionTag}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                🌐 Zero Dependencies
              </p>
              <p className="text-slate-500 mt-0.5">
                Self-contained browser sandboxes and local execution paths.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                💻 Code-Centric Pedagogy
              </p>
              <p className="text-slate-500 mt-0.5">
                Structured architecture blueprints and source comparisons.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                🛡️ Production Auditing
              </p>
              <p className="text-slate-500 mt-0.5">
                Includes cache profiling and server mutation boundaries.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400">Progress tracking</span>
            <span className="text-blue-600 font-semibold">Unenrolled · Free</span>
          </div>
        </div>
      </div>

      {/* Course Curriculum Accordion */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>
            <p className="text-xs text-slate-500">
              {course.modules.length} Modules · {course.lessonsCount} Comprehensive Technical Lessons
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>● Text &amp; Code</span>
            <span className="text-blue-600 font-medium">● Guided Walkthroughs</span>
          </div>
        </div>

        <div className="space-y-4">
          {course.modules.map((module) => (
            <div
              key={module.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="p-4 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono text-blue-600 font-semibold uppercase text-2xs">
                    Module {module.id}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">{module.title}</h3>
                </div>
                <span className="text-slate-400">
                  {module.lessonsCount} lessons · {module.durationMinutes} min
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {module.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.slug}/${lesson.slug}`}
                    className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition block"
                  >
                    <div className="space-y-0.5 pr-4">
                      <p className="font-semibold text-slate-800">
                        <span className="font-mono text-slate-400 mr-2">{lesson.id}</span>
                        {lesson.title}
                      </p>
                      <p className="text-slate-500">{lesson.summary}</p>
                    </div>
                    <span className="text-slate-400 whitespace-nowrap">
                      {lesson.durationMinutes} min &gt;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
