import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const { subscribe, set } = writable(false);

  if (browser) {
    // Initialize from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : systemPrefersDark;

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    set(isDark);
  }

  return {
    subscribe,
    toggle: () => {
      subscribe((current) => {
        const newValue = !current;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newValue ? 'dark' : 'light');
        set(newValue);
      })();
    }
  };
}

export const theme = createThemeStore(); 