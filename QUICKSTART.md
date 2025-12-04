# 🚀 Hymns & Worship App - Quick Start Guide

Welcome! This guide will help you get the Hymns & Worship App up and running.

## ✅ What's Been Built

Your app is **fully functional** with all these features:

### 📱 Complete Screens
- ✅ **Home Page** - Beautiful landing page with featured hymns
- ✅ **All Hymns** - Browse and filter 10 sample hymns
- ✅ **Hymn Detail** - Full lyrics view with favorites
- ✅ **Search** - Instant search by title, lyrics, or tags
- ✅ **Favorites** - Save and manage favorite hymns
- ✅ **Sessions** - Create and manage worship setlists
- ✅ **Settings** - Theme, font size, and preferences

### 🎨 Design Features
- ✅ Black, Gold, White color scheme
- ✅ Dark & Light mode with toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Elegant typography for worship
- ✅ Smooth animations and transitions

### 💾 Data & Features
- ✅ 10 Sample hymns (English, Luganda, Runyankore, Swahili)
- ✅ Local storage for favorites and sessions
- ✅ Filter by language and category
- ✅ Search functionality
- ✅ Session/setlist management
- ✅ Font size adjustments
- ✅ Export sessions as text files

## 🏃 Running the App

### The app is already running!

**Access it at:** http://localhost:3000

If you need to restart:

```powershell
cd "c:\Users\user\Documents\Code\Hymns App"
npm run dev
```

## 🎯 Testing the Features

### 1. Explore the Home Page
- Click through the quick access buttons
- Watch the featured hymn rotate every 10 seconds
- Toggle between light and dark mode

### 2. Browse Hymns
- Click "All Hymns"
- Try the filters (Language, Category)
- Search for specific words like "Holy" or "Grace"

### 3. View a Hymn
- Click on any hymn card
- Try the favorite ❤️ button
- Add to a session with the + button
- Adjust font size in Settings

### 4. Create a Session
- Go to "Sessions"
- Create a new worship session
- Add hymns by number or selection
- Export your session

### 5. Test Search
- Click "Search" from home
- Type "grace" or "holy" or any word
- See instant results

### 6. Customize Settings
- Go to Settings
- Try different font sizes
- Toggle dark/light theme
- Enable offline mode

## 📂 Project Structure

```
Hymns App/
├── app/                    # All pages (Next.js App Router)
│   ├── page.tsx           # Home page
│   ├── hymns/             # Hymns browsing & detail
│   ├── search/            # Search page
│   ├── favorites/         # Favorites page
│   ├── sessions/          # Sessions management
│   └── settings/          # Settings page
├── components/            # Reusable UI components
│   ├── ui/               # UI components (cards, buttons, etc.)
│   └── providers/        # Context providers
├── data/
│   └── hymns.ts          # **ADD YOUR HYMNS HERE**
├── hooks/                # Custom React hooks
├── types/                # TypeScript definitions
└── public/               # Static assets
```

## ➕ Adding More Hymns

**Edit this file:** `data/hymns.ts`

Add new hymns to the `hymnsDatabase` array:

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
        "First line",
        "Second line",
        "Third line"
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
  note: "Optional context or background",
  tags: ["Tag1", "Tag2"]
}
```

### Supported Languages:
- English
- Luganda
- Runyankore
- Rukiga
- Swahili
- French
- Multilingual

### Supported Categories:
- Praise
- Worship
- Prayer
- Thanksgiving
- Instrumental
- Invocation
- Processional
- Recessional
- Communion
- Adoration

## 🎨 Customizing the Design

### Change Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    gold: '#D4AF37',  // Your color here
  }
}
```

### Change Fonts
Edit `app/layout.tsx` to import different Google Fonts

## 🔧 Common Tasks

### Stop the Development Server
Press `Ctrl + C` in the terminal

### Restart the Server
```powershell
npm run dev
```

### Build for Production
```powershell
npm run build
npm start
```

### Clear Cache (if needed)
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

## 🐛 Troubleshooting

### Port 3000 Already in Use?
```powershell
# Stop the process using port 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Or use a different port
npm run dev -- -p 3001
```

### CSS Not Loading?
The Tailwind warnings in the editor are normal and don't affect functionality.

### Changes Not Showing?
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache
- Restart dev server

## 📱 Mobile Testing

Access from your phone (on same WiFi):
- http://192.168.100.67:3000

## 🚀 Next Steps

### Immediate Enhancements:
1. **Add More Hymns** - Expand the database in `data/hymns.ts`
2. **Add Audio** - Include `audioUrl` property for hymns with recordings
3. **Customize Branding** - Update app name, colors, logo

### Future Features to Add:
- Cloud sync with authentication
- Audio player for hymns
- PDF export for sessions
- Print stylesheets
- Progressive Web App (PWA) features
- Daily hymn notifications

## 📞 Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Check the terminal for server errors
3. Review this guide
4. Check the main README.md for detailed documentation

## 🎉 You're All Set!

Your Hymns & Worship App is ready to use. Enjoy building your hymnal library and organizing worship sessions!

**Visit:** http://localhost:3000

---

*Made with ❤️ for worship to God by Andrew Tugume*
