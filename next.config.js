/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Ensure CSS is included in production
  experimental: {
    optimizeCss: false, // Disable CSS optimization temporarily
  },
  
  // Add webpack config to ensure Tailwind processing
  webpack: (config, { dev, isServer }) => {
    // Log build info for debugging
    if (!dev && !isServer) {
      console.log('🏗️  Building for production...');
    }
    return config;
  },
}

module.exports = nextConfig
