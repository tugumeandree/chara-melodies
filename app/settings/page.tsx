'use client';

import { Sun, Moon, Type, Download, Info } from 'lucide-react';
import { useSettingsContext } from '@/components/providers/SettingsProvider';

export default function SettingsPage() {
  const { settings, updateFontSize, toggleTheme, updateOfflineMode } = useSettingsContext();

  const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'extra-large', label: 'Extra Large' },
  ] as const;

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
          Settings
        </h1>

        {/* Theme Settings */}
        <div className="card p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            {settings.theme === 'light' ? (
              <Sun className="w-6 h-6 text-primary-gold" />
            ) : (
              <Moon className="w-6 h-6 text-primary-gold" />
            )}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Appearance
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Theme
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => settings.theme === 'dark' && toggleTheme()}
                  className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                    settings.theme === 'light'
                      ? 'border-primary-gold bg-primary-gold-light dark:bg-primary-gold-dark'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Sun className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-center font-medium">Light</div>
                </button>
                <button
                  onClick={() => settings.theme === 'light' && toggleTheme()}
                  className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                    settings.theme === 'dark'
                      ? 'border-primary-gold bg-primary-gold-light dark:bg-primary-gold-dark'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Moon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-center font-medium">Dark</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Font Size Settings */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Type className="w-6 h-6 text-primary-gold" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Reading
            </h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Font Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              {fontSizes.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => updateFontSize(value)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    settings.fontSize === value
                      ? 'border-primary-gold bg-primary-gold-light dark:bg-primary-gold-dark'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className="font-medium">{label}</div>
                  <div
                    className={`mt-2 text-gray-600 dark:text-gray-400 ${
                      value === 'small' ? 'text-sm' :
                      value === 'large' ? 'text-lg' :
                      value === 'extra-large' ? 'text-xl' :
                      'text-base'
                    }`}
                  >
                    Sample Aa
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Preview:</p>
            <p
              className={`font-serif ${
                settings.fontSize === 'small' ? 'text-sm' :
                settings.fontSize === 'large' ? 'text-lg' :
                settings.fontSize === 'extra-large' ? 'text-xl' :
                'text-base'
              }`}
            >
              Holy, holy, holy! Lord God Almighty!<br />
              Early in the morning our song shall rise to Thee
            </p>
          </div>
        </div>

        {/* Offline Mode */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-primary-gold" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Offline Access
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                Enable Offline Mode
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Download hymns for offline use
              </p>
            </div>
            <button
              onClick={() => updateOfflineMode(!settings.offlineMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.offlineMode ? 'bg-primary-gold' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.offlineMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* About */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary-gold" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              About
            </h2>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Version</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Total Hymns</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">10</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Hymns & Worship App
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                A multilingual hymnal for worship services featuring hymns in English, 
                Luganda, Runyankore, Swahili, and more.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Built with Next.js, React, TypeScript, and Tailwind CSS
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                © 2024 Hymns & Worship. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Support */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For support or to add more hymns, contact us at{' '}
            <a href="mailto:andrewtugume2@gmail.com" className="text-primary-gold hover:underline">
              andrewtugume2@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
