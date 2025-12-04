'use client';

import Link from 'next/link';
import { Hymn } from '@/types';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';

interface HymnCardProps {
  hymn: Hymn;
}

export function HymnCard({ hymn }: HymnCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(hymn.number);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(hymn.number);
  };

  return (
    <Link href={`/hymns/${hymn.number}`}>
      <div className="card p-3 sm:p-4 cursor-pointer group relative">
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
              isFav
                ? 'fill-primary-gold text-primary-gold'
                : 'text-gray-400 group-hover:text-primary-gold'
            }`}
          />
        </button>

        <div className="pr-8 sm:pr-10">
          <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
            <span className="text-xl sm:text-2xl font-bold text-primary-gold">
              {hymn.number}
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-gold transition-colors break-words">
              {hymn.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-primary-gold-light dark:bg-primary-gold-dark text-gray-800 dark:text-gray-100">
              {hymn.language}
            </span>
            <span className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {hymn.category}
            </span>
          </div>

          {hymn.note && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 line-clamp-2">
              {hymn.note}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
