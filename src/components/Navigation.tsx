'use client';

import Link from 'next/link';
import { Moon, Sun, Languages, Book, FileText, Linkedin, Mail, Github } from 'lucide-react';
import { useState } from 'react';
import { useSettings } from '@/lib/stores/settings';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const { theme, language, setTheme, setLanguage } = useSettings();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLanguage = () => {
    setIsTransitioning(true);
    const newLang = language === 'en' ? 'ar' : 'en';

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
        <div className={`nav-container grid grid-cols-3 items-center ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Navigation Links - Left Column */}
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

          {/* Settings - Center Column */}
          <div className="flex items-center justify-center gap-4 nav-content">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span
                onClick={() => !isTransitioning && setLanguage('en')}
                className={`${language === 'en' ? 'text-foreground underline underline-offset-4' : 'text-neutral-500'} text-foreground cursor-pointer`}
              >
                English
              </span>
              <span> </span>
              <span
                onClick={() => !isTransitioning && setLanguage('ar')}
                className={`${language === 'ar' ? 'text-foreground underline underline-offset-4' : 'text-neutral-500'} text-foreground font-arabic cursor-pointer`}
              >
                عربي
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md text-foreground"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">Toggle Theme</span>
            </button>
          </div>

          {/* Social Icons - Right Column */}
          <div className="flex items-center justify-end gap-4 nav-content">
            <Link href="/rc" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              RC
            </Link>
            <Link href="https://goodreads.com/your-profile" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <Book size={20} />
            </Link>
            <Link href="/resume" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <FileText size={20} />
            </Link>
            <Link href="https://linkedin.com/in/your-profile" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:your@email.com" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <Mail size={20} />
            </Link>
            <Link href="https://github.com/your-username" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 