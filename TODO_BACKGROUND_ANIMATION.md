# Background Animation Debugging - TODO

## Issues Found:
1. Z-Index Issue: `-z-50` places background behind everything including body background
2. Canvas Visibility: Clear color `hsl(222, 47%, 8%)` matches page background exactly
3. Low Opacity: Particles (max 0.4) and connections (max 0.15) are too faint
4. Floating Elements: Symbols (0.08) and shapes (0.05) are nearly invisible

## Fix Plan:

### Step 1: Fix Background.tsx Z-Index ✅
- [x] Changed `-z-50` to `z-0` with proper negative z-index for children
- [x] Ensured background renders above body background but below content

### Step 2: Fix BackgroundCanvas.tsx ✅
- [x] Made canvas transparent (removed fillRect with background color)
- [x] Increased particle opacity range to 0.6-1.0
- [x] Increased connection line opacity to 0.3-0.6
- [x] Increased particle radius for better visibility
- [x] Made colors brighter (60-70% lightness)

### Step 3: Fix FloatingElements.tsx ✅
- [x] Increased symbol opacity to 0.15
- [x] Increased geometric shape opacity to 0.1

### Step 4: Testing
- [ ] Verify particles are visible on dark background
- [ ] Verify floating symbols are visible
- [ ] Check reduced motion functionality
- [ ] Verify no performance issues

