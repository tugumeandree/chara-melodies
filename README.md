# 🎵 Chara Melodies

A beautiful, multilingual hymnal web application built with Next.js, featuring elegant design and comprehensive worship tools.

🌐 **Live Site**: [charamelodies.live](https://charamelodies.live)

![Chara Melodies](https://img.shields.io/badge/Version-1.0.0-gold)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## 🚀 SEO Optimizations

### Meta Tags & Structured Data
- ✅ Comprehensive Open Graph tags for social media sharing
- ✅ Twitter Card metadata for enhanced Twitter previews
- ✅ Schema.org structured data (WebApplication type)
- ✅ Dynamic meta tags for each hymn page
- ✅ Canonical URLs to prevent duplicate content
- ✅ Rich keywords targeting worship, hymns, and multilingual search

### Technical SEO
- ✅ XML Sitemap (`/sitemap.xml`) - Auto-generated for all pages
- ✅ Robots.txt configured for optimal crawling
- ✅ Web App Manifest for PWA support
- ✅ Static page generation for better performance
- ✅ Optimized images (AVIF/WebP) with Cloudinary CDN
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Mobile-first responsive design
- ✅ Fast loading times with Next.js 16 Turbopack

### Content Optimization
- ✅ Semantic HTML structure
- ✅ Descriptive page titles and meta descriptions
- ✅ Alt tags for all images
- ✅ Internal linking structure
- ✅ 30+ hymns with rich content
- ✅ Multilingual content (English, Luganda, Runyankore, Swahili)

### Key Pages SEO
- **Homepage**: Optimized for "multilingual hymns" and "worship songs"
- **Hymns List**: Filter by language/category with SEO-friendly URLs
- **Individual Hymns**: Rich metadata with lyrics preview and structured data
- **All pages**: Mobile-optimized, fast-loading, accessible

## ✨ Features

### 🎨 Design & Theme
- **Mobile-First Design**: Optimized for smartphones with responsive layouts for all devices
- **Bottom Navigation**: Easy thumb-friendly navigation on mobile devices
- **Desktop Navigation**: Clean horizontal tabs for larger screens
- **Elegant Christian Design**: Minimal, peaceful aesthetic with black, gold, and white color scheme
- **Dark & Light Modes**: Toggle between themes with persistent settings
- **Worship-Book Typography**: Readable serif fonts optimized for worship settings
- **Touch-Friendly**: Large tap targets and smooth interactions

### 📱 Core Screens

#### 🏠 Home Screen
- Quick access to all major features with touch-friendly buttons
- Rotating featured hymn banner
- Beautiful scripture verse display
- Events & Media showcase
- Statistics overview
- Mobile-optimized layout

#### 📖 Hymns List
- Browse all hymns with elegant cards
- Filter by language (English, Luganda, Runyankore, Swahili, etc.)
- Filter by category (Praise, Worship, Prayer, Thanksgiving, etc.)
- Alphabetical sorting
- Instant search functionality
- Accessible via bottom navigation on mobile

#### 🖼️ Events & Media
- View upcoming worship events and concerts
- Beautiful image gallery with modal view
- Direct links to event pages
- Community engagement tools
- Easily accessible from navigation

#### 📝 Hymn Detail View
- Full lyrics with verse numbering
- Clearly marked choruses and sections
- Language and category tags
- Worship notes and context
- Add to favorites with one tap
- Add to worship sessions
- Share functionality

#### 🔍 Search
- Search by title, lyrics, theme, or language
- Instant suggestions as you type
- Comprehensive results
- Quick access via bottom navigation on mobile

#### ❤️ Favorites
- Save your favorite hymns with heart icon
- Sort by recently added or alphabetically
- Quick access during worship
- Always available in navigation

#### 🎼 Sessions & Setlists
- Create custom worship sessions
- Add hymns by number or selection
- Reorder hymns for service flow
- Export sessions as text files
- Manage multiple setlists

#### ⚙️ Settings
- Font size adjustment (Small, Medium, Large, Extra Large)
- Light/Dark theme toggle
- Offline mode toggle
- App information and credits

### 🌍 Multilingual Support
Currently includes hymns in:
- **English** - Traditional and contemporary hymns
- **Luganda** - Ugandan language hymns
- **Runyankore/Rukiga** - Western Ugandan hymns
- **Swahili** - East African hymns

Easy to expand with more languages!

### 💾 Data Features
- **Local Storage**: Favorites and settings persist across sessions
- **Offline Ready**: All hymns available without internet
- **Session Management**: Save and organize worship setlists
- **Search Indexing**: Fast, comprehensive search

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "c:\Users\user\Documents\Code\Hymns App"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
Hymns App/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles and Tailwind
│   ├── hymns/              
│   │   ├── page.tsx         # Hymns list with filters
│   │   └── [id]/
│   │       └── page.tsx     # Individual hymn detail
│   ├── search/
│   │   └── page.tsx         # Search functionality
│   ├── favorites/
│   │   └── page.tsx         # User favorites
│   ├── sessions/
│   │   ├── page.tsx         # Sessions list
│   │   └── [id]/
│   │       └── page.tsx     # Session detail with setlist
│   └── settings/
│       └── page.tsx         # App settings
├── components/
│   ├── providers/
│   │   └── SettingsProvider.tsx  # Theme & settings context
│   └── ui/
│       ├── HymnCard.tsx          # Hymn preview card
│       ├── HymnDetail.tsx        # Full hymn display
│       ├── SearchBar.tsx         # Search input component
│       ├── SessionCard.tsx       # Session preview card
│       └── ThemeToggle.tsx       # Dark/light mode toggle
├── data/
│   └── hymns.ts             # Hymns database & helper functions
├── hooks/
│   ├── useLocalStorage.ts   # Generic local storage hook
│   ├── useFavorites.ts      # Favorites management
│   ├── useSessions.ts       # Sessions management
│   └── useSettings.ts       # Settings management
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Adding New Hymns

Edit `data/hymns.ts` and add new hymn objects:

```typescript
{
  number: 11,
  title: "Your Hymn Title",
  language: "English",
  category: "Praise",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "First line of verse",
        "Second line of verse"
      ]
    },
    {
      type: "chorus",
      lines: [
        "Chorus line 1",
        "Chorus line 2"
      ]
    }
  ],
  note: "Optional worship note",
  tags: ["Tag1", "Tag2"]
}
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    gold: '#D4AF37',        // Change primary color
    'gold-light': '#F4E4B5',
    'gold-dark': '#B8941F',
  }
}
```

### Adding Languages

1. Add language to `types/index.ts`:
```typescript
export type Language = 
  | 'English' 
  | 'YourNewLanguage'
  // ...
```

2. Add hymns in that language to `data/hymns.ts`

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Hooks + Context
- **Storage**: Browser LocalStorage
- **Fonts**: Inter (sans-serif), Merriweather (serif)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔮 Future Enhancements

### Planned Features
- [ ] Audio playback for hymns with recordings
- [ ] Voice recorder for personal worship sessions
- [ ] Cloud sync with user accounts
- [ ] Daily hymn notifications
- [ ] PDF export for sessions (enhanced)
- [ ] Print-friendly hymn sheets
- [ ] More languages (French, Spanish, etc.)
- [ ] Community hymn submissions
- [ ] Advanced search filters
- [ ] Keyboard shortcuts for worship leaders

## 📄 License

ISC License - Feel free to use this for your church or worship community!

## 🤝 Contributing

Contributions are welcome! To add hymns or features:

1. Fork the repository
2. Create your feature branch
3. Add your hymns or features
4. Submit a pull request

## 💬 Support

For questions, issues, or to request hymn additions:
- Email: andrewtugume2@gmail.com
- Open an issue on the repository

## 🙏 Acknowledgments

- All hymn writers and composers
- The worship communities using this app
- Open source contributors

---

**Made with ❤️ for worship to God by Andrew Tugume**

*"Sing to the Lord a new song; sing to the Lord, all the earth." - Psalm 96:1*
#Andrew Tugume 
##Teacher. Technologist. Investor #   c h a r a - m e l o d i e s 
 
 