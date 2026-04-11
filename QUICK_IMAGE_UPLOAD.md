# Quick Image Upload Guide

## 📸 How to Upload Images to Your Project

### Method 1: Drag & Drop (Easiest)

1. **Open VS Code File Explorer** (left sidebar)
2. **Navigate to** `src/assets/images/`
3. **Create folders** as needed:
   - `profile/` - for profile photos
   - `case-study/` - for case study images
   - `clients/` - for client logos
4. **Drag your images** from your computer into the folders
   - Profile photo → `src/assets/images/profile/`
   - Logo → `src/assets/icons/`
   - Case study images → `src/assets/images/case-study/`

### Method 2: File → Open & Copy

1. Right-click on the folder in VS Code
2. Select "Open in Integrated Terminal"
3. Paste your files using `cp` command:
   ```bash
   # Copy image to project
   cp /path/to/israel-profile.jpg src/assets/images/profile/
   cp /path/to/logo.svg src/assets/icons/
   ```

### Method 3: Explorer Context Menu

1. Right-click on the folder in VS Code
2. Select "Reveal in File Explorer"
3. Copy/paste your images directly in Windows Explorer

---

## 🖼️ Files to Upload First

Once uploaded, I'll integrate these into the components automatically:

1. **Profile Photo**
   - Path: `src/assets/images/profile/israel-profile.jpg`
   - Size: 800×1000px (minimum)
   - Used in: About section

2. **Logo** 
   - Path: `src/assets/icons/logo.svg`
   - Size: Scalable (SVG preferred)
   - Used in: Navbar

3. **Case Study Image** (Optional)
   - Path: `src/assets/images/case-study/golearn-hero.jpg`
   - Size: 1200×800px (minimum)
   - Used in: Featured case study section

---

## ✅ After Uploading

Once you've dropped the files, I'll:
- ✅ Import them into the components
- ✅ Optimize them for web
- ✅ Add lazy loading
- ✅ Handle responsive images
- ✅ Replace all placeholder icons

Just let me know when the files are ready! 📂
