interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Article' | 'Organization'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    }

    switch (type) {
      case 'LocalBusiness':
        return {
          ...baseData,
          '@type': 'LocalBusiness',
          name: 'KuiperPros',
          description: 'Professional Amazon Kuiper satellite internet installation services',
          url: 'https://kuiperpros.com',
          telephone: '+1-800-KUIPER-1',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressRegion: 'Nationwide',
          },
          serviceArea: {
            '@type': 'Country',
            name: 'United States',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Kuiper Installation Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Kuiper Satellite Installation',
                  description: 'Professional installation of Amazon Kuiper satellite internet equipment',
                },
              },
            ],
          },
          ...data,
        }

      case 'Service':
        return {
          ...baseData,
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: 'KuiperPros',
            url: 'https://kuiperpros.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States',
          },
          ...data,
        }

      case 'Article':
        return {
          ...baseData,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'KuiperPros',
            url: 'https://kuiperpros.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://kuiperpros.com/logo.png',
            },
          },
          ...data,
        }

      case 'Organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'KuiperPros',
          url: 'https://kuiperpros.com',
          logo: 'https://kuiperpros.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-800-KUIPER-1',
            contactType: 'customer service',
            areaServed: 'US',
          },
          sameAs: [
            'https://facebook.com/kuiperpros',
            'https://twitter.com/kuiperpros',
            'https://linkedin.com/company/kuiperpros',
          ],
          ...data,
        }

      default:
        return baseData
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData()),
      }}
    />
  )
}
