'use client';

import { useLocalStorage } from './useLocalStorage';
import { FavoriteHymn } from '@/types';

export function useFavorites() {
  const [favorites, setFavorites, isLoading] = useLocalStorage<FavoriteHymn[]>('hymns-favorites', []);

  const addFavorite = (hymnNumber: number) => {
    setFavorites((prev) => {
      if (prev.some(fav => fav.hymnNumber === hymnNumber)) {
        return prev;
      }
      return [...prev, { hymnNumber, addedAt: new Date() }];
    });
  };

  const removeFavorite = (hymnNumber: number) => {
    setFavorites((prev) => prev.filter(fav => fav.hymnNumber !== hymnNumber));
  };

  const isFavorite = (hymnNumber: number) => {
    return favorites.some(fav => fav.hymnNumber === hymnNumber);
  };

  const toggleFavorite = (hymnNumber: number) => {
    if (isFavorite(hymnNumber)) {
      removeFavorite(hymnNumber);
    } else {
      addFavorite(hymnNumber);
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    isLoading
  };
}
