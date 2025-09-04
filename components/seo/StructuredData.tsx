interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Article' | 'Organization' | 'ProfessionalService' | 'HowTo' | 'FAQPage' | 'AggregateRating' | 'Offer'
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

      case 'ProfessionalService':
        return {
          ...baseData,
          '@type': 'ProfessionalService',
          name: 'KuiperPros - Amazon Kuiper Installation Service',
          description: 'Professional Amazon Kuiper satellite internet installation and setup services',
          provider: {
            '@type': 'Organization',
            name: 'KuiperPros',
            url: 'https://kuiperpros.com',
            telephone: '+1-800-KUIPER-1'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceType: [
            'Satellite Internet Installation',
            'Kuiper Terminal Setup',
            'Dish Mounting and Alignment',
            'Network Configuration'
          ],
          offers: {
            '@type': 'Offer',
            name: 'Kuiper Installation Service',
            description: 'Professional Kuiper satellite installation with 2-hour average completion time',
            priceRange: '$199-$599',
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString(),
            seller: {
              '@type': 'Organization',
              name: 'KuiperPros'
            }
          },
          ...data,
        }

      case 'HowTo':
        return {
          ...baseData,
          '@type': 'HowTo',
          name: 'How to Install Amazon Kuiper Satellite Internet',
          description: 'Complete step-by-step guide for professional Kuiper installation',
          totalTime: 'PT2H',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            value: '399'
          },
          supply: [
            {
              '@type': 'HowToSupply',
              name: 'Kuiper Terminal'
            },
            {
              '@type': 'HowToSupply',
              name: 'Mounting Hardware'
            },
            {
              '@type': 'HowToSupply',
              name: 'Weatherproof Cables'
            }
          ],
          tool: [
            {
              '@type': 'HowToTool',
              name: 'Professional Drill'
            },
            {
              '@type': 'HowToTool',
              name: 'Signal Meter'
            },
            {
              '@type': 'HowToTool',
              name: 'Weatherproof Sealant'
            }
          ],
          step: [
            {
              '@type': 'HowToStep',
              name: 'Site Survey and Planning',
              text: 'Certified technician performs site survey to identify optimal dish placement with clear southern sky view',
              url: 'https://kuiperpros.com/installation-guide#site-survey'
            },
            {
              '@type': 'HowToStep',
              name: 'Dish Mounting',
              text: 'Mount the Kuiper dish using appropriate hardware for roof, wall, or ground installation',
              url: 'https://kuiperpros.com/installation-guide#mounting'
            },
            {
              '@type': 'HowToStep',
              name: 'Cable Routing',
              text: 'Run weatherproof cabling from dish to interior location with professional sealing',
              url: 'https://kuiperpros.com/installation-guide#cabling'
            },
            {
              '@type': 'HowToStep',
              name: 'System Activation',
              text: 'Connect terminal, activate service, and verify optimal signal strength and speeds',
              url: 'https://kuiperpros.com/installation-guide#activation'
            }
          ],
          ...data,
        }

      case 'FAQPage':
        return {
          ...baseData,
          '@type': 'FAQPage',
          mainEntity: data.questions?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || [],
          ...data,
        }

      case 'AggregateRating':
        return {
          ...baseData,
          '@type': 'AggregateRating',
          itemReviewed: {
            '@type': 'Service',
            name: 'KuiperPros Installation Service'
          },
          ratingValue: data.ratingValue || '4.8',
          reviewCount: data.reviewCount || '247',
          bestRating: '5',
          worstRating: '1',
          ...data,
        }

      case 'Offer':
        return {
          ...baseData,
          '@type': 'Offer',
          name: 'Professional Kuiper Installation',
          description: 'Expert Amazon Kuiper satellite installation with certified technicians',
          price: data.price || '299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'KuiperPros'
          },
          validFrom: new Date().toISOString(),
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
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
