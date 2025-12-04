'use client';

import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useSettings } from '@/hooks/useSettings';
import { UserSettings } from '@/types';

interface SettingsContextType {
  settings: UserSettings;
  updateFontSize: (size: UserSettings['fontSize']) => void;
  updateTheme: (theme: UserSettings['theme']) => void;
  toggleTheme: () => void;
  updateOfflineMode: (offline: boolean) => void;
  isLoading: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const settingsHook = useSettings();

  useEffect(() => {
    // Apply theme on mount
    if (settingsHook.settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settingsHook.settings.theme]);

  return (
    <SettingsContext.Provider value={settingsHook}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}
