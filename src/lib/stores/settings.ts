'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Settings = {
  theme: 'light' | 'dark';
  language: 'en' | 'ar';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (lang: 'en' | 'ar') => void;
};

export const useSettings = create<Settings>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'app-settings',
    }
  )
);

// Initialize settings on the client side
if (typeof window !== 'undefined') {
  const settings = useSettings.getState();

  // Apply theme
  document.documentElement.classList.toggle('dark', settings.theme === 'dark');

  // Apply language direction
  document.documentElement.dir = settings.language === 'ar' ? 'rtl' : 'ltr';
} 