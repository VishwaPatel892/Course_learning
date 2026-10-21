// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LearnSpace - Academic Minimalist Curriculum Engine",
  description: "Disciplined academic minimalist curriculum engine for software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">{children}</main>
        <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2025 LearnSpace Inc. Disciplined academic minimalist curriculum engine.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-600">Documentation</a>
              <a href="#" className="hover:text-slate-600">Curriculum Index</a>
              <a href="#" className="hover:text-slate-600">Privacy</a>
              <a href="#" className="hover:text-slate-600">Terms</a>
              <a href="#" className="hover:text-slate-600">System Status</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
