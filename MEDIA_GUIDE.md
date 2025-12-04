# 📸 Events & Media Section - User Guide

## Overview
The **Events & Media** page allows you to showcase event posters, worship concert announcements, and fellowship gathering images.

---

## 📂 How to Add Your Images

### Step 1: Add Images to the Project
1. Place your image files in the `public/ads/` folder
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Recommended size: **1200x630px** (social media standard)

Example file structure:
```
public/
  ads/
    hymns-dinner-2025.jpg
    chara-experiences.jpg
    worship-night.png
```

### Step 2: Update the Advertising Data

Edit `app/media/page.tsx` and update the `ads` array:

```typescript
const [ads] = useState<AdItem[]>([
  {
    id: '1',
    title: 'Hymns & Dinner 2025',
    imageUrl: '/ads/hymns-dinner-2025.jpg',  // Path to your image
    description: 'An Evening of Worship - December 5, 2025',
    link: 'https://instagram.com/hymns_and_dinner'  // Optional link
  },
  {
    id: '2',
    title: 'Your Event Name',
    imageUrl: '/ads/your-image.jpg',
    description: 'Event description here',
    link: 'https://your-event-link.com'
  }
  // Add more events...
]);
```

### Step 3: Enable Image Display

In `app/media/page.tsx`, find these sections and **uncomment** them:

#### In the Grid View:
```typescript
// Remove the placeholder div and uncomment:
<Image
  src={ad.imageUrl}
  alt={ad.title}
  fill
  className="object-cover"
/>
```

#### In the Modal View:
```typescript
// Remove the placeholder div and uncomment:
<Image
  src={selectedAd.imageUrl}
  alt={selectedAd.title}
  fill
  className="object-contain"
/>
```

---

## 🎨 Customization Options

### Change Grid Layout
Edit the grid classes in `app/media/page.tsx`:

```typescript
// 3 columns on large screens (default)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4 columns on large screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// 2 columns on large screens
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### Add More Fields
You can add more properties to the `AdItem` interface:

```typescript
interface AdItem {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  link?: string;
  date?: string;        // Add event date
  location?: string;    // Add venue
  organizer?: string;   // Add organizer name
}
```

---

## 🖼️ Image Best Practices

### Size & Format
- **Recommended dimensions**: 1200x630px (Facebook/social media standard)
- **Minimum dimensions**: 800x400px
- **File size**: Keep under 500KB for fast loading
- **Format**: JPEG for photos, PNG for graphics with text

### Design Tips
1. **High contrast text** - Ensure text is readable
2. **Clear focal point** - Main message should be obvious
3. **Branding** - Include logos or event branding
4. **Mobile-friendly** - Text should be readable on small screens

### Optimization
Use tools to compress images:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- Next.js Image component (already implemented) automatically optimizes

---

## 🔗 Features

### Current Features
✅ Grid layout with hover effects
✅ Click to expand full view
✅ External links to event pages
✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode support
✅ Stats section showing event count

### Optional Enhancements
You can add:
- Image upload functionality (requires backend)
- Admin panel to manage ads
- Featured/pinned events
- Event categories/filters
- Date-based sorting
- Archive past events

---

## 📱 Access the Page

### From Home Screen
1. Click the **"Events & Media"** banner on the home page
2. Or navigate to: `http://localhost:3000/media`

### Quick Steps to Test
1. Add some sample images to `public/ads/`
2. Update the `ads` array with your images
3. Uncomment the Image components
4. Reload the page
5. Click on any card to see the expanded view

---

## 🎯 Example Setup

### Sample Event Entry
```typescript
{
  id: '3',
  title: 'Christmas Carols Night',
  imageUrl: '/ads/christmas-carols.jpg',
  description: 'Join us for an evening of traditional and contemporary Christmas carols - December 24, 2025 at 6:00 PM',
  link: 'https://example.com/christmas-carols'
}
```

### Multiple Events
```typescript
const [ads] = useState<AdItem[]>([
  {
    id: '1',
    title: 'Hymns & Dinner 2025',
    imageUrl: '/ads/hymns-dinner-2025.jpg',
    description: 'An Evening of Worship, Gratitude & Fellowship',
    link: 'https://instagram.com/hymns_and_dinner'
  },
  {
    id: '2',
    title: 'Youth Worship Night',
    imageUrl: '/ads/youth-worship.jpg',
    description: 'Contemporary worship for young hearts',
    link: 'https://example.com/youth'
  },
  {
    id: '3',
    title: 'Sunday Service',
    imageUrl: '/ads/sunday-service.jpg',
    description: 'Join us every Sunday at 10:00 AM',
    link: 'https://example.com/service'
  }
]);
```

---

## 🚀 Going Live

### For Production
1. Add all your event images
2. Uncomment the Image components
3. Test on mobile devices
4. Update meta tags for social sharing
5. Deploy your app

### Social Sharing
Add this to your page for better social media previews:

```typescript
export const metadata = {
  title: 'Events & Media - Hymns & Worship',
  description: 'Upcoming worship events and fellowship gatherings',
  openGraph: {
    images: ['/ads/your-featured-image.jpg'],
  },
};
```

---

## 💡 Tips

1. **Keep it updated** - Remove past events regularly
2. **High-quality images** - Use professional event posters
3. **Clear CTAs** - Make sure links are working
4. **Test mobile** - Most users will view on phones
5. **Consistent branding** - Use similar design style for all events

---

**Need help?** Check the main README.md or refer to Next.js Image documentation.

🎵 Happy event promoting!
