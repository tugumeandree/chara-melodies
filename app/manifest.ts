import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chara Melodies - Multilingual Hymns & Worship',
    short_name: 'Chara Melodies',
    description: 'Your digital hymnal with 30+ traditional hymns in multiple languages. Perfect for personal devotion and church worship services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D4AF37',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['music', 'lifestyle', 'religion'],
    lang: 'en',
    dir: 'ltr',
  };
}
