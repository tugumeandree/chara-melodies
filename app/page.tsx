'use client';

import Link from 'next/link';
import { Book, ListMusic, Heart, Search, Image as ImageIcon } from 'lucide-react';
import { hymnsDatabase } from '@/data/hymns';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [featuredHymn, setFeaturedHymn] = useState(hymnsDatabase[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * hymnsDatabase.length);
      setCurrentIndex(randomIndex);
      setFeaturedHymn(hymnsDatabase[randomIndex]);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const quickAccessButtons = [
    { title: 'All Hymns', icon: Book, href: '/hymns', color: 'bg-blue-500' },
    { title: 'Sessions', icon: ListMusic, href: '/sessions', color: 'bg-purple-500' },
    { title: 'Favorites', icon: Heart, href: '/favorites', color: 'bg-red-500' },
    { title: 'Search', icon: Search, href: '/search', color: 'bg-green-500' },
  ];

  const mediaButton = { title: 'Events & Media', icon: ImageIcon, href: '/media', color: 'bg-amber-500' };

  return (
    <div className="min-h-screen bg-worship-pattern">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* App Title Banner */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="peaceful-gradient rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
              Chara Melodies
            </h2>
            <div className="gold-divider my-3 sm:my-4 w-24 sm:w-32 mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-serif italic px-2">
              "Sing to the Lord a new song; sing to the Lord, all the earth."
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
              - Psalm 96:1
            </p>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {quickAccessButtons.map((button) => (
            <Link key={button.title} href={button.href}>
              <div className="card p-4 sm:p-6 hover:scale-105 transition-transform cursor-pointer group">
                <div className={`${button.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <button.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-gold transition-colors">
                  {button.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Events & Media Banner */}
        <Link href={mediaButton.href}>
          <div className="card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12 hover:scale-[1.02] transition-transform cursor-pointer group bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`${mediaButton.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                <mediaButton.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-gold transition-colors mb-1">
                  {mediaButton.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                  Discover upcoming worship events, concerts, and fellowship gatherings
                </p>
              </div>
              <div className="text-primary-gold text-xl sm:text-2xl group-hover:translate-x-2 transition-transform hidden sm:block">
                →
              </div>
            </div>
          </div>
        </Link>

        {/* Featured Hymn / Rotating Banner */}
        <div className="card p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary-gold-light to-white dark:from-gray-800 dark:to-background-dark-secondary mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
              Featured Hymn
            </h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    i === currentIndex % 5 ? 'bg-primary-gold' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <Link href={`/hymns/${featuredHymn.number}`}>
            <div className="cursor-pointer group">
              <div className="flex items-baseline gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-gold">
                  {featuredHymn.number}
                </span>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-gold transition-colors break-words">
                  {featuredHymn.title}
                </h4>
              </div>

              <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                <span className="px-2 sm:px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-xs sm:text-sm">
                  {featuredHymn.language}
                </span>
                <span className="px-2 sm:px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-xs sm:text-sm">
                  {featuredHymn.category}
                </span>
              </div>

              {featuredHymn.lyrics[0] && (
                <div className="pl-3 sm:pl-4 border-l-2 border-primary-gold">
                  {featuredHymn.lyrics[0].lines.slice(0, 2).map((line, i) => (
                    <p key={i} className="font-serif text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              <div className="mt-3 sm:mt-4 text-primary-gold font-semibold group-hover:translate-x-2 transition-transform inline-block text-sm sm:text-base">
                Read more →
              </div>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="card p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-gold mb-1 sm:mb-2">
              {hymnsDatabase.length}
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">Total Hymns</div>
          </div>
          <div className="card p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-gold mb-1 sm:mb-2">
              {new Set(hymnsDatabase.map(h => h.language)).size}
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">Languages</div>
          </div>
          <div className="card p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-gold mb-1 sm:mb-2">
              {new Set(hymnsDatabase.map(h => h.category)).size}
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">Categories</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 sm:mt-12 lg:mt-16 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            Hymns & Worship App • Made with ❤️ for worship to God by Andrew Tugume
          </p>
        </div>
      </footer>
    </div>
  );
}
