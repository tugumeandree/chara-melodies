'use client';

import { useState } from 'react';
import { X, Image as ImageIcon, Camera, Heart } from 'lucide-react';
import Image from 'next/image';

interface AdItem {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  link?: string;
}

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption?: string;
  category: 'worship' | 'fellowship' | 'events' | 'testimonies';
}

export default function AdvertisingPage() {
  // Sample ads - replace with your actual images
  const [ads] = useState<AdItem[]>([
    {
      id: '1',
      title: 'Hymns & Dinner 2025',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304352/hymnsanddinner/hymnsAndDinner_rmlzeb.jpg',
      description: 'An Evening of Worship, Gratitude & Fellowship - December 5, 2025',
      link: 'https://instagram.com/hymns_and_dinner'
    }
    // Add more event posters here - see MEDIA_GUIDE.md for instructions
  ]);

  // Sample gallery images - replace with your actual photos
  const [galleryImages] = useState<GalleryImage[]>([
    {
      id: 'g1',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304352/hymnsanddinner/hymnsAndDinner_rmlzeb.jpg',
      caption: 'Hymns & Dinner 2025 - A Night of Worship',
      category: 'events'
    },
    {
      id: 'g2',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304468/hymnsanddinner/IVAN_NOAH_zu01nj.jpg',
      caption: 'Ivan Noah - Worship Leader',
      category: 'worship'
    },
    {
      id: 'g3',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304457/hymnsanddinner/LEAH_K_vbp39p.jpg',
      caption: 'Leah K - Ministry Moment',
      category: 'worship'
    },
    {
      id: 'g4',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304372/hymnsanddinner/E_CARD__icxt3i.png',
      caption: 'Hymns & Dinner Event Card',
      category: 'events'
    },
    {
      id: 'g5',
      imageUrl: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763304349/hymnsanddinner/lubega_tbnm5s.jpg',
      caption: 'Lubega - Fellowship & Worship',
      category: 'fellowship'
    }
    // Add more gallery images here
  ]);

  const [selectedAd, setSelectedAd] = useState<AdItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryImage['category']>('all');

  const filteredGallery = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const categories = [
    { value: 'all' as const, label: 'All', icon: ImageIcon },
    { value: 'worship' as const, label: 'Worship', icon: Heart },
    { value: 'fellowship' as const, label: 'Fellowship', icon: Camera },
    { value: 'events' as const, label: 'Events', icon: ImageIcon },
    { value: 'testimonies' as const, label: 'Testimonies', icon: Camera },
  ];

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Hero Banner */}
        <div className="card p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-primary-gold-light to-white dark:from-gray-800 dark:to-background-dark-secondary">
          <div className="flex items-center gap-3 sm:gap-4">
            <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-gold flex-shrink-0" />
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
                Featured Events & Media
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-1">
                Discover upcoming worship events and share the joy
              </p>
            </div>
          </div>
        </div>

        {/* Ad Grid */}
        {ads.length === 0 ? (
          <div className="text-center py-16 card">
            <ImageIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No media available
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Add event posters and media to share with the community
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="card overflow-hidden cursor-pointer group hover:scale-105 transition-transform"
                onClick={() => setSelectedAd(ad)}
              >
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={ad.imageUrl}
                    alt={ad.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {ad.title}
                  </h3>
                  {ad.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {ad.description}
                    </p>
                  )}
                  {ad.link && (
                    <a
                      href={ad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-primary-gold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 card p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
            About Events & Media
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
            This section showcases upcoming worship events, concerts, and fellowship gatherings. 
            Stay connected with the community and never miss an opportunity to worship together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-gold mb-1">
                {ads.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Featured Events
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-gold mb-1">
                ∞
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Opportunities to Worship
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-primary-gold mb-1">
                1
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Community United
              </div>
            </div>
          </div>
        </div>

        {/* Pictorial Gallery Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12">
          {/* Gallery Header */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-primary-gold" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
                Worship Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
              Moments of praise, fellowship, and spiritual gatherings
            </p>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat.value
                        ? 'bg-primary-gold text-white shadow-md'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredGallery.length === 0 ? (
            <div className="text-center py-12 sm:py-16 card">
              <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No photos yet
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 px-4">
                Gallery photos will appear here as we capture moments from worship gatherings
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {filteredGallery.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-700"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.caption || 'Gallery image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      {image.caption && (
                        <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal for expanded view */}
      {selectedAd && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAd(null)}
        >
          <div
            className="bg-white dark:bg-background-dark-secondary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-background-dark-secondary border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {selectedAd.title}
              </h2>
              <button
                onClick={() => setSelectedAd(null)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
                <Image
                  src={selectedAd.imageUrl}
                  alt={selectedAd.title}
                  fill
                  className="object-contain"
                />
              </div>
              {selectedAd.description && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedAd.description}
                </p>
              )}
              {selectedAd.link && (
                <a
                  href={selectedAd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Visit Event Page
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative flex-1 bg-black/50 rounded-lg overflow-hidden">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.caption || 'Gallery image'}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="mt-4 text-center">
                <p className="text-white text-sm sm:text-base font-medium">
                  {selectedImage.caption}
                </p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs">
                  {selectedImage.category}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
