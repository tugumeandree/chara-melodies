'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { HymnCard } from '@/components/ui/HymnCard';
import { getHymnByNumber } from '@/data/hymns';
import { useState } from 'react';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [sortBy, setSortBy] = useState<'recent' | 'alphabetical'>('recent');

  const favoriteHymns = favorites
    .map(fav => getHymnByNumber(fav.hymnNumber))
    .filter(hymn => hymn !== undefined);

  const sortedHymns = [...favoriteHymns].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a!.title.localeCompare(b!.title);
    } else {
      const favA = favorites.find(f => f.hymnNumber === a!.number);
      const favB = favorites.find(f => f.hymnNumber === b!.number);
      return new Date(favB!.addedAt).getTime() - new Date(favA!.addedAt).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Favorites
          </h1>
          {favoriteHymns.length > 0 && (
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('recent')}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition-colors ${
                  sortBy === 'recent'
                    ? 'bg-primary-gold text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Recent
              </button>
              <button
                onClick={() => setSortBy('alphabetical')}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition-colors ${
                  sortBy === 'alphabetical'
                    ? 'bg-primary-gold text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                A-Z
              </button>
            </div>
          )}
        </div>
        {favoriteHymns.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Start adding hymns to your favorites to see them here
            </p>
            <Link href="/hymns">
              <button className="btn-primary text-sm sm:text-base">
                Browse Hymns
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {favoriteHymns.length} {favoriteHymns.length === 1 ? 'favorite' : 'favorites'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {sortedHymns.map(hymn => hymn && (
                <HymnCard key={hymn.number} hymn={hymn} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
