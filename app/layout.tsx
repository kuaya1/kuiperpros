// Build-time validation
if (process.env.NODE_ENV === 'production') {
  console.log('🚀 Running in production mode');
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Ensure this import is present
import { Toaster } from 'react-hot-toast'
import Analytics from '@/components/seo/Analytics'
import StructuredData from '@/components/seo/StructuredData'
import ExitIntentPopup from '@/components/lead-capture/ExitIntentPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kuiperpros.com'),
  title: 'Certified Amazon Kuiper Installation | Professional Satellite Internet Setup | KuiperPros',
  description: 'Expert Kuiper satellite installation from $199. Certified technicians, same-week service, 2-hour average install time. Get connected to Amazon\'s high-speed internet. Free quote in 60 seconds.',
  keywords: 'Amazon Kuiper installation, professional kuiper installer, certified kuiper technician, kuiper satellite dish installation, project kuiper setup, kuiper vs starlink installation, kuiper internet installation cost, kuiper professional installation',
  authors: [{ name: 'KuiperPros Team' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
  },
  openGraph: {
    title: 'KuiperPros - Professional Amazon Kuiper Installation',
    description: 'Professional Amazon Kuiper satellite internet installation nationwide',
    url: 'https://kuiperpros.com',
    siteName: 'KuiperPros',
    images: [
      {
        url: 'https://kuiperpros.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KuiperPros - Professional Kuiper Installation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KuiperPros - Professional Amazon Kuiper Installation',
    description: 'Professional Amazon Kuiper satellite internet installation nationwide',
    images: ['https://kuiperpros.com/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Web app manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect directives */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://api.kuiperpros.com" />
        <StructuredData
          type="Organization"
          data={{
            name: 'KuiperPros',
            description: 'Professional Amazon Kuiper satellite internet installation services',
            url: 'https://kuiperpros.com',
            telephone: '+1-800-KUIPER-1',
            email: 'kuiperpros@gmail.com',
          }}
        />
        <Analytics />
      </head>
      <body className={inter.className}>
        {children}
        <ExitIntentPopup />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}