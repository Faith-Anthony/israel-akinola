# Animation & Hover Effects Reference

## 🎬 Visual Animation Breakdown

### 1. HERO SECTION - Staggered Text Reveal

```
Timeline:
├─ [0.2s] "Thinker." fades in + slides up
├─ [0.35s] "Strategist." fades in + slides up  
├─ [0.5s] "Leader." fades in + slides up
├─ [0.2s] Main heading fades in
├─ [0.3s] Intro text appears
└─ [0.4s] CTA buttons bounce in

Scroll indicator: Continuous bounce (0-8px)
```

### 2. INSIGHTS CARDS - Orange Hover Reveal

```
Static State:
┌─────────────────────────┐
│ " Quote in light gray   │
│   DDC1AE                │
│                         │
│ — Israel Akinola        │
└─────────────────────────┘

On Hover (300ms transition):
┌─────────────────────────┐  ← Border glows to FF8C00
│ " Quote turns ORANGE    │  ← #FF8C00
│   (bright accent)       │
│ [Glow effect]           │  ← Background glow
│ — Israel Akinola        │  ← Text also orange
└─────────────────────────┘  ← Card lifts 4px
```

### 3. SERVICES GRID - Glowing Hover Effects

```
Static (4 services per row):
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ Icon │ │ Icon │ │ Icon │ │ Icon │
│ Text │ │ Text │ │ Text │ │ Text │
└──────┘ └──────┘ └──────┘ └──────┘

On Hover:
┌─────────────────────────┐
│  Icon scales 1.1x       │  ← Icon grows + orange
│  Icon color: Orange     │
│  [Background glow]      │  ← Gradient appears
│  Border: Orange glow    │  ← Accent border
│  Card scales: 1.02x     │  ← Lifts up
└─────────────────────────┘
(300-400ms transition)
```

### 4. ABOUT SECTION - Staggered Content

```
Entrance Timing:
┌─ "A Cultural Engineer" (0.1s delay) → Fades + Slides
│
├─ Bio paragraph 1 (0.2s delay) → Fades + Slides
│
├─ Bio paragraph 2 (0.2s delay) → Fades + Slides
│
├─ "10+ Years" stats (0.3s delay) → Fades + Slides
│
└─ "Learn More" button (0.4s delay) → Fades + Slides

Image Effects:
├─ Orange border fades in on hover
├─ Glow effect appears
└─ No scale (preserve aspect ratio)
```

### 5. CASE STUDY CARD - Multi-element Animation

```
Sections appear in sequence:
1. Case study tag (0.2s) ✨
2. Title (0.3s) ✨
3. Description (0.4s) ✨
4. Check icons list (0.5s) ✨
5. Button (0.6s) ✨

Background icon: Continuous 360° rotation (20s loop)

On Hover:
├─ Image scales 1.02x
├─ Button shows arrow animation
├─ Border glows orange
└─ Card shadow expands
```

### 6. SCROLL REVEAL - All Sections

```
Default: Below viewport (opacity: 0, y: 20)
         ↓
Trigger: Scroll within 100px of section
         ↓
Animate: Fade in + Slide up (600-800ms)
         ↓
Final: Stays visible (once: true)

Staggered children:
• Card 1 enters (0.2s delay)
• Card 2 enters (0.35s delay) = 0.2 + 0.15
• Card 3 enters (0.5s delay) = 0.2 + 0.15×2
```

---

## 🎨 Hover Effect Color Palette

```
Default Text:      #ddc1ae (on-surface-variant)
Hover Text:        #ff8c00 (primary-container)

Default Border:    #353535 (surface-container-highest)
Hover Border:      #ff8c00 (primary-container)

Default Background: #1f1f1f
Hover Glow:        #ff8c00 @ 5-10% opacity

Icon Default:      #ddc1ae
Icon Hover:        #ff8c00
```

---

## ⏱️ Timing Reference

```
Fast Animations:   200ms (button tap feedback)
Standard:          300ms (color transitions)
Slow:              600-800ms (section reveals)
Extra Slow:        1000ms (staggered sequences)

Delays:
├─ Stagger between children: 150ms
├─ Section delay: 200ms
└─ Individual animations: 100-200ms
```

---

## 📱 Responsive Breakpoints

```
Mobile (< 640px):
├─ 1 column layouts
├─ Stagger still applies (but faster)
└─ Touch-friendly hover states

Tablet (640px - 1024px):
├─ 2 column layouts
├─ Full stagger effects
└─ Desktop-like interactions

Desktop (> 1024px):
├─ 3+ column layouts
├─ Full animation suite
└─ Hover effects on all elements
```

---

## 🔧 Framer Motion Configuration

```typescript
// Scroll Trigger Pattern (Used throughout)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.6 }}

// Stagger Pattern (Cards/Lists)
initial="hidden"
whileInView="visible"
transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}

// Hover Pattern (Buttons/Interactive)
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.2 }}

// Color Animation Pattern (Text)
initial={{ color: '#ddc1ae' }}
whileHover={{ color: '#ff8c00' }}
transition={{ duration: 0.3 }}
```

---

## ✨ Performance Metrics

- GPU Accelerated: All transforms (scale, rotate, x/y)
- Frame Rate: Optimized for 60fps
- No Layout Shift: All animations use transforms
- Lazy Load: Images load="lazy"
- Smooth: Cubic-bezier easing throughout

---

## 🎯 User Experience Journey

```
Page Load:
1. Navigation bar appears (sticky)
2. Hero text reveals word by word
3. CTA buttons bounce in
4. Scroll indicator bobs

Scroll Down:
1. About section fades in (image loads lazy)
2. Services cards stagger into view
3. Each card has hover glow ready
4. Stats appear with slight delay

Continue Scroll:
1. Case study card lifts into view
2. Icon rotates continuously
3. Insights cards follow with animation
4. Text ready to change color on hover

Reach Bottom:
1. Final CTA section appears with glow
2. All hover effects remain active
3. Footer visible
```

---

## 🚀 Ready for Images

All animations work perfectly whether using:
- Placeholder icons (current)
- Real images (once uploaded)
- Gradient backgrounds
- Mixed content

The animations enhance without depending on content type!
