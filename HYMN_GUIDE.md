# 📖 Hymn Database Guide

This guide shows you exactly how to add hymns to your app.

## 🎯 Quick Example

Here's a complete hymn with all features:

```typescript
{
  number: 11,                    // Unique hymn number
  title: "Great Is Thy Faithfulness",
  language: "English",           // See language options below
  category: "Worship",           // See category options below
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "Great is Thy faithfulness, O God my Father;",
        "There is no shadow of turning with Thee;",
        "Thou changest not, Thy compassions, they fail not;",
        "As Thou hast been, Thou forever wilt be."
      ]
    },
    {
      type: "chorus",
      lines: [
        "Great is Thy faithfulness!",
        "Great is Thy faithfulness!",
        "Morning by morning new mercies I see;",
        "All I have needed Thy hand hath provided;",
        "Great is Thy faithfulness, Lord, unto me!"
      ]
    },
    {
      type: "verse",
      number: 2,
      lines: [
        "Summer and winter and springtime and harvest,",
        "Sun, moon and stars in their courses above",
        "Join with all nature in manifold witness",
        "To Thy great faithfulness, mercy and love."
      ]
    }
  ],
  note: "Based on Lamentations 3:22-23. A hymn of God's unchanging faithfulness.",
  tags: ["Faithfulness", "Morning", "Mercy", "Traditional"],
  audioUrl: "https://example.com/hymns/011.mp3"  // Optional
}
```

## 📋 Step-by-Step Instructions

### 1. Open the Hymns Database
File location: `data/hymns.ts`

### 2. Find the `hymnsDatabase` array
Look for: `export const hymnsDatabase: Hymn[] = [`

### 3. Add Your Hymn
Add a new object to the array (after the last hymn, before the `];`)

### 4. Fill in the Details

#### Required Fields:
- **number**: Unique number (11, 12, 13, etc.)
- **title**: Hymn title
- **language**: Must be one of the supported languages
- **category**: Must be one of the supported categories
- **lyrics**: Array of lyric sections

#### Optional Fields:
- **note**: Background or context (recommended)
- **tags**: Array of keywords for searching
- **audioUrl**: Link to audio file (MP3, OGG, etc.)
- **youtubeUrl**: YouTube embed URL for lyric videos

## 🎥 Adding YouTube Videos & Audio

### YouTube Lyric Videos

To add a YouTube video to a hymn:

1. **Find the video on YouTube**
   - Go to the hymn's YouTube page
   - Example: `https://www.youtube.com/watch?v=CDdvReNKKuk`

2. **Convert to embed URL**
   - Change `/watch?v=` to `/embed/`
   - Result: `https://www.youtube.com/embed/CDdvReNKKuk`

3. **Add to your hymn**
   ```typescript
   {
     number: 2,
     title: "Amazing Grace",
     language: "English",
     category: "Praise",
     // ... lyrics ...
     youtubeUrl: "https://www.youtube.com/embed/CDdvReNKKuk"
   }
   ```

### Audio Files

For audio files (when YouTube isn't available):

```typescript
{
  number: 5,
  title: "Custom Hymn",
  // ... other fields ...
  audioUrl: "https://your-cdn.com/audio/hymn-005.mp3"
}
```

**Supported audio formats:**
- MP3 (recommended)
- OGG
- WAV

**Tips:**
- Host audio on a CDN or cloud storage (Cloudinary, AWS S3, etc.)
- Keep file sizes reasonable (under 5MB if possible)
- Test the URL in a browser first

### Example with Both Video and Audio

```typescript
{
  number: 1,
  title: "Holy, Holy, Holy",
  language: "English",
  category: "Worship",
  lyrics: [
    // ... lyrics sections ...
  ],
  note: "A classic hymn of adoration to the Holy Trinity.",
  tags: ["Trinity", "Adoration", "Traditional"],
  youtubeUrl: "https://www.youtube.com/embed/K8rFYPSGmNI",
  audioUrl: "https://cdn.example.com/hymns/001.mp3"
}
```

The media player will automatically display:
- YouTube video in a responsive player
- Audio player with controls
- Both side-by-side on larger screens

## 🌍 Language Options

Choose from:
- `"English"`
- `"Luganda"`
- `"Runyankore"`
- `"Rukiga"`
- `"Swahili"`
- `"French"`
- `"Multilingual"`

### Adding a New Language:
1. Edit `types/index.ts`
2. Add your language to the `Language` type
3. Use it in your hymns

## 📚 Category Options

Choose from:
- `"Praise"`
- `"Worship"`
- `"Prayer"`
- `"Thanksgiving"`
- `"Instrumental"`
- `"Invocation"`
- `"Processional"`
- `"Recessional"`
- `"Communion"`
- `"Adoration"`

### Adding a New Category:
1. Edit `types/index.ts`
2. Add your category to the `Category` type
3. Use it in your hymns

## 🎵 Lyrics Structure

### Section Types:
- `"verse"` - Numbered verses
- `"chorus"` - Repeated chorus/refrain
- `"bridge"` - Bridge section
- `"intro"` - Introduction
- `"outro"` - Ending

### Verse Example:
```typescript
{
  type: "verse",
  number: 1,          // Verse number
  lines: [
    "Line 1",
    "Line 2",
    "Line 3"
  ]
}
```

### Chorus Example:
```typescript
{
  type: "chorus",
  lines: [            // No number for chorus
    "Chorus line 1",
    "Chorus line 2"
  ]
}
```

### Bridge Example:
```typescript
{
  type: "bridge",
  lines: [
    "Bridge line 1",
    "Bridge line 2"
  ]
}
```

## 🏷️ Tags Best Practices

Good tags help with searching:

```typescript
tags: [
  "Cross",           // Theme
  "Easter",          // Season
  "Traditional",     // Style
  "Newton"           // Author
]
```

## 🔢 Numbering System

You can use any numbering system:

- **Sequential**: 1, 2, 3, 4...
- **Traditional Hymnal**: 001, 002, 003...
- **With Prefix**: Keep numbers as integers (no letters)
- **Custom**: Any integer order you prefer

The app will display them exactly as numbered.

## 🌐 Multilingual Hymns

For hymns with multiple languages:

```typescript
{
  number: 50,
  title: "Bwana Asifiwe / Praise the Lord",
  language: "Multilingual",
  category: "Praise",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "Bwana asifiwe (Swahili)",
        "Praise the Lord (English)",
        "Mukama atusingwe (Luganda)"
      ]
    }
  ],
  note: "A multilingual praise hymn",
  tags: ["Multilingual", "Praise", "Swahili", "English", "Luganda"]
}
```

## ✅ Complete Examples

### English Traditional Hymn:
```typescript
{
  number: 15,
  title: "The Old Rugged Cross",
  language: "English",
  category: "Worship",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "On a hill far away stood an old rugged cross,",
        "The emblem of suffering and shame;",
        "And I love that old cross where the dearest and best",
        "For a world of lost sinners was slain."
      ]
    },
    {
      type: "chorus",
      lines: [
        "So I'll cherish the old rugged cross,",
        "Till my trophies at last I lay down;",
        "I will cling to the old rugged cross,",
        "And exchange it some day for a crown."
      ]
    }
  ],
  note: "Written by George Bennard in 1912",
  tags: ["Cross", "Sacrifice", "Traditional", "Bennard"]
}
```

### Luganda Hymn:
```typescript
{
  number: 20,
  title: "Yesu Awooma",
  language: "Luganda",
  category: "Praise",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "Yesu awooma mu ggulu",
        "Yesu awooma mu nsi",
        "Yesu ye Mukama waffe",
        "Atuyambe buli kiseera"
      ]
    },
    {
      type: "chorus",
      lines: [
        "Tukutendereza Yesu",
        "Tukusinza Mukama",
        "Oli wa kitiibwa",
        "Nga bw'oli omulamu"
      ]
    }
  ],
  note: "Oluyimba olw'okutendereza Yesu Kristo",
  tags: ["Yesu", "Okutendereza", "Luganda"]
}
```

### Runyankore Hymn:
```typescript
{
  number: 25,
  title: "Ruhanga Ishitwe",
  language: "Runyankore",
  category: "Invocation",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "Ruhanga Ishitwe, Ruhanga Omwana",
        "Ruhanga Omwoyo Orikwera",
        "Otwebembere Mukama",
        "Turikwetegyereza"
      ]
    }
  ],
  note: "Okukunda Ruhanga Orikwera",
  tags: ["Trinity", "Invocation", "Runyankore"]
}
```

## 🎼 With Audio:
```typescript
{
  number: 30,
  title: "Holy, Holy, Holy",
  language: "English",
  category: "Worship",
  lyrics: [ /* lyrics here */ ],
  note: "Classic Trinity hymn",
  tags: ["Trinity", "Traditional"],
  audioUrl: "/audio/holy-holy-holy.mp3"  // Place file in public/audio/
}
```

## 💾 Saving Your Changes

After adding hymns:
1. **Save the file** (`Ctrl + S`)
2. The app will **auto-reload** in your browser
3. Your new hymns appear immediately!

## 🔍 Testing Your Hymns

After adding:
1. Go to "All Hymns" page
2. Search for your hymn
3. Click to view full details
4. Test the favorite button
5. Add to a session

## ⚠️ Common Mistakes

### ❌ Wrong:
```typescript
number: "11",        // Don't use quotes for numbers
language: "spanish", // Use exact case from Language type
```

### ✅ Correct:
```typescript
number: 11,          // No quotes
language: "English", // Exact match with capital letter
```

### ❌ Wrong:
```typescript
{
  type: "verse",
  lines: "Line 1"    // Lines must be an array
}
```

### ✅ Correct:
```typescript
{
  type: "verse",
  number: 1,
  lines: [            // Array of strings
    "Line 1",
    "Line 2"
  ]
}
```

## 📊 Bulk Import Template

Creating many hymns? Use this template:

```typescript
// Template - Copy and modify for each hymn
{
  number: __,
  title: "___",
  language: "English",
  category: "Praise",
  lyrics: [
    {
      type: "verse",
      number: 1,
      lines: [
        "___",
        "___"
      ]
    }
  ],
  note: "___",
  tags: ["___"]
},
```

## 🎯 Tips

1. **Keep it simple** - Start with just verses and choruses
2. **One line per array item** - Don't combine multiple lines
3. **Preserve line breaks** - How you format is how it displays
4. **Add notes** - Context helps users understand the hymn
5. **Use tags** - Makes searching easier
6. **Test often** - Add a few hymns and test before adding more

## 📞 Need Help?

If you're stuck:
1. Look at the existing 10 hymns for examples
2. Copy an existing hymn and modify it
3. Make sure commas are correct between hymns
4. Check that all brackets `[]` and braces `{}` are closed

---

Happy hymn adding! 🎵
