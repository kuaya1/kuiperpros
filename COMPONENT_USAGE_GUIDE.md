# Component Usage Guide

Quick reference for implementing and customizing the redesigned components.

---

## 🎯 CoverageChecker Component

### Basic Usage
```tsx
import CoverageChecker from '@/components/homepage/CoverageChecker'

<CoverageChecker />
```

### Features
- ✅ Interactive address input
- ✅ Simulated availability check (1.5s delay)
- ✅ Available/Waitlist result cards
- ✅ Coverage statistics grid
- ✅ Full accessibility (labels, ARIA)

### Customization Points

**Change Delay Time:**
```tsx
// In CoverageChecker.tsx, line ~26
await new Promise(resolve => setTimeout(resolve, 1500)) // Change 1500 to desired ms
```

**Update Coverage Stats:**
```tsx
// In CoverageChecker.tsx, line ~126
<p className="text-4xl font-bold text-brand-600 mb-2">50</p>  // States
<p className="text-4xl font-bold text-accent-600 mb-2">500+</p>  // Cities
<p className="text-4xl font-bold text-secondary-600 mb-2">98%</p>  // Coverage
```

**Connect Real API:**
```tsx
const handleCheck = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsChecking(true)
  
  try {
    const response = await fetch('/api/check-coverage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address })
    })
    
    const data = await response.json()
    setResult(data.available ? 'available' : 'waitlist')
  } catch (error) {
    console.error('Coverage check failed:', error)
    // Handle error
  } finally {
    setIsChecking(false)
  }
}
```

### Styling Overrides
```tsx
// Section background
className="py-20 bg-gradient-to-b from-gray-50 to-white"

// Main card
className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"

// Available result
className="bg-gradient-to-br from-location-50 to-location-100 border-2 border-location-200"

// Waitlist result
className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200"
```

---

## 🔴 LiveInstallationFeed Component

### Basic Usage
```tsx
import LiveInstallationFeed from '@/components/homepage/LiveInstallationFeed'

<LiveInstallationFeed />
```

### Features
- ✅ Auto-updating feed (8s interval)
- ✅ Framer Motion animations
- ✅ Today's completion counter
- ✅ Residential/Commercial badges
- ✅ Stats grid

### Customization Points

**Change Update Frequency:**
```tsx
// In LiveInstallationFeed.tsx, line ~24
const interval = setInterval(() => {
  // Update logic
}, 8000) // Change 8000 to desired ms
```

**Update Mock Data:**
```tsx
const mockInstallations: Installation[] = [
  { id: '1', location: 'Your City, ST', timeAgo: '2 minutes ago', type: 'residential' },
  // Add more...
]
```

**Initial Counter Value:**
```tsx
// Line ~31
const [totalToday, setTotalToday] = useState(127) // Change starting number
```

**Connect Real API:**
```tsx
useEffect(() => {
  // Fetch from WebSocket or polling API
  const socket = new WebSocket('wss://your-api.com/installations')
  
  socket.onmessage = (event) => {
    const newInstallation = JSON.parse(event.data)
    setInstallations(current => [newInstallation, ...current].slice(0, 3))
    setTotalToday(prev => prev + 1)
  }
  
  return () => socket.close()
}, [])
```

### Styling Overrides
```tsx
// Section background
className="py-12 bg-gradient-to-r from-brand-50 via-accent-50 to-brand-50"

// Feed card
className="bg-white rounded-2xl shadow-lg p-6"

// Installation item
className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"

// Stats card
className="bg-white rounded-xl p-4 shadow-md text-center"
```

---

## 🚀 TechnologyShowcase Component

### Basic Usage
```tsx
import TechnologyShowcase from '@/components/homepage/TechnologyShowcase'

<TechnologyShowcase />
```

### Features
- ✅ 6-card technology grid
- ✅ Comparison table (Kuiper vs Others)
- ✅ Key benefits highlight bar
- ✅ Hover animations

### Customization Points

**Add/Remove Technology Cards:**
```tsx
const technologies = [
  {
    icon: YourIcon,
    title: 'Your Feature',
    description: 'Description here',
    color: 'accent', // accent, secondary, location, tech, brand
  },
  // ...
]
```

**Update Comparison Data:**
```tsx
const comparisonData = [
  { 
    feature: 'Download Speed', 
    kuiper: '1 Gbps', 
    competitor: '150 Mbps', 
    traditional: '25 Mbps' 
  },
  // Add more rows...
]
```

**Change Key Benefits:**
```tsx
// Line ~164
<p className="text-4xl font-bold mb-2">20ms</p>
<p className="text-brand-100">Ultra-Low Latency</p>

// Update values and labels
```

### Styling Overrides
```tsx
// Section background
className="py-20 bg-gradient-to-b from-white via-brand-50 to-white"

// Technology card
className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"

// Comparison table container
className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 rounded-3xl p-8 md:p-12 shadow-2xl"

// Table
className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20"
```

---

## 🌟 HeroSection Component (Redesigned)

### Usage
```tsx
import HeroSection from '@/components/homepage/HeroSection'

<HeroSection />
```

### Features
- ✅ Dark gradient background
- ✅ Animated installation counter
- ✅ 3 floating orbs
- ✅ Glassmorphism trust signals
- ✅ Accent-colored CTAs

### Customization Points

**Counter Values:**
```tsx
// Line ~11-12
const [installCount, setInstallCount] = useState(2500)
const targetCount = 2536

// Change starting/ending values
```

**Counter Animation Speed:**
```tsx
// Line ~15
const duration = 2000 // Duration in ms
const steps = 60      // Number of steps

// Faster: decrease duration or increase steps
// Slower: increase duration or decrease steps
```

**Floating Orbs:**
```tsx
// Add/remove/modify orbs at line ~45
<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
```

**Change Headline:**
```tsx
// Line ~53
<h1>Your Custom Headline</h1>
```

### Styling Overrides
```tsx
// Background gradient
className="relative min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900"

// Glassmorphism card
className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"

// Primary CTA
className="bg-accent-500 hover:bg-accent-600 text-brand-900"

// Secondary CTA
className="border-2 border-white/30 text-white hover:bg-white/10"
```

---

## 🔄 HowItWorks Component (Enhanced)

### Usage
```tsx
import HowItWorks from '@/components/homepage/HowItWorks'

<HowItWorks />
```

### Features
- ✅ Desktop timeline view
- ✅ Mobile card view
- ✅ Numbered step circles
- ✅ Color-coded badges
- ✅ Duration indicators

### Customization Points

**Modify Steps:**
```tsx
const steps = [
  {
    number: 1,
    title: 'Your Step',
    description: 'Description',
    duration: 'Time estimate',
    icon: YourIcon,
    color: 'accent', // accent, secondary, tech, location
  },
  // ...
]
```

**Timeline Colors:**
```tsx
// Line ~94 (desktop timeline)
className="bg-gradient-to-r from-accent-500 via-secondary-500 to-location-500"

// Modify gradient stops to match your step colors
```

**Step Circle Size:**
```tsx
// Line ~110
className="w-10 h-10" // Change size
```

### Styling Overrides
```tsx
// Section background
className="py-20 bg-white"

// Desktop step card
className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl"

// Mobile step card
className="border-l-4 border-${color}-500 p-6 rounded-r-xl"

// Duration badge
className="inline-flex items-center gap-1 text-sm text-gray-600"
```

---

## 📱 Responsive Behavior

### Breakpoints
All components use Tailwind's responsive prefixes:

```tsx
// Mobile first (default, < 640px)
className="text-2xl"

// Small (≥ 640px)
className="text-2xl sm:text-3xl"

// Medium (≥ 768px)
className="text-2xl md:text-3xl"

// Large (≥ 1024px)
className="text-2xl lg:text-4xl"

// Extra Large (≥ 1280px)
className="text-2xl xl:text-5xl"
```

### Common Responsive Patterns

**Grid Columns:**
```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

**Padding:**
```tsx
// Mobile: 4, Desktop: 8
className="p-4 md:p-8"
```

**Text Size:**
```tsx
// Mobile: xl, Desktop: 3xl
className="text-xl lg:text-3xl"
```

**Flex Direction:**
```tsx
// Mobile: column, Desktop: row
className="flex flex-col lg:flex-row"
```

---

## 🎬 Animation Guidelines

### Framer Motion Patterns

**Fade In on Scroll:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* content */}
</motion.div>
```

**Staggered Children:**
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    {/* content */}
  </motion.div>
))}
```

**Exit Animations:**
```tsx
<AnimatePresence mode="wait">
  {condition && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>
```

**Hover Effects:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

---

## 🎨 Color Theme Switching

### Using Color Props
For components with dynamic colors:

```tsx
const getColorClasses = (color: string) => {
  const colors = {
    accent: 'bg-accent-500 text-accent-900 border-accent-600',
    secondary: 'bg-secondary-500 text-secondary-900 border-secondary-600',
    location: 'bg-location-500 text-location-900 border-location-600',
    tech: 'bg-tech-500 text-tech-900 border-tech-600',
    brand: 'bg-brand-500 text-brand-900 border-brand-600',
  }
  return colors[color as keyof typeof colors]
}

<div className={getColorClasses(colorProp)}>
  {/* content */}
</div>
```

---

## 🔧 Performance Optimization

### Lazy Loading Components
```tsx
import dynamic from 'next/dynamic'

const LiveInstallationFeed = dynamic(
  () => import('@/components/homepage/LiveInstallationFeed'),
  { ssr: false } // Disable SSR if component relies on browser APIs
)
```

### Memoization
```tsx
import { memo } from 'react'

const TechnologyCard = memo(({ title, description, icon }: Props) => {
  return (
    // component JSX
  )
})
```

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

---

## 🧪 Testing Components

### Visual Testing Checklist
- [ ] Mobile (< 640px)
- [ ] Tablet (768px)
- [ ] Laptop (1024px)
- [ ] Desktop (1280px+)
- [ ] Dark mode (if applicable)
- [ ] Reduced motion preference
- [ ] High contrast mode
- [ ] Touch interactions
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Mobile (Android)

---

## 📦 Component Dependencies

All components use:
- `framer-motion` for animations
- `lucide-react` for icons
- `tailwindcss` for styling
- `react` hooks (useState, useEffect)

### Installing Dependencies
```bash
npm install framer-motion lucide-react
```

---

## 🐛 Common Issues & Solutions

### Issue: Animations not working
**Solution:** Check Framer Motion is installed and imported correctly
```tsx
import { motion } from 'framer-motion'
```

### Issue: Colors not applying
**Solution:** Verify Tailwind config includes custom colors
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { /* ... */ },
        accent: { /* ... */ },
        // etc.
      }
    }
  }
}
```

### Issue: Build errors with dynamic classes
**Solution:** Use safelist in Tailwind config
```javascript
// tailwind.config.js
module.exports = {
  safelist: [
    'bg-accent-500',
    'bg-secondary-500',
    'bg-location-500',
    'bg-tech-500',
    'bg-brand-500',
  ]
}
```

### Issue: Hydration mismatch
**Solution:** Use client-side rendering for components with random data
```tsx
'use client'
// at top of component file
```

---

## 📚 Further Reading

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Lucide Icons](https://lucide.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Quick Help:**
- Need to change colors? → Check `DESIGN_SYSTEM_REFERENCE.md`
- Need to add animations? → See Framer Motion patterns above
- Need to update content? → Edit component JSX directly
- Need real data? → Connect to API in component functions

**Support:** Create GitHub issue or check `MODERN_REDESIGN_SUMMARY.md` for implementation details.
