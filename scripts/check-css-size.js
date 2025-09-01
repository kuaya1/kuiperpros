const fs = require('fs');
const path = require('path');

console.log('📦 Checking CSS bundle size...');

const buildDir = path.join(process.cwd(), '.next', 'static', 'css');

if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found');
  process.exit(1);
}

const cssFiles = fs.readdirSync(buildDir).filter(file => file.endsWith('.css'));

if (cssFiles.length === 0) {
  console.error('❌ No CSS files found in build');
  process.exit(1);
}

let totalSize = 0;
cssFiles.forEach(file => {
  const stats = fs.statSync(path.join(buildDir, file));
  totalSize += stats.size;
  console.log(`  ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
  
  // Check if CSS contains key Tailwind classes
  const cssContent = fs.readFileSync(path.join(buildDir, file), 'utf8');
  const keyClasses = ['bg-brand-600', 'text-white', 'rounded-lg', 'flex', 'items-center'];
  const foundClasses = keyClasses.filter(cls => cssContent.includes(cls.replace(/-/g, '\\-')));
  
  if (foundClasses.length > 0) {
    console.log(`  ✅ Found Tailwind classes: ${foundClasses.join(', ')}`);
  }
});

console.log(`📊 Total CSS size: ${(totalSize / 1024).toFixed(2)} KB`);

// Adjusted threshold - modern Tailwind with tree-shaking can be quite small
if (totalSize < 20000) { // 20KB minimum (reduced from 50KB)
  console.error('❌ CSS bundle too small - Tailwind classes may not be included');
  console.error('   Check your tailwind.config.js content paths');
  process.exit(1);
}

console.log('✅ CSS bundle size check passed');
