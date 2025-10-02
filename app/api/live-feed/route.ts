import { NextRequest } from 'next/server'

// Mark this route as dynamic (not statically generated)
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// This creates a Server-Sent Events (SSE) endpoint for real-time updates
// SSE is simpler than WebSocket for one-way server-to-client communication

interface Installation {
  id: string
  location: string
  timeAgo: string
  type: 'residential' | 'commercial'
  timestamp: number
}

const locations = [
  'Austin, TX', 'Denver, CO', 'Phoenix, AZ', 'Portland, OR', 'Miami, FL',
  'Seattle, WA', 'Boston, MA', 'Atlanta, GA', 'Dallas, TX', 'San Diego, CA',
  'Chicago, IL', 'Houston, TX', 'Philadelphia, PA', 'San Antonio, TX',
  'San Francisco, CA', 'Nashville, TN', 'Orlando, FL', 'Charlotte, NC'
]

function generateInstallation(): Installation {
  return {
    id: `install-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    timeAgo: 'Just now',
    type: Math.random() > 0.7 ? 'commercial' : 'residential',
    timestamp: Date.now()
  }
}

export async function GET(request: NextRequest) {
  // Set up Server-Sent Events
  const encoder = new TextEncoder()
  
  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      const connectMsg = `data: ${JSON.stringify({ type: 'connected' })}\n\n`
      controller.enqueue(encoder.encode(connectMsg))
      
      // Send new installation every 8-15 seconds
      const interval = setInterval(() => {
        const installation = generateInstallation()
        const data = `data: ${JSON.stringify({ type: 'installation', data: installation })}\n\n`
        
        try {
          controller.enqueue(encoder.encode(data))
        } catch (error) {
          // Client disconnected
          clearInterval(interval)
        }
      }, 8000 + Math.random() * 7000) // Random between 8-15 seconds
      
      // Clean up on disconnect
      request.signal.addEventListener('abort', () => {
        clearInterval(interval)
        controller.close()
      })
    }
  })
  
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
