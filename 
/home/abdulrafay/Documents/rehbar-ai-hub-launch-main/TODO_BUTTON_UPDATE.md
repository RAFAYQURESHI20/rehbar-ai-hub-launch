# Button Cyan/Azure Blue Update Plan

## Information Gathered:
1. **Button Component** (`src/components/ui/button.tsx`): Uses CVA with variants: `default`, `gradient`, `hero`, `hero-outline`, `outline`, `secondary`, `accent`, etc.
2. **Color Variables** (`src/index.css`): 
   - `--primary: 210 100% 50%` (Electric Blue)
   - `--accent: 190 100% 45%` (Cyan/Teal)
3. **Button Usage**: 50+ button instances across multiple pages

## Plan:

### Step 1: Update CSS Variables in `src/index.css`
- Update `--primary` to a vibrant Cyan/Azure blue (195, 100%, 50%)
- Update `--accent` to a complementary cyan (190, 100%, 45%)
- Add enhanced hover, active, and focus state colors
- Update gradient definitions

### Step 2: Update Button Component in `src/components/ui/button.tsx`
- Ensure all primary variants use Cyan/Azure colors
- Add proper hover states: `hover:bg-primary/90` or similar
- Add focus ring colors matching the theme
- Ensure accessibility with proper contrast

### Step 3: Update Tailwind Config in `tailwind.config.ts`
- Verify color mappings are correct
- Add any additional custom colors if needed

### Files to Edit:
1. `src/index.css` - CSS variables and custom styles
2. `src/components/ui/button.tsx` - Button component variants
3. `tailwind.config.ts` - Tailwind color configuration

### Success Criteria:
- All buttons (default, gradient, hero, hero-outline, etc.) use Cyan/Azure blue
- Hover, active, and focus states are properly styled
- Text remains readable with white text on colored buttons
- No buttons are left with old/non-cyan colors
- Responsive design maintained

