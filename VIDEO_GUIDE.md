# 🎥 Adding YouTube Videos to Hymns - Quick Reference

## How to Add YouTube Videos

### Step 1: Find the YouTube Video ID

From this URL: `https://www.youtube.com/watch?v=CDdvReNKKuk`

The video ID is: `CDdvReNKKuk` (everything after `v=`)

### Step 2: Create Embed URL

Convert it to: `https://www.youtube.com/embed/CDdvReNKKuk`

### Step 3: Add to Hymn in data/hymns.ts

```typescript
{
  number: 2,
  title: "Amazing Grace",
  language: "English",
  category: "Praise",
  lyrics: [
    // ... all your lyrics here ...
  ],
  note: "Written by John Newton...",
  tags: ["Grace", "Salvation"],
  youtubeUrl: "https://www.youtube.com/embed/CDdvReNKKuk"  // Add this line
}
```

## Quick Copy-Paste Template

For each hymn you want to add a video to:

```typescript
youtubeUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE"
```

## Finding Hymn Videos on YouTube

### Search Tips:
1. Search: "hymn name + lyrics"
2. Search: "hymn name + with lyrics"
3. Search: "hymn name + lyric video"
4. Search: "hymn name + karaoke"

### Best Video Types:
- ✅ Lyric videos (shows words)
- ✅ Hymn with text overlay
- ✅ Official church/ministry recordings
- ❌ Avoid: Personal covers without lyrics
- ❌ Avoid: Videos with poor audio quality

## Example YouTube URLs for Popular Hymns

### English Hymns
- Amazing Grace: `https://www.youtube.com/embed/CDdvReNKKuk`
- How Great Thou Art: `https://www.youtube.com/embed/Cc4RjfW7bkI`
- Holy Holy Holy: `https://www.youtube.com/embed/K8rFYPSGmNI`
- Great Is Thy Faithfulness: `https://www.youtube.com/embed/KUzPF4EFeqA`

### Luganda Hymns
- Tukutendereza Yesu: `https://www.youtube.com/embed/gAPzQG771Wk`

## Testing Your Changes

After adding YouTube URLs:

1. Save the file
2. Restart the development server if needed
3. Navigate to the hymn detail page
4. You should see:
   - A "Listen & Watch" section
   - The YouTube video player
   - Audio player (if audioUrl is also provided)

## Troubleshooting

### Video Not Showing?
- ✅ Check the embed URL format: Must start with `https://www.youtube.com/embed/`
- ✅ Check for typos in the video ID
- ✅ Make sure the comma is correct after the URL
- ✅ Test the URL in a browser first

### Video Shows Error?
- The video might be region-locked
- The video might be set to not allow embedding
- Try a different video for the same hymn

## Audio Files Alternative

If YouTube isn't available, use audio files:

```typescript
audioUrl: "https://your-cdn.com/hymns/hymn-002.mp3"
```

### Where to Host Audio:
- Cloudinary (free tier available)
- AWS S3
- Google Drive (public links)
- GitHub (for small files)
- Your own web server

## Bulk Adding Videos

To add videos to multiple hymns at once:

1. Create a spreadsheet with:
   - Hymn number
   - Hymn title  
   - YouTube video ID

2. Use find/replace in your code editor:
   - Find: `tags: ["..."]` (for each hymn)
   - Replace with: `tags: ["..."],\n    youtubeUrl: "https://www.youtube.com/embed/VIDEO_ID"`

3. Manually update each VIDEO_ID from your spreadsheet

## Tips for Best Experience

1. **Choose Official Versions**: Use official ministry or church recordings when possible
2. **Check Audio Quality**: Listen to ensure clear audio
3. **Verify Lyrics Match**: Make sure the video lyrics match your database
4. **Test on Mobile**: Videos should work on mobile devices
5. **Keep it Simple**: One video per hymn is enough

## Need Help?

Check the main documentation:
- `HYMN_GUIDE.md` - Complete guide to adding hymns
- `README.md` - App overview and features
- `QUICKSTART.md` - Getting started guide

---

**Pro Tip**: You can add videos gradually. Start with your most popular hymns and add more over time!
