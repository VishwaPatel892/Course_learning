// types/index.ts

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  readTime: string;
  codeAvailable: boolean;
  nextJsVersion: string;
  singleSegmentCode?: string;
  catchAllCode?: string;
  codeSnippet?: string;
  keyTakeaway?: string;
  checklistItems?: string[];
}

export interface Module {
  id: number;
  title: string;
  lessonsCount: number;
  durationMinutes: number;
  completedLessons?: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Frontend" | "Backend" | "Architecture" | "Language" | "Database";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  description: string;
  lessonsCount: number;
  estimatedHours: number;
  openAccess: boolean;
  versionTag: string;
  modules: Module[];
}

export interface TopicModule {
  moduleNumber: string;
  title: string;
  lessonsCount: number;
  difficulty: string;
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  slug: string;
}
