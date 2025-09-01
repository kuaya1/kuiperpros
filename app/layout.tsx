// Build-time validation
if (process.env.NODE_ENV === 'production') {
  console.log('🚀 Running in production mode');
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Ensure this import is present
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KuiperPros - Professional Amazon Kuiper Satellite Internet Installation',
  description: 'Connect with certified technicians for professional Amazon Kuiper satellite internet installation across the USA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}