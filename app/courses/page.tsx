// app/courses/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/coursesData";

export default function CourseCatalogPage() {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filterTabs = ["All Courses", "Frontend", "Backend", "Architecture", "Fundamentals"];

  const filteredCourses = courses.filter((c) => {
    if (activeFilter === "All Courses") return true;
    return c.category === activeFilter;
  });

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <span>Index</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">Courses</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
          CURRICULUM DIRECTORY 2025
        </span>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Explore courses</h1>
        <p className="text-sm text-slate-500 max-w-3xl">
          Browse curriculum modules, system design paths, and full-stack development tracks.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-1">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`text-xs font-medium px-4 py-2 rounded-md transition border ${activeFilter === tab
              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats 4-Column Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 shadow-sm">
        <div className="pt-2 md:pt-0">
          <p className="text-xs text-slate-400 font-medium">Published Tracks</p>
          <p className="text-base font-bold text-slate-900 mt-1">6 Core Units</p>
        </div>
        <div className="pt-2 md:pt-0 md:pl-6">
          <p className="text-xs text-slate-400 font-medium">Interactive Syllabus</p>
          <p className="text-base font-bold text-slate-900 mt-1">78 Lessons</p>
        </div>
        <div className="pt-2 md:pt-0 md:pl-6">
          <p className="text-xs text-slate-400 font-medium">Evaluation Mode</p>
          <p className="text-base font-bold text-slate-900 mt-1">Rigorous Peer Review</p>
        </div>
        <div className="pt-2 md:pt-0 md:pl-6">
          <p className="text-xs text-slate-400 font-medium">Status</p>
          <p className="text-base font-bold text-blue-600 mt-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Live Cohort
          </p>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-sm transition"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded font-medium">
                  {course.category}
                </span>
                <span className="text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                  {course.difficulty}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition">
                  <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                </h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <span>👤</span> {course.instructor}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {course.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1">
                📖 {course.lessonsCount} Lessons
              </span>
              <Link
                href={`/courses/${course.slug}`}
                className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                View course →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Curriculum Sequencing Engine Callout */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Curriculum Sequencing Engine</h4>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            LearnSpace verifies prerequisite competency via deterministic automated assessments prior to advancing modules.
          </p>
        </div>
        <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2 rounded-md transition shadow-sm whitespace-nowrap">
          Browse Prerequisite Map
        </button>
      </div>
    </div>
  );
}
