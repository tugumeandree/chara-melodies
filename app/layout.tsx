import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import { Navigation } from "@/components/ui/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://charamelodies.live'),
  title: {
    default: 'Chara Melodies - Multilingual Hymns & Worship Songs',
    template: '%s | Chara Melodies'
  },
  description: 'Discover 30+ traditional hymns and worship songs in English, Luganda, Runyankore, and Swahili. Create worship sessions, view lyrics with video accompaniment, and project hymns for church services.',
  keywords: [
    'hymns',
    'worship songs',
    'church music',
    'Luganda hymns',
    'Runyankore hymns',
    'Swahili hymns',
    'Christian music',
    'worship app',
    'hymnal',
    'church songs',
    'multilingual worship',
    'African hymns',
    'traditional hymns',
    'worship lyrics',
    'church projection',
    'praise and worship'
  ],
  authors: [{ name: 'Chara Melodies Team' }],
  creator: 'Chara Melodies',
  publisher: 'Chara Melodies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charamelodies.live',
    title: 'Chara Melodies - Multilingual Hymns & Worship Songs',
    description: 'Your digital hymnal with 30+ traditional hymns in multiple languages. Perfect for personal devotion and church worship services.',
    siteName: 'Chara Melodies',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1735836709/IMG_20250102_230445_254_ubxd7n.jpg',
        width: 1200,
        height: 630,
        alt: 'Chara Melodies - Multilingual Hymns App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chara Melodies - Multilingual Hymns & Worship Songs',
    description: 'Your digital hymnal with 30+ traditional hymns in multiple languages.',
    images: ['https://res.cloudinary.com/dwa3soopc/image/upload/v1735836709/IMG_20250102_230445_254_ubxd7n.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://charamelodies.live',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Chara Melodies',
    url: 'https://charamelodies.live',
    description: 'Multilingual hymns and worship songs application with 30+ traditional hymns in English, Luganda, Runyankore, and Swahili.',
    applicationCategory: 'MusicApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    inLanguage: ['en', 'lg', 'nyn', 'sw'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://charamelodies.live" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased pb-16 md:pb-0`}>
        <SettingsProvider>
          <Navigation />
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
