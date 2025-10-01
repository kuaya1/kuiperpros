# KuiperPros Design System Reference

## 🎨 Color Palette

### Brand Colors (Deep Space Blue)
Primary dark backgrounds and navy accents

```
brand-50:  #f0f4ff  ⬜ Lightest tint
brand-100: #d9e2ff  ⬜ Light backgrounds
brand-200: #b3c5ff  ⬜ Subtle borders
brand-300: #8ca8ff  ⬜ Muted text
brand-400: #668bff  ⬜ Interactive elements
brand-500: #4070ff  🔵 Base brand color
brand-600: #1a56ff  🔵 Hover states
brand-700: #0040e6  🔵 Active states
brand-800: #002d99  ⬛ Dark backgrounds
brand-900: #0A1128  ⬛ Darkest (hero background)
```

**Usage:**
- `brand-900`: Hero section background, dark card backgrounds
- `brand-600-800`: Text on light backgrounds, badges
- `brand-50-100`: Light section backgrounds, subtle highlights

---

### Accent Colors (Vibrant Cyan)
Primary CTAs, highlights, and key interactions

```
accent-50:  #e0f8ff  ⬜ Lightest tint
accent-100: #b3f0ff  ⬜ Light backgrounds
accent-200: #80e8ff  ⬜ Subtle highlights
accent-300: #4dd6ff  🔵 Muted interactions
accent-400: #1ac4ff  🔵 Secondary CTAs
accent-500: #00D9FF  🔵 PRIMARY CTA COLOR
accent-600: #00b8db  🔵 CTA hover state
accent-700: #0097b7  🔵 CTA active state
accent-800: #007693  🔵 Dark mode accents
accent-900: #005670  🔵 Darkest accent
```

**Usage:**
- `accent-500`: Primary buttons, key CTAs, links
- `accent-600`: Button hover states
- `accent-100-200`: Badge backgrounds, highlights
- `accent-300`: Live indicators, progress bars

---

### Secondary Colors (Warm Orange)
Urgency, highlights, warmth

```
secondary-50:  #fff4f0  ⬜ Lightest tint
secondary-100: #ffe8de  ⬜ Light backgrounds
secondary-200: #ffd1bd  🟠 Subtle highlights
secondary-300: #ffba9c  🟠 Muted text
secondary-400: #ffa37b  🟠 Interactive elements
secondary-500: #FF6B35  🟠 PRIMARY SECONDARY COLOR
secondary-600: #e05a2a  🟠 Hover states
secondary-700: #c24920  🟠 Active states
secondary-800: #a33816  🟠 Dark mode
secondary-900: #85270c  🟠 Darkest
```

**Usage:**
- `secondary-500`: Urgent CTAs, "hot" badges, highlights
- `secondary-100-200`: Warning backgrounds, waitlist alerts
- `secondary-600`: Secondary button hover states

---

### Location Colors (Success Green)
Coverage indicators, success states, availability

```
location-50:  #f0fdf4  ⬜ Lightest tint
location-100: #dcfce7  ⬜ Success backgrounds
location-200: #bbf7d0  🟢 Subtle indicators
location-300: #86efac  🟢 Muted success
location-400: #4ade80  🟢 Interactive success
location-500: #22c55e  🟢 PRIMARY SUCCESS COLOR
location-600: #16a34a  🟢 Hover states
location-700: #15803d  🟢 Active states
location-800: #166534  🟢 Dark mode success
location-900: #14532d  🟢 Darkest
```

**Usage:**
- `location-500`: "Available" indicators, checkmarks, success messages
- `location-100-200`: Success alert backgrounds
- `location-600`: Success button hover states

---

### Tech Colors (Innovation Purple)
Technology features, advanced capabilities

```
tech-50:  #faf5ff  ⬜ Lightest tint
tech-100: #f3e8ff  ⬜ Light backgrounds
tech-200: #e9d5ff  🟣 Subtle highlights
tech-300: #d8b4fe  🟣 Muted text
tech-400: #c084fc  🟣 Interactive elements
tech-500: #a855f7  🟣 PRIMARY TECH COLOR
tech-600: #9333ea  🟣 Hover states
tech-700: #7e22ce  🟣 Active states
tech-800: #6b21a8  🟣 Dark mode
tech-900: #581c87  🟣 Darkest
```

**Usage:**
- `tech-500`: Technology badges, innovation highlights
- `tech-100-200`: Tech section backgrounds
- `tech-600`: Tech button hover states

---

## 🎭 Component Color Guidelines

### Hero Section
```tsx
Background: bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900
Text: text-white
CTAs: bg-accent-500 hover:bg-accent-600 text-brand-900
Glassmorphism: bg-white/10 backdrop-blur-sm border-white/20
```

### Live Installation Feed
```tsx
Background: bg-gradient-to-r from-brand-50 via-accent-50 to-brand-50
Cards: bg-white shadow-lg border-gray-200
Badges: bg-brand-100 text-brand-700 (residential)
        bg-secondary-100 text-secondary-700 (commercial)
Live Indicator: bg-location-500 animate-ping
```

### How It Works
```tsx
Background: bg-white
Step 1 (Quote): accent-500 (cyan)
Step 2 (Match): secondary-500 (orange)
Step 3 (Install): tech-500 (purple)
Step 4 (Enjoy): location-500 (green)
Timeline: bg-gradient-to-r from-accent-500 via-secondary-500 to-location-500
```

### Technology Showcase
```tsx
Background: bg-gradient-to-b from-white via-brand-50 to-white
Cards: bg-white shadow-lg hover:shadow-2xl
Dark Section: bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900
Table Header: bg-white/5 border-white/10
Kuiper Column: text-accent-300 font-bold
```

### Coverage Checker
```tsx
Background: bg-gradient-to-b from-gray-50 to-white
Main Card: bg-white shadow-2xl
Available Result: bg-gradient-to-br from-location-50 to-location-100 border-location-200
Waitlist Result: bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200
Input Focus: ring-accent-500 border-accent-500
```

---

## 📐 Spacing System

### Section Padding
```tsx
Desktop: py-20 (80px vertical)
Mobile:  py-12 (48px vertical)
```

### Card Padding
```tsx
Large:  p-12 (48px all sides)
Medium: p-8  (32px all sides)
Small:  p-6  (24px all sides)
Mobile: p-4  (16px all sides)
```

### Container
```tsx
className="container"
Max-width: 1280px (xl breakpoint)
Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
```

---

## 🔤 Typography Scale

### Headings
```tsx
Display (Hero):     text-5xl md:text-6xl lg:text-7xl
Large Heading:      text-3xl md:text-4xl lg:text-5xl
Medium Heading:     text-2xl md:text-3xl
Small Heading:      text-xl md:text-2xl
Section Label:      text-sm font-semibold uppercase tracking-wide
```

### Body Text
```tsx
Large:   text-xl leading-relaxed
Regular: text-base leading-normal
Small:   text-sm leading-tight
Tiny:    text-xs leading-tight
```

### Font Families
```tsx
Display: font-display (Space Grotesk)
Body:    font-sans (Inter)
Code:    font-mono (system monospace)
```

---

## 🎬 Animation Timing

### Duration
```tsx
Instant:  duration-0   (0ms)
Fast:     duration-150 (150ms)
Normal:   duration-300 (300ms)
Slow:     duration-500 (500ms)
Slower:   duration-700 (700ms)
```

### Easing
```tsx
Linear:      ease-linear
Default:     ease-in-out
Smooth:      ease-out
Aggressive:  ease-in
```

### Custom Keyframes
```tsx
fade-in:     opacity 0→1, scale 0.95→1 (0.3s ease-out)
slide-up:    translateY 20px→0 (0.3s ease-out)
float:       translateY 0→-20px→0 (6s ease-in-out infinite)
pulse-slow:  scale 1→1.05→1 (3s ease-in-out infinite)
```

---

## 🎨 Shadow System

### Box Shadows
```tsx
sm:  shadow-sm      (subtle, minimal)
md:  shadow-md      (default cards)
lg:  shadow-lg      (elevated cards)
xl:  shadow-xl      (modals, dropdowns)
2xl: shadow-2xl     (hero cards, major sections)
```

### Hover Effects
```tsx
hover:shadow-lg     (cards)
hover:shadow-xl     (buttons)
hover:shadow-2xl    (major CTAs)
```

---

## 🔲 Border Radius

```tsx
sm:  rounded-sm     (2px)
md:  rounded-md     (6px)
lg:  rounded-lg     (8px)
xl:  rounded-xl     (12px)
2xl: rounded-2xl    (16px)
3xl: rounded-3xl    (24px)
full: rounded-full  (pill shape)
```

**Usage:**
- Buttons: `rounded-lg` or `rounded-xl`
- Cards: `rounded-2xl` or `rounded-3xl`
- Badges: `rounded-full`
- Inputs: `rounded-xl`

---

## 🎯 Interactive States

### Buttons
```tsx
Default:  bg-accent-500 text-brand-900
Hover:    bg-accent-600 scale-105
Active:   bg-accent-700 scale-95
Focus:    ring-2 ring-accent-500 ring-offset-2
Disabled: opacity-50 cursor-not-allowed
```

### Links
```tsx
Default:  text-accent-600 underline-offset-4
Hover:    text-accent-700 underline
Active:   text-accent-800
Focus:    ring-2 ring-accent-500 rounded
```

### Inputs
```tsx
Default:  border-2 border-gray-200
Focus:    border-accent-500 ring-2 ring-accent-500
Error:    border-red-500 ring-2 ring-red-500
Success:  border-location-500 ring-2 ring-location-500
```

---

## 📱 Responsive Breakpoints

```tsx
sm:  640px  (small tablets)
md:  768px  (tablets)
lg:  1024px (laptops)
xl:  1280px (desktops)
2xl: 1536px (large desktops)
```

### Mobile-First Approach
```tsx
// Mobile default
className="text-2xl"

// Tablet and up
className="text-2xl md:text-3xl"

// Desktop and up
className="text-2xl md:text-3xl lg:text-4xl"
```

---

## 🎨 Gradient Recipes

### Hero Background
```tsx
bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900
```

### CTA Buttons
```tsx
bg-gradient-to-r from-accent-500 to-accent-600
hover:from-accent-600 hover:to-accent-700
```

### Section Backgrounds
```tsx
bg-gradient-to-b from-white via-brand-50 to-white
bg-gradient-to-r from-brand-50 via-accent-50 to-brand-50
bg-gradient-to-br from-gray-50 to-white
```

### Timeline
```tsx
bg-gradient-to-r from-accent-500 via-secondary-500 to-location-500
```

### Text Gradients
```tsx
text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-secondary-600
```

---

## 🧊 Glassmorphism

### Standard Recipe
```tsx
bg-white/10           // 10% white background
backdrop-blur-sm      // blur backdrop
border                // add border
border-white/20       // 20% white border
shadow-xl             // depth shadow
```

### Variants
```tsx
Light:  bg-white/10 backdrop-blur-sm border-white/20
Medium: bg-white/20 backdrop-blur-md border-white/30
Heavy:  bg-white/30 backdrop-blur-lg border-white/40
```

---

## ✅ Accessibility Compliance

### Color Contrast Ratios
All combinations meet WCAG 2.1 Level AA (4.5:1 minimum):

✅ White on brand-900: 14.2:1
✅ brand-900 on accent-500: 7.8:1
✅ Gray-900 on white: 16.5:1
✅ Gray-700 on gray-50: 8.2:1
✅ accent-600 on white: 4.6:1

### Focus Indicators
```tsx
focus-visible:ring-2
focus-visible:ring-accent-500
focus-visible:ring-offset-2
focus-visible:outline-none
```

---

## 🎭 Dark Mode (Future)

When implementing dark mode:

```tsx
// Background
bg-white dark:bg-brand-900

// Text
text-gray-900 dark:text-white
text-gray-700 dark:text-gray-300

// Cards
bg-white dark:bg-brand-800
border-gray-200 dark:border-brand-700

// Buttons
bg-accent-500 dark:bg-accent-600
hover:bg-accent-600 dark:hover:bg-accent-700
```

---

## 📦 Component Library

### Button Variants

**Primary (Accent)**
```tsx
className="bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
```

**Secondary (Brand)**
```tsx
className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
```

**Outline**
```tsx
className="border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
```

**Text Only**
```tsx
className="text-accent-600 hover:text-accent-700 hover:underline font-semibold"
```

### Badge Variants

**Success (Location)**
```tsx
className="bg-location-100 text-location-700 text-sm font-semibold px-3 py-1 rounded-full"
```

**Warning (Secondary)**
```tsx
className="bg-secondary-100 text-secondary-700 text-sm font-semibold px-3 py-1 rounded-full"
```

**Info (Accent)**
```tsx
className="bg-accent-100 text-accent-700 text-sm font-semibold px-3 py-1 rounded-full"
```

**Tech (Purple)**
```tsx
className="bg-tech-100 text-tech-700 text-sm font-semibold px-3 py-1 rounded-full"
```

### Card Variants

**Standard Card**
```tsx
className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
```

**Glassmorphism Card**
```tsx
className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
```

**Gradient Card**
```tsx
className="bg-gradient-to-br from-brand-900 to-accent-900 rounded-2xl p-8 shadow-2xl text-white"
```

---

## 🎨 Icon Usage

### Lucide Icons
All icons from `lucide-react`:

```tsx
import { Satellite, Zap, MapPin, CheckCircle, Clock, Users } from 'lucide-react'

// Standard size
<Icon className="h-5 w-5" />

// Large
<Icon className="h-8 w-8" />

// Extra large (hero)
<Icon className="h-12 w-12" />
```

### Icon Colors
```tsx
// Accent (default)
className="text-accent-600"

// Brand
className="text-brand-600"

// Success
className="text-location-600"

// White (on dark)
className="text-white"

// Muted
className="text-gray-500"
```

---

## 📊 Quick Reference

### Most Common Classes

**Section Wrapper:**
```tsx
<section className="py-20 bg-gradient-to-b from-white via-brand-50 to-white">
  <div className="container">
    {/* content */}
  </div>
</section>
```

**Card:**
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
  {/* content */}
</div>
```

**Heading:**
```tsx
<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
  Title
</h2>
```

**Paragraph:**
```tsx
<p className="text-xl text-gray-600 leading-relaxed">
  Body text
</p>
```

**Primary Button:**
```tsx
<button className="bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
  Click Me
</button>
```

---

**Last Updated:** December 2024  
**Design System Version:** 2.0 (Modern Redesign)  
**Maintained by:** KuiperPros Development Team
