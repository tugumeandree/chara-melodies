'use client';

import { Hymn } from '@/types';
import { Heart, Plus, Music } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { useSettingsContext } from '../providers/SettingsProvider';
import { useState } from 'react';

interface HymnDetailProps {
  hymn: Hymn;
  onAddToSession?: () => void;
}

export function HymnDetail({ hymn, onAddToSession }: HymnDetailProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { settings } = useSettingsContext();
  const isFav = isFavorite(hymn.number);
  const [showSessionMenu, setShowSessionMenu] = useState(false);

  const getFontSizeClass = () => {
    switch (settings.fontSize) {
      case 'small':
        return 'text-hymn-small';
      case 'large':
        return 'text-hymn-large';
      case 'extra-large':
        return 'text-hymn-extra-large';
      default:
        return 'text-hymn-medium';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-worship-pattern card p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-primary-gold">
                {hymn.number}
              </span>
              <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100">
                {hymn.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-primary-gold-light dark:bg-primary-gold-dark text-sm font-medium">
                {hymn.language}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium">
                {hymn.category}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => toggleFavorite(hymn.number)}
              className={`p-3 rounded-lg transition-colors ${
                isFav
                  ? 'bg-primary-gold text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-6 h-6 ${isFav ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => setShowSessionMenu(!showSessionMenu)}
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Add to session"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>

        {hymn.note && (
          <div className="mt-4 p-4 bg-primary-gold-light dark:bg-gray-800 rounded-lg">
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              {hymn.note}
            </p>
          </div>
        )}

        {hymn.tags && hymn.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {hymn.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Lyrics */}
      <div className={`card p-8 ${getFontSizeClass()}`}>
        <div className="hymn-text space-y-6">
          {hymn.lyrics.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                {section.type === 'chorus' ? (
                  <Music className="w-5 h-5 text-primary-gold" />
                ) : null}
                <h3 className="font-semibold text-primary-gold uppercase tracking-wider text-sm">
                  {section.type === 'chorus'
                    ? 'Chorus'
                    : section.type === 'verse' && section.number
                    ? `Verse ${section.number}`
                    : section.type.charAt(0).toUpperCase() + section.type.slice(1)}
                </h3>
              </div>
              <div className="pl-4 border-l-2 border-primary-gold">
                {section.lines.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="text-gray-800 dark:text-gray-200 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Section - YouTube Video & Audio */}
      {(hymn.youtubeUrl || hymn.audioUrl) && (
        <div className="space-y-4 mt-6">
          {/* YouTube Video */}
          {hymn.youtubeUrl && (
            <div className="card p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-primary-gold" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Lyric Video
                </h2>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                <iframe
                  src={hymn.youtubeUrl}
                  title={`${hymn.title} - Lyric Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Audio Player */}
          {hymn.audioUrl && (
            <div className="card p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-primary-gold" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Audio
                </h2>
              </div>
              <audio
                controls
                className="w-full h-12"
                style={{ 
                  outline: 'none',
                  borderRadius: '0.5rem'
                }}
              >
                <source src={hymn.audioUrl} type="audio/mpeg" />
                <source src={hymn.audioUrl} type="audio/ogg" />
                <source src={hymn.audioUrl} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
