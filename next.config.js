/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental optimizeCss as it's causing build issues
  // Tailwind CSS will be properly processed through PostCSS
}

module.exports = nextConfig
