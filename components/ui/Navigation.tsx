'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Heart, Search, ListMusic, Settings as SettingsIcon, Image as ImageIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/hymns', icon: Book, label: 'Hymns' },
    { href: '/favorites', icon: Heart, label: 'Favorites' },
    { href: '/sessions', icon: ListMusic, label: 'Sessions' },
    { href: '/media', icon: ImageIcon, label: 'Media' },
    { href: '/search', icon: Search, label: 'Search' },
  ];

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-background-dark-secondary shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                Chara Melodies
              </h1>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="/settings">
                <button 
                  className={`p-2 rounded-lg transition-colors ${
                    isActive('/settings')
                      ? 'bg-primary-gold text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="Settings"
                >
                  <SettingsIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark-secondary border-t border-gray-200 dark:border-gray-700 z-50 md:hidden">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 flex-1 transition-colors ${
                  active
                    ? 'text-primary-gold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-gold'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${active ? 'fill-primary-gold-light' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation (Tablet and above) */}
      <nav className="hidden md:block bg-white dark:bg-background-dark-secondary border-b border-gray-200 dark:border-gray-700 sticky top-[57px] lg:top-[61px] z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    active
                      ? 'border-primary-gold text-primary-gold font-semibold'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary-gold hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
