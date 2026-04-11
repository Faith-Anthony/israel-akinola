# Image Assets Guide - Israel Akinola Portfolio

## 📁 Folder Structure

Place all your images in the correct folder:

```
src/assets/
├── images/
│   ├── profile/          # Profile/portrait images
│   │   └── israel-profile.jpg
│   ├── case-study/       # Case study images
│   │   ├── golearn-hero.jpg
│   │   └── golearn-mockup.jpg
│   ├── clients/          # Client logos
│   │   ├── client-1.png
│   │   └── client-2.png
│   └── hero/             # Hero section images
│       └── background.jpg
├── icons/
│   ├── logo.svg
│   └── social/
│       ├── linkedin.svg
│       └── twitter.svg
```

## 🖼️ How to Add Images to Your Project

### Step 1: Upload Images
1. Copy your images to the appropriate folder in `src/assets/`
2. Keep filenames lowercase and use hyphens (e.g., `israel-profile.jpg` not `Israel Profile.jpg`)

### Step 2: Import Images in Components

**Option A: Static Import (Recommended)**
```typescript
import israelProfile from '../assets/images/profile/israel-profile.jpg'

export const AboutPreview = () => {
  return (
    <img 
      src={israelProfile} 
      alt="Israel Akinola"
      className="w-full h-auto rounded-lg"
    />
  )
}
```

**Option B: Direct Path**
```typescript
export const AboutPreview = () => {
  return (
    <img 
      src="/src/assets/images/profile/israel-profile.jpg" 
      alt="Israel Akinola"
      className="w-full h-auto rounded-lg"
    />
  )
}
```

### Step 3: Optimize Images

Use these utilities for better performance:

```typescript
// Lazy loading
<img 
  src={israelProfile} 
  alt="Israel Akinola"
  loading="lazy"
  decoding="async"
/>

// Responsive with picture element
<picture>
  <source media="(max-width: 640px)" srcSet={profileMobile} />
  <source media="(min-width: 641px)" srcSet={profileDesktop} />
  <img src={profileDesktop} alt="Israel Akinola" />
</picture>
```

## 📋 Image File Recommendations

| Purpose | Format | Size | Notes |
|---------|--------|------|-------|
| Profile/Portrait | JPG | 800×1000px+ | Use high quality |
| Logo | SVG | scalable | Best for logos |
| Case Studies | JPG/PNG | 1200×800px | Web optimized |
| Client Logos | PNG/SVG | 200×200px | Transparent background |
| Hero Background | WebP/JPG | 1920×1080px | Optimized for web |

## 🚀 Example: Adding Your Profile Photo

### In `src/components/homepage/AboutPreview.tsx`:

```typescript
import israelProfile from '../../assets/images/profile/israel-profile.jpg'

export const AboutPreview: React.FC = () => {
  return (
    <motion.div className="h-96 bg-surface-container-high rounded-lg overflow-hidden">
      <img 
        src={israelProfile} 
        alt="Israel Akinola"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}
```

### In `src/components/layout/Navbar.tsx`:

```typescript
import logo from '../../assets/icons/logo.svg'

export const Navbar: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Israel Akinola" className="h-8 w-auto" />
      <span>Israel Akinola</span>
    </Link>
  )
}
```

## ✅ Upload Your Images Now

1. **Profile Photo**: `src/assets/images/profile/israel-profile.jpg`
2. **Logo**: `src/assets/icons/logo.svg`
3. **Case Study Images**: `src/assets/images/case-study/`
4. **Client Logos**: `src/assets/images/clients/`

Then I'll update the components to use them!
