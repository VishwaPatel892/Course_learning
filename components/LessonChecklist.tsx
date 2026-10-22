// components/LessonChecklist.tsx
"use client";

import { useState } from "react";

export default function LessonChecklist() {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({
    0: true,
    1: false,
    2: false,
  });

  const toggleCheck = (idx: number) => {
    setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const items = [
    "I understand how folder naming maps brackets to runtime URL resolution.",
    "I can differentiate between single segment [slug] and catch-all array [...slug].",
    "I have verified how async params resolution functions in Next.js Server Components.",
  ];

  return (
    <div className="border border-slate-200 rounded-lg p-5 space-y-3 bg-white">
      <h3 className="text-xs font-bold text-slate-900">
        Self-Assessment Checklist
      </h3>
      <div className="space-y-2 text-xs text-slate-700">
        {items.map((item, idx) => (
          <label
            key={idx}
            onClick={() => toggleCheck(idx)}
            className="flex items-center gap-2.5 cursor-pointer select-none hover:text-slate-900"
          >
            <input
              type="checkbox"
              checked={!!checked[idx]}
              onChange={() => { }}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className={checked[idx] ? "line-through text-slate-400" : ""}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
