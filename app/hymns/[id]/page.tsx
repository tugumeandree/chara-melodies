'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';
import { getHymnByNumber } from '@/data/hymns';
import { HymnDetail } from '@/components/ui/HymnDetail';

export default function HymnPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hymn = getHymnByNumber(parseInt(id));

  if (!hymn) {
    return (
      <div className="min-h-screen bg-worship-pattern flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Hymn Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The hymn you're looking for doesn't exist.
          </p>
          <Link href="/hymns">
            <button className="btn-primary">
              Back to All Hymns
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${hymn.title} - Hymn ${hymn.number}`,
          text: `Check out this hymn: ${hymn.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-worship-pattern">
      {/* Header */}
      <header className="bg-white dark:bg-background-dark-secondary shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/hymns">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Hymn {hymn.number}
              </h1>
            </div>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Share hymn"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HymnDetail hymn={hymn} />
      </main>
    </div>
  );
}
