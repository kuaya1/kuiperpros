'use client'

import { motion } from 'framer-motion'
import { Award, MapPin, Star, CheckCircle, Wrench } from 'lucide-react'

interface Technician {
  id: string
  name: string
  photo: string
  certification: string
  experience: string
  location: string
  specialties: string[]
  rating: number
  completedJobs: number
  badge?: string
}

const technicians: Technician[] = [
  {
    id: '1',
    name: 'David Martinez',
    photo: '/technicians/david.jpg',
    certification: 'Master Kuiper Installer',
    experience: '8 years satellite installation',
    location: 'Austin, TX',
    specialties: ['Residential', 'Commercial', 'Rural Properties'],
    rating: 4.9,
    completedJobs: 347,
    badge: 'Top Installer',
  },
  {
    id: '2',
    name: 'Jessica Thompson',
    photo: '/technicians/jessica.jpg',
    certification: 'Certified Kuiper Technician',
    experience: '5 years telecommunications',
    location: 'Denver, CO',
    specialties: ['High-Rise', 'Multi-Unit', 'Network Optimization'],
    rating: 5.0,
    completedJobs: 289,
    badge: 'Customer Favorite',
  },
  {
    id: '3',
    name: 'Robert Chang',
    photo: '/technicians/robert.jpg',
    certification: 'Advanced Kuiper Specialist',
    experience: '10 years network engineering',
    location: 'Phoenix, AZ',
    specialties: ['Enterprise', 'Custom Solutions', 'Troubleshooting'],
    rating: 4.8,
    completedJobs: 412,
  },
  {
    id: '4',
    name: 'Maria Garcia',
    photo: '/technicians/maria.jpg',
    certification: 'Certified Kuiper Technician',
    experience: '6 years installation services',
    location: 'Miami, FL',
    specialties: ['Coastal Properties', 'Hurricane Prep', 'Marine Systems'],
    rating: 4.9,
    completedJobs: 298,
    badge: 'Weather Expert',
  },
]

export default function TechnicianProfiles() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-tech-100 text-tech-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Expert Team
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            Meet Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-tech-600">
              Certified Technicians
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our network of highly-trained professionals ensures your Kuiper installation is done right, the first time
          </p>
        </motion.div>

        {/* Technician Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {technicians.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-brand-200 to-accent-200 overflow-hidden">
                {/* Badge */}
                {tech.badge && (
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {tech.badge}
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                  <Star className="h-4 w-4 fill-secondary-500 text-secondary-500" />
                  <span className="font-bold text-gray-900">{tech.rating}</span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-white text-brand-600 font-semibold px-6 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tech.name}</h3>
                <div className="flex items-center gap-2 text-accent-600 font-semibold text-sm mb-3">
                  <Award className="h-4 w-4" />
                  {tech.certification}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Wrench className="h-4 w-4" />
                    <span>{tech.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{tech.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>{tech.completedJobs} jobs completed</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-brand-200">Certified Technicians</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">4.9</p>
              <p className="text-brand-200">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-brand-200">Background Checked</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
              <p className="text-brand-200">First-Time Success</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-brand-100 mb-4 text-lg">
              All technicians are Amazon Kuiper certified and insured
            </p>
            <a
              href="/technician/apply"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-900 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Award className="h-5 w-5" />
              Become a Technician
            </a>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Our technicians are certified by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Amazon', 'AWS', 'CompTIA', 'OSHA', 'FCC'].map((cert) => (
              <div
                key={cert}
                className="bg-white rounded-xl px-6 py-3 shadow-md border border-gray-100"
              >
                <p className="font-semibold text-gray-700">{cert} Certified</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
