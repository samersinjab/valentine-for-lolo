# Valentine's Website for Lolo - Implementation Prompt

## Objective

Create a funny and romantic interactive Valentine's Day website that asks "Lolo, will you be my Valentine?" with playful persistence mechanics, cat-themed imagery, background music, particle effects, and deployment to Vercel.

**Why this matters:** This is a personalized romantic gesture combining humor and sentiment to create a memorable experience for Lolo.

## Context

**Reference website:** https://tyrekmills.github.io/Valentine-bear/
- Minimalist design with binary choice (Yes/No buttons)
- Playful interaction mechanics
- Romantic theme with emoji reinforcement
- Clean, focused user experience

**Project requirements:**
- Theme: Valentine's Day proposal to Lolo
- Humor style: Playfully persistent (No button moves/shrinks/becomes harder to click)
- Cat integration: Mix of user-provided photos and cute romantic cat GIFs
- Visual style: Soft pastel color scheme (light pink, lavender, mint)
- Special features:
  - Background music (romantic/upbeat)
  - Particle effects (hearts, sparkles)
  - Lolo's name in the main question
- Deployment: Vercel (free hosting with instant deployment)

**Target directory:** `d:\My Calude Code Project\website`

## Requirements

### 1. Project Structure

Create a clean, modern web project with:
```
website/
├── index.html           # Main HTML file
├── styles.css           # Styling with soft pastel theme
├── script.js            # Interactive behavior and animations
├── assets/
│   ├── music/          # Background music file(s)
│   ├── cats/           # Cat photos and GIFs
│   └── particles/      # Particle effect assets (if needed)
├── vercel.json         # Vercel deployment configuration
└── README.md           # Setup and deployment instructions
```

### 2. Core Features

**A. Main Question Display**
- Large, centered text: "Lolo, will you be my Valentine? 💕"
- Use soft pastel colors (light pink background, lavender accents)
- Heart/romantic emoji integration
- Elegant, readable typography

**B. Playful Persistence Mechanics**
Implement creative ways to make clicking "No" difficult:
- **Button evasion:** No button moves away when mouse hovers near it
- **Button shrinking:** No button gets progressively smaller with each hover
- **Button hiding:** No button fades out or moves to random positions
- **Message changes:** Text above buttons changes to increasingly persuasive/funny messages
  - Examples: "Are you sure? 🥺", "The cat will be sad...", "Please? 🐱", "One more chance?"

**C. Success Celebration (When "Yes" is clicked)**
- Confetti or heart particle explosion
- Happy message: "Lolo said Yes! 🎉💕"
- Display romantic cat GIF celebration
- Intensify background music or play victory sound
- Show additional content: date ideas, sweet message, or photo gallery

**D. Cat Integration**
- Display cute cat images/GIFs throughout the experience
- Use placeholder paths for user-provided photos: `assets/cats/photo1.jpg`, etc.
- Integrate 2-3 romantic/cute cat GIFs from Giphy or similar sources (use CDN URLs)
- Show different cat reactions based on user interactions:
  - Pleading cat when hovering "No"
  - Happy cat when "Yes" is clicked

**E. Background Music**
- Auto-play romantic/upbeat background music (with user permission)
- Use a royalty-free romantic instrumental or cute love song
- Include volume control toggle
- Mute button for accessibility

**F. Particle Effects**
- Floating hearts, sparkles, or confetti in the background
- Use CSS animations or lightweight JavaScript library (particles.js or similar)
- Intensify particles when "Yes" is clicked
- Soft pastel-colored particles matching the theme

### 3. Technical Implementation

**HTML Structure:**
- Semantic HTML5 elements
- Proper meta tags for sharing (Open Graph, Twitter Cards)
- Favicon with heart or cat theme
- Mobile-responsive viewport settings

**CSS Styling:**
- Soft pastel color palette:
  - Primary: Light pink (#FFE5EC, #FFC9DE)
  - Secondary: Lavender (#E5D4ED, #C5A8D6)
  - Accent: Mint (#D4F1E8)
  - Text: Dark gray (#4A4A4A) for readability
- Smooth transitions and animations
- Mobile-first responsive design
- Glassmorphism or soft shadow effects for modern look
- Button hover effects and animations

**JavaScript Features:**
- Button evasion logic with smooth animations
- Particle system initialization
- Music playback controls
- Event listeners for user interactions
- Random position generation for moving buttons
- State management for interaction tracking

**Performance:**
- Optimize images and GIFs (compress without losing quality)
- Lazy load assets
- Minimal external dependencies
- Fast initial load time

### 4. Deployment Configuration

**Vercel Setup:**
- Create `vercel.json` with proper configuration:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ]
}
```
- Include deployment instructions in README.md:
  - Install Vercel CLI: `npm i -g vercel`
  - Deploy command: `vercel`
  - Link to project and configure domain

### 5. Accessibility & User Experience

- Keyboard navigation support
- ARIA labels for screen readers
- Option to disable animations (respect prefers-reduced-motion)
- Music auto-play with clear mute option
- Mobile touch event support (not just mouse hover)
- Fast load time (< 3 seconds on 3G)

### 6. Content Placeholders

Include clear placeholders for user customization:
- `assets/cats/your-photo-1.jpg` - Replace with personal cat photos
- `assets/music/background-music.mp3` - Replace with chosen song
- Comments in code indicating where to customize text/messages
- README instructions for adding personal touches

## Output Specification

**Primary output file:** `.prompts/001-valentine-website-lolo-do/valentine-website-lolo-do.md`

This file should document:
- Architecture decisions made
- Technologies/libraries chosen (with rationale)
- File structure created
- Implementation notes for each feature
- Any assumptions or trade-offs

**Code files created:** All website files in `d:\My Calude Code Project\website`

**Output structure for valentine-website-lolo-do.md:**
```xml
<implementation_summary>
  <technologies>
    <!-- List of technologies used and why -->
  </technologies>

  <architecture>
    <!-- How the code is organized and why -->
  </architecture>

  <features_implemented>
    <!-- Each feature with implementation details -->
  </features_implemented>

  <assumptions>
    <!-- Any assumptions made during implementation -->
  </assumptions>

  <customization_guide>
    <!-- Step-by-step guide for personalizing the website -->
  </customization_guide>

  <deployment_checklist>
    <!-- Pre-deployment tasks and verification steps -->
  </deployment_checklist>
</implementation_summary>
```

## SUMMARY.md Requirement

You MUST create `.prompts/001-valentine-website-lolo-do/SUMMARY.md` with the following structure:

```markdown
# Valentine Website for Lolo - Implementation Summary

**One-liner:** [Substantive description of what was built, e.g., "Interactive Valentine's website with playful persistent buttons, cat GIFs, particle effects, and background music deployed to Vercel"]

**Version:** v1

## Files Created
- `index.html` - Main page structure
- `styles.css` - Soft pastel styling
- `script.js` - Interactive mechanics
- `vercel.json` - Deployment config
- `README.md` - Setup instructions
- [List other files created]

## Key Decisions
- [Technology choices made]
- [Library selections with rationale]
- [Implementation approach for playful persistence]
- [Particle effect solution chosen]

## Decisions Needed
- Replace placeholder cat photos with personal images
- Select and add background music file
- [Any other customizations needed]

## Blockers
- [If any: external assets needed, API keys required, etc.]
- None [if no blockers]

## Next Step
1. Add personal cat photos to `assets/cats/`
2. Choose and add background music
3. Test locally with `npx serve`
4. Deploy to Vercel with `vercel --prod`
5. Share the URL with Lolo! 💕
```

## Success Criteria

**Code Quality:**
- ✅ Clean, well-commented code
- ✅ Mobile responsive (tested on phone screens)
- ✅ No console errors
- ✅ Smooth animations (60fps)

**Feature Completeness:**
- ✅ Main question displays "Lolo, will you be my Valentine?"
- ✅ Yes/No buttons with playful persistence on "No"
- ✅ Cat photos/GIFs integrated
- ✅ Background music with controls
- ✅ Particle effects (hearts/sparkles)
- ✅ Success celebration on "Yes" click
- ✅ Soft pastel color scheme

**Deployment Ready:**
- ✅ `vercel.json` configured correctly
- ✅ README with clear deployment instructions
- ✅ All assets optimized for web
- ✅ Works on mobile and desktop browsers

**User Experience:**
- ✅ Loads quickly (< 3 seconds)
- ✅ Intuitive interaction
- ✅ Funny and romantic tone achieved
- ✅ Memorable experience created

## Additional Notes

**Music Recommendations:**
- Use royalty-free music from: YouTube Audio Library, Bensound, or Incompetech
- Suggested tracks: Romantic instrumental, upbeat love songs, cute music box melodies
- Format: MP3 (compressed to ~2-3MB max)

**Cat GIF Sources:**
- Giphy API (free tier) or direct CDN links
- Keywords: "romantic cat", "love cat", "cute cat valentine", "cat hearts"
- Use optimized GIFs (< 2MB each)

**Testing Checklist:**
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify music plays with user interaction (browser auto-play policies)
- [ ] Check particle effects don't cause lag
- [ ] Test button evasion mechanics feel playful, not frustrating
- [ ] Verify all assets load correctly

**Personalization Tips:**
- Add inside jokes in the persuasive messages
- Include favorite cat moments in photo gallery
- Customize success message with future date plans
- Add personal touches to color scheme if needed (while keeping soft pastels)

---

**Remember:** This website is a romantic gesture. Prioritize charm, humor, and emotional impact over technical complexity. Keep it simple, delightful, and memorable. Good luck! 💕✨
