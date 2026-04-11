# Image Integration Implementation Guide

## 📁 Step 1: Upload Your Images

### Using VS Code File Explorer (Easiest)

1. **Open the Explorer** (icon on left sidebar)
2. **Navigate to** `src/assets/`
3. **For profile photo:**
   - Go to: `src/assets/images/profile/`
   - Drag your image file here
   - Name it: `israel-profile.jpg`

4. **For logo:**
   - Go to: `src/assets/icons/`
   - Drag your logo here
   - Name it: `logo.svg` (or `logo.png`)

5. **For case study image:**
   - Go to: `src/assets/images/case-study/`
   - Drag your image here
   - Name it: `golearn-hero.jpg`

---

## 💻 Step 2: Integrate Profile Photo

### In `src/components/homepage/AboutPreview.tsx`:

**Replace this:**
```typescript
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Replace with your actual imported image
// import israelProfile from '../../assets/images/profile/israel-profile.jpg'

export const AboutPreview: React.FC = () => {
```

**With this:**
```typescript
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import israelProfile from '../../assets/images/profile/israel-profile.jpg'

export const AboutPreview: React.FC = () => {
```

**Then replace the image placeholder:**

**Current code:**
```typescript
{/* Image placeholder - Replace with real image */}
<motion.div
  ... 
  className="h-96 md:h-full rounded-lg overflow-hidden relative group"
>
  {/* Placeholder - Replace with real image */}
  <div className="w-full h-full bg-gradient-to-br from-primary-container/20 to-transparent flex items-center justify-center">
    <span className="material-symbols-outlined text-primary-container text-8xl">
      person
    </span>
  </div>
```

**Replace with:**
```typescript
{/* Profile Image */}
<motion.div
  ...
  className="h-96 md:h-full rounded-lg overflow-hidden relative group"
>
  <img 
    src={israelProfile}
    alt="Israel Akinola"
    className="w-full h-full object-cover"
    loading="lazy"
    decoding="async"
  />
```

---

## 🎨 Step 3: Integrate Logo

### In `src/components/layout/Navbar.tsx`:

**Add import at top:**
```typescript
import logo from '../../assets/icons/logo.svg'  // or .png if using PNG
```

**Replace the logo text:**

**Current code:**
```typescript
<Link to="/" className="text-headline font-serif text-primary-container">
  Israel Akinola
</Link>
```

**Replace with:**
```typescript
<Link to="/" className="flex items-center gap-2">
  <img 
    src={logo} 
    alt="Israel Akinola" 
    className="h-8 w-auto"
    loading="lazy"
  />
  <span className="hidden sm:inline text-headline font-serif text-primary-container">
    Israel Akinola
  </span>
</Link>
```

---

## 📸 Step 4: Integrate Case Study Image

### In `src/components/homepage/FeaturedCaseStudy.tsx`:

**Add import at top:**
```typescript
import golearHero from '../../assets/images/case-study/golearn-hero.jpg'
```

**Replace the image placeholder:**

**Current code:**
```typescript
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4 }}
  className="h-64 md:h-80 bg-gradient-to-br from-primary-container/30 to-primary-container/10 flex items-center justify-center relative overflow-hidden"
>
  {/* Animated background element */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className="absolute text-primary-container/20"
  >
    <span className="material-symbols-outlined text-9xl">
      trending_up
    </span>
  </motion.div>
</motion.div>
```

**Replace with:**
```typescript
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4 }}
  className="h-64 md:h-80 relative overflow-hidden"
>
  <img
    src={golearHero}
    alt="Golearn Case Study"
    className="w-full h-full object-cover"
    loading="lazy"
    decoding="async"
  />
</motion.div>
```

---

## ✅ Quality Checklist

After uploading images:

- [ ] Profile photo is 800x1000px minimum
- [ ] Logo is SVG or high-res PNG
- [ ] Case study image is 1200x800px minimum
- [ ] All images are under 500KB each
- [ ] Images are compressed (use TinyPNG or similar)
- [ ] Alt text is descriptive
- [ ] Images work on mobile (responsive)

---

## 🖼️ Optional: Add More Images

### Client Logos
Create folder: `src/assets/images/clients/`

### Hero Background
Create folder: `src/assets/images/hero/`

### Blog Images
Create folder: `src/assets/images/blog/`

---

## 📝 Complete Example Files

Once you upload your images, I can:

1. ✅ Update all import statements
2. ✅ Replace all placeholders
3. ✅ Optimize images for web
4. ✅ Add responsive image attributes
5. ✅ Verify everything looks perfect

---

## 🚀 Ready to Go!

Just upload your images to the correct folders and let me know! I'll handle all the integration immediately.

**Timeline:** Upload images → I'll integrate them in < 5 minutes
