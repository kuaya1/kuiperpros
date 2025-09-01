import { prisma } from "./prisma"

export async function findAvailableTechnicians(
  zipCode: string,
  latitude?: number,
  longitude?: number
) {
  // First, find technicians who service this zip code
  const techniciansByZip = await prisma.technician.findMany({
    where: {
      status: "approved",
      serviceAreas: {
        some: {
          zipCode: zipCode
        }
      }
    },
    include: {
      user: true,
      serviceAreas: true
    }
  })
  
  if (techniciansByZip.length > 0) {
    return techniciansByZip
  }
  
  // If no exact zip match and we have coordinates, find nearby technicians
  if (latitude && longitude) {
    // This would use PostGIS for geographic queries
    // For now, we'll use a simple approximation
    const nearbyTechnicians = await prisma.$queryRaw`
      SELECT t.*, u.email
      FROM technicians t
      JOIN users u ON t.user_id = u.id
      WHERE t.status = 'approved'
        AND ST_DWithin(
          t.location::geography,
          ST_MakePoint(${longitude}, ${latitude})::geography,
          t.service_radius_miles * 1609.34  -- Convert miles to meters
        )
      ORDER BY ST_Distance(
        t.location::geography,
        ST_MakePoint(${longitude}, ${latitude})::geography
      )
      LIMIT 10
    `
    
    return nearbyTechnicians as any[]
  }
  
  // Fallback: find technicians in the same state
  const state = await getStateFromZipCode(zipCode)
  if (state) {
    return await prisma.technician.findMany({
      where: {
        status: "approved",
        state: state
      },
      include: {
        user: true
      },
      take: 5
    })
  }
  
  return []
}

async function getStateFromZipCode(zipCode: string): Promise<string | null> {
  // This would typically use a zip code database or API
  // For now, using a simple mapping
  const zipPrefix = zipCode.substring(0, 3)
  const stateMap: Record<string, string> = {
    "100": "NY", "101": "NY", "102": "NY", // New York
    "900": "CA", "901": "CA", "902": "CA", // California
    "331": "FL", "332": "FL", "333": "FL", // Florida
    // Add more mappings as needed
  }
  
  return stateMap[zipPrefix] || null
}