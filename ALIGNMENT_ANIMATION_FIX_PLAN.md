# Layout & Animation Alignment Plan

## Information Gathered:
- Header.tsx: Fixed header with scroll effects, responsive navigation, animated underline
- Footer.tsx: Complex footer with newsletter, links, trust badges, scroll-to-top button
- Background.tsx: Canvas-based particles with floating elements overlay
- FloatingElements.tsx: Tech symbols and geometric shapes with Framer Motion
- BackgroundCanvas.tsx: Neural network particle animation
- Layout.tsx: Main layout wrapper with Background, Header, main content, Footer
- Tailwind config: Custom responsive breakpoints and container configuration

## Plan:

### 1. Header Fixes (`src/components/layout/Header.tsx`)
- [ ] Add responsive logo sizing (sm: w-12, lg: w-16)
- [ ] Improve container padding for all breakpoints (px-3 sm:px-4 lg:px-6)
- [ ] Adjust nav link spacing and touch targets for mobile
- [ ] Better mobile menu width and padding
- [ ] Add proper max-width constraints
- [ ] Improve CTA button sizing on mobile

### 2. Footer Fixes (`src/components/layout/Footer.tsx`)
- [ ] Adjust grid gap for different screen sizes (gap-6 md:gap-8 lg:gap-12)
- [ ] Responsive newsletter form layout
- [ ] Better trust badge wrapping (flex-wrap with proper gaps)
- [ ] Mobile accordion improvements with better spacing
- [ ] Bottom bar responsive alignment (flex-col on mobile, flex-row on md+)
- [ ] Adjust column spans for better mobile layout

### 3. Background Animation Fixes (`src/components/background/FloatingElements.tsx`)
- [ ] Add overflow-hidden container with safe area boundaries
- [ ] Reduce element sizes on mobile (scale down proportionally)
- [ ] Adjust floating ranges to prevent overflow
- [ ] Add mobile-specific positioning constraints
- [ ] Better z-index management

### 4. Background Canvas Fixes (`src/components/background/BackgroundCanvas.tsx`)
- [ ] Ensure canvas covers full viewport properly
- [ ] Better resize handling with boundary checks
- [ ] Adjust particle count based on screen size

### 5. Layout Improvements (`src/components/layout/Layout.tsx`)
- [ ] Ensure main content has proper top padding for fixed header
- [ ] Better z-index layering
- [ ] Ensure footer doesn't overlap content

## Implementation Order:
1. Fix Header.tsx - Logo sizing, container padding, mobile menu
2. Fix Footer.tsx - Grid gaps, responsive layout, trust badges
3. Fix FloatingElements.tsx - Overflow prevention, mobile scaling
4. Fix BackgroundCanvas.tsx - Better resize handling
5. Test all screen sizes

## Files to Edit:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/background/FloatingElements.tsx`
- `src/components/background/BackgroundCanvas.tsx`

## Testing Requirements:
- Test on mobile (375px - 428px)
- Test on tablet (768px - 1024px)
- Test on desktop (1280px+)
- Verify no horizontal scroll
- Verify animations stay within viewport
- Verify touch targets are accessible

