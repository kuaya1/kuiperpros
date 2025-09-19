'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

interface AnalyticsProps {
  googleAnalyticsId?: string
  microsoftClarityId?: string
}

export default function Analytics({ 
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  microsoftClarityId = 'xxxxxxxxx' // Replace with actual Clarity ID
}: AnalyticsProps) {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />

      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId={googleAnalyticsId} />

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${microsoftClarityId}");
        `}
      </Script>

      {/* Custom event tracking */}
      <Script id="custom-analytics" strategy="afterInteractive">
        {`
          // Custom event tracking functions
          window.trackQuoteRequest = function(location) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'quote_request', {
                'custom_parameter': location,
                'event_category': 'engagement',
                'event_label': 'Quote Form'
              });
            }
            if (typeof clarity !== 'undefined') {
              clarity('event', 'quote_request');
            }
          };

          window.trackTechnicianSignup = function() {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'technician_signup', {
                'event_category': 'engagement',
                'event_label': 'Technician Application'
              });
            }
            if (typeof clarity !== 'undefined') {
              clarity('event', 'technician_signup');
            }
          };

          window.trackNewsletterSignup = function(source) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'newsletter_signup', {
                'custom_parameter': source,
                'event_category': 'engagement',
                'event_label': 'Newsletter'
              });
            }
            if (typeof clarity !== 'undefined') {
              clarity('event', 'newsletter_signup');
            }
          };
        `}
      </Script>
    </>
  )
}
