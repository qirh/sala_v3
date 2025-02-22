'use client';

import Link from 'next/link';
import { Moon, Sun, Languages, Book, FileText, Linkedin, Mail, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/lib/stores/language';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    // Set initial HTML dir attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setIsTransitioning(true);
    const newLang = language === 'en' ? 'ar' : 'en';

    // Add a slight delay to make the transition visible
    setTimeout(() => {
      setLanguage(newLang);
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      router.refresh();
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className={`nav-container flex justify-between items-center transform ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Navigation Links */}
          <div className="flex gap-6 nav-content">
            <Link href="/" className="nav-link hover:text-neutral-600 dark:hover:text-neutral-300">
              <span className="nav-text">
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </span>
            </Link>
            <Link href="/blog" className="nav-link hover:text-neutral-600 dark:hover:text-neutral-300">
              <span className="nav-text">
                {language === 'en' ? 'Blog' : 'المدونة'}
              </span>
            </Link>
            <Link href="/til" className="nav-link hover:text-neutral-600 dark:hover:text-neutral-300">
              <span className="nav-text">TIL</span>
            </Link>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-4 nav-content">
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md flex items-center gap-2"
              disabled={isTransitioning}
            >
              <Languages size={20} className={isTransitioning ? 'animate-spin' : ''} />
              <span className="text-sm">{language.toUpperCase()}</span>
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
          <div className="flex items-center gap-4 nav-content">
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