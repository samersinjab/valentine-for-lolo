# Valentine's Day Website for Lolo 💕

A playful and romantic interactive Valentine's Day website that asks "Lolo, will you be my Valentine?" with fun persistence mechanics, cat-themed imagery, background music, and particle effects.

## Features

- **Playful Persistence**: The "No" button moves away, shrinks, and becomes harder to click
- **Persuasive Messages**: Increasingly convincing messages appear when hovering over "No"
- **Cat Integration**: Cute romantic cat GIFs that change based on user interaction
- **Background Music**: Romantic background music with toggle controls
- **Particle Effects**: Floating hearts and sparkles throughout the experience
- **Celebration**: Confetti explosion and special message when "Yes" is clicked
- **Soft Pastel Design**: Beautiful light pink, lavender, and mint color scheme
- **Mobile Responsive**: Works perfectly on all devices

## Project Structure

```
website/
├── index.html              # Main HTML file
├── styles.css              # Soft pastel styling and animations
├── script.js               # Interactive behavior and particle effects
├── vercel.json             # Vercel deployment configuration
├── README.md               # This file
└── assets/
    ├── music/              # Background music files (add your own)
    │   └── background-music.mp3
    └── cats/               # Personal cat photos (optional)
        ├── your-photo-1.jpg
        ├── your-photo-2.jpg
        └── your-photo-3.jpg
```

## Customization Guide

### 1. Add Background Music

1. Choose a romantic, royalty-free song (MP3 format recommended)
2. Compress it to 2-3MB for fast loading
3. Save it as `assets/music/background-music.mp3`

**Recommended sources:**
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Bensound](https://www.bensound.com/)
- [Incompetech](https://incompetech.com/)

**Suggested tracks:**
- Romantic instrumental piano
- Upbeat love songs
- Cute music box melodies

### 2. Add Personal Cat Photos (Optional)

Replace the placeholder cat GIFs with your own photos:

1. Create the `assets/cats/` directory if it doesn't exist
2. Add your cat photos (JPEG or PNG format)
3. Optimize images (recommended: 500x500px, < 500KB each)
4. Update the `catImages` object in `script.js`:

```javascript
catImages: {
    pleading: 'assets/cats/your-photo-1.jpg',
    sad: 'assets/cats/your-photo-2.jpg',
    happy: 'assets/cats/your-photo-3.jpg',
    love: 'assets/cats/your-photo-4.jpg'
}
```

### 3. Customize Messages

Edit the persuasive messages in `script.js`:

```javascript
const persuasiveMessages = [
    "Your custom message here! 🥺",
    "Another funny message...",
    // Add inside jokes or personal references
];
```

### 4. Adjust Colors (Optional)

Modify the color palette in `styles.css`:

```css
:root {
    --color-pink-light: #FFE5EC;    /* Light pink background */
    --color-pink-medium: #FFC9DE;   /* Medium pink accents */
    --color-lavender-light: #E5D4ED; /* Lavender secondary */
    --color-mint: #D4F1E8;          /* Mint accents */
}
```

## Local Testing

### Option 1: Using Python (Recommended)

```bash
# Navigate to the website directory
cd "d:\My Calude Code Project\website"

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 2: Using Node.js

```bash
# Install serve globally (one time)
npm install -g serve

# Navigate to the website directory
cd "d:\My Calude Code Project\website"

# Run the server
serve

# Then open: http://localhost:3000
```

### Option 3: Using VS Code

1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Deployment to Vercel

### Prerequisites

- [Vercel account](https://vercel.com/signup) (free)
- [Vercel CLI](https://vercel.com/download) installed

### Step-by-Step Deployment

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

#### 3. Deploy the Website

```bash
# Navigate to the website directory
cd "d:\My Calude Code Project\website"

# Deploy to Vercel
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? (default or customize)
- Directory? `.` (current directory)

#### 4. Deploy to Production

```bash
vercel --prod
```

Your website will be live at: `https://your-project-name.vercel.app`

### Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your git repository or drag & drop the folder
4. Click "Deploy"

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Add your background music file (`assets/music/background-music.mp3`)
- [ ] (Optional) Replace cat GIFs with personal photos
- [ ] (Optional) Customize persuasive messages with inside jokes
- [ ] Test on mobile devices (Chrome, Safari)
- [ ] Test on desktop browsers (Chrome, Firefox, Edge)
- [ ] Verify music plays correctly (may require user interaction due to browser policies)
- [ ] Check particle effects don't cause lag on older devices
- [ ] Test button evasion feels playful, not frustrating

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome)

## Accessibility Features

- Keyboard navigation support
- ARIA labels for screen readers
- Music mute option for accessibility
- Respects `prefers-reduced-motion` setting
- Mobile touch event support

## Troubleshooting

### Music doesn't auto-play

Due to browser auto-play policies, music requires user interaction. The website will attempt to play music on the first click. Users can also use the music toggle button in the top-right corner.

### No button not moving on mobile

Make sure you're using touch events. The code includes both `mouseenter` and `touchstart` events for cross-device compatibility.

### Particles causing lag

Reduce particle frequency in `script.js`:

```javascript
state.particleInterval = setInterval(createParticle, 1200); // Increase from 800
```

### Images not loading

Ensure all image paths are correct and files exist in the `assets/` directory.

## Support

For issues or questions, check:
- [Vercel Documentation](https://vercel.com/docs)
- Browser developer console for errors
- This README for customization tips

## License

This is a personal romantic gesture project. Feel free to use and customize for your own Valentine! 💕

---

**Made with love for Lolo** 💖✨
