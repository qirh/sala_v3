'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LanguageStore = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-store',
    }
  )
); 