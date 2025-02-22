'use client';

import Link from 'next/link';
import { Moon, Sun, Languages, Book, FileText, Linkedin, Mail, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-neutral-600 dark:hover:text-neutral-300">
              Home
            </Link>
            <Link href="/blog" className="hover:text-neutral-600 dark:hover:text-neutral-300">
              Blog
            </Link>
            <Link href="/til" className="hover:text-neutral-600 dark:hover:text-neutral-300">
              TIL
            </Link>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert('Language switch')}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <Languages size={20} />
              <span className="sr-only">Switch Language</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">Toggle Theme</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="/rc" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              RC
            </Link>
            <Link
              href="https://goodreads.com/your-profile"
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <Book size={20} />
            </Link>
            <Link href="/resume" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <FileText size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/your-profile"
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:your@email.com"
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/your-username"
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 