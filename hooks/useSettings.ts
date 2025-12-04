'use client';

import { useLocalStorage } from './useLocalStorage';
import { UserSettings } from '@/types';

const defaultSettings: UserSettings = {
  fontSize: 'medium',
  theme: 'light',
  offlineMode: false
};

export function useSettings() {
  const [settings, setSettings, isLoading] = useLocalStorage<UserSettings>(
    'hymns-settings',
    defaultSettings
  );

  const updateFontSize = (fontSize: UserSettings['fontSize']) => {
    setSettings((prev) => ({ ...prev, fontSize }));
  };

  const updateTheme = (theme: UserSettings['theme']) => {
    setSettings((prev) => ({ ...prev, theme }));
    // Update document class for dark mode
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const toggleTheme = () => {
    updateTheme(settings.theme === 'light' ? 'dark' : 'light');
  };

  const updateOfflineMode = (offlineMode: boolean) => {
    setSettings((prev) => ({ ...prev, offlineMode }));
  };

  return {
    settings,
    updateFontSize,
    updateTheme,
    toggleTheme,
    updateOfflineMode,
    isLoading
  };
}
