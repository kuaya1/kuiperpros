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
  title: 'KuiperPros - Professional Amazon Kuiper Satellite Internet Installation',
  description: 'Connect with certified technicians for professional Amazon Kuiper satellite internet installation across the USA. Fast, reliable, and professional service nationwide.',
  keywords: 'Amazon Kuiper, satellite internet, installation, technicians, nationwide service, internet installation',
  authors: [{ name: 'KuiperPros Team' }],
  robots: 'index, follow',
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
        <StructuredData 
          type="Organization"
          data={{
            name: 'KuiperPros',
            description: 'Professional Amazon Kuiper satellite internet installation services',
            url: 'https://kuiperpros.com',
            telephone: '+1-800-KUIPER-1',
            email: 'info@kuiperpros.com',
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