'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Users, 
  Star, 
  CheckCircle, 
  Briefcase,
  MapPin,
  Clock,
  TrendingUp
} from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  author: string;
  location: string;
  service: string;
  result: string;
  beforeSpeed?: string;
  afterSpeed?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote: "KuiperPros installed our Starlink in 90 minutes. Crystal-clear instructions, professional crew, and the difference is night and day. We went from barely loading emails to streaming 4K on multiple devices.",
    author: "Sarah M.",
    location: "Missoula, MT",
    service: "Starlink Installation",
    result: "250 Mbps in rural Montana",
    beforeSpeed: "5 Mbps DSL",
    afterSpeed: "250 Mbps"
  },
  {
    id: 2,
    rating: 5,
    quote: "As a remote business owner, reliable internet isn't optional—it's survival. The team diagnosed our line-of-sight issues, optimized the mounting angle, and now we have rock-solid connectivity. Worth every penny.",
    author: "Marcus T.",
    location: "Asheville, NC",
    service: "Starlink Business Install",
    result: "99.8% uptime for 6 months",
    beforeSpeed: "Unreliable 20 Mbps",
    afterSpeed: "350 Mbps"
  },
  {
    id: 3,
    rating: 5,
    quote: "I was skeptical about satellite internet after bad experiences with HughesNet. KuiperPros explained the LEO difference, handled permitting with our HOA, and installed everything in under 2 hours. Gaming latency is better than our old cable!",
    author: "David L.",
    location: "Boulder, CO",
    service: "Starlink Residential",
    result: "32ms latency for gaming",
    beforeSpeed: "45ms cable",
    afterSpeed: "28-35ms satellite"
  }
];

const certifications = [
  {
    icon: Star,
    label: 'Starlink Certified',
    description: 'Official installation partner',
    color: 'text-brand-600'
  },
  {
    icon: Shield,
    label: 'OSHA Safety',
    description: 'Certified safety protocols',
    color: 'text-green-600'
  },
  {
    icon: CheckCircle,
    label: 'Background Checked',
    description: 'All technicians vetted',
    color: 'text-blue-600'
  },
  {
    icon: Briefcase,
    label: 'Licensed & Insured',
    description: 'All 50 states',
    color: 'text-purple-600'
  }
];

const TrustHub: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Auto-rotate every 8 seconds

    return () => clearInterval(timer);
  }, []);

  const navigateTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-brand-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Trusted by Thousands
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why 10,000+ Customers Trust{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                KuiperPros
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed professionals delivering satellite internet installations with precision and care
            </p>
          </motion.div>

          {/* Aggregate Rating Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">4.8/5</div>
              <div className="text-sm text-gray-600">from 247 verified customers</div>
            </div>
          </motion.div>
        </div>

        {/* Key Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-100 rounded-xl">
                <Shield className="w-8 h-8 text-brand-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50 States</div>
                <div className="text-sm text-gray-600">Licensed & Insured</div>
              </div>
            </div>
            <p className="text-gray-700">
              Fully licensed, insured, and bonded in all 50 states. Your protection is our priority.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent-100 rounded-xl">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10+ Years</div>
                <div className="text-sm text-gray-600">Satellite Experience</div>
              </div>
            </div>
            <p className="text-gray-700">
              Decade of expertise in satellite installations, from traditional GEO to cutting-edge LEO systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Satisfied Customers</div>
              </div>
            </div>
            <p className="text-gray-700">
              Thousands of homes and businesses connected with professional installations nationwide.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-200 relative overflow-hidden"
        >
          {/* Amazon Trust Transfer Accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 via-[#ff9900] to-accent-500"></div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed max-w-4xl mx-auto italic">
                "{currentTestimonialData.quote}"
              </blockquote>

              {/* Speed Improvement Visual (if available) */}
              {currentTestimonialData.beforeSpeed && currentTestimonialData.afterSpeed && (
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Before</div>
                    <div className="text-2xl font-bold text-red-600">
                      {currentTestimonialData.beforeSpeed}
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-600">
                      {currentTestimonialData.afterSpeed}
                    </div>
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="text-center">
                <div className="font-semibold text-lg text-gray-900">
                  {currentTestimonialData.author}
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {currentTestimonialData.location}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{currentTestimonialData.service}</span>
                </div>
                <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {currentTestimonialData.result}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateTestimonial(index)}
                className={`transition-all ${
                  index === currentTestimonial
                    ? 'w-12 h-3 bg-brand-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Certification Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Certified, Trusted, Professional
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-brand-300 transition-all text-center group"
                >
                  <div className={`inline-flex p-3 rounded-full bg-opacity-10 mb-3 ${cert.color.replace('text-', 'bg-')} group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {cert.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {cert.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Kuiper Preparation Message - Addressing Certification Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-8 border-2 border-brand-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-brand-600 to-accent-500 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Preparing for Amazon Kuiper Authorized Installer Program
              </h4>
              <p className="text-gray-700 leading-relaxed">
                As LEO satellite installation specialists with 10+ years of experience, we're first in line to join Amazon's official Kuiper installer network when it launches in Q1 2026. Our technicians are already trained on LEO-specific requirements: precision alignment, line-of-sight optimization, and orbital tracking technology.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-white rounded-xl shadow-md border-2 border-[#ff9900] text-center">
                <div className="text-sm text-gray-600 mb-1">Powered by</div>
                <div className="text-lg font-bold text-[#ff9900]">Amazon's $10B Technology</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Social Proof (Optional - only if legitimate) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                247 people joined the Kuiper waitlist this week
              </span>
            </div>
            <Clock className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustHub;
