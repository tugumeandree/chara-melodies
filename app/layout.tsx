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
  title: "Chara Melodies",
  description: "A beautiful multilingual hymns and worship app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased pb-16 md:pb-0`}>
        <SettingsProvider>
          <Navigation />
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
