const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Tailwind configuration...');

// Check if tailwind.config.js exists
const configPath = path.join(process.cwd(), 'tailwind.config.js');
if (!fs.existsSync(configPath)) {
  console.error('❌ tailwind.config.js not found!');
  process.exit(1);
}

// Check if globals.css exists and contains Tailwind directives
const globalsPath = path.join(process.cwd(), 'app', 'globals.css');
if (!fs.existsSync(globalsPath)) {
  console.error('❌ app/globals.css not found!');
  process.exit(1);
}

const globalsContent = fs.readFileSync(globalsPath, 'utf8');
const requiredDirectives = ['@tailwind base', '@tailwind components', '@tailwind utilities'];

for (const directive of requiredDirectives) {
  if (!globalsContent.includes(directive)) {
    console.error(`❌ Missing directive: ${directive}`);
    process.exit(1);
  }
}

console.log('✅ Tailwind configuration valid');
