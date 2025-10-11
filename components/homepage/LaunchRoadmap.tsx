'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Rocket, CheckCircle, MapPin } from 'lucide-react';

interface RoadmapPhase {
  id: string;
  label: string;
  date: string;
  description: string;
  icon: React.ElementType;
  status: 'completed' | 'current' | 'upcoming';
}

const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'pre-register',
    label: 'Pre-Registration',
    date: 'Now - Q1 2026',
    description: 'Secure your priority installation slot and lock in early adopter pricing',
    icon: Users,
    status: 'current'
  },
  {
    id: 'launch',
    label: 'Service Launches',
    date: 'January 2026',
    description: 'Kuiper goes live! Pre-registered customers begin receiving installation scheduling',
    icon: Rocket,
    status: 'upcoming'
  },
  {
    id: 'priority-installs',
    label: 'Priority Installations',
    date: 'Jan-Feb 2026',
    description: 'Early adopters and pre-registered customers get installed first',
    icon: CheckCircle,
    status: 'upcoming'
  },
  {
    id: 'general-availability',
    label: 'General Availability',
    date: 'March 2026',
    description: 'Service opens to all customers. Installation capacity reaches full scale',
    icon: MapPin,
    status: 'upcoming'
  }
];

const LaunchRoadmap: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-brand-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Launch Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to{' '}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Kuiper Internet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what happens from today through launch and beyond
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-brand-200 via-brand-400 to-gray-300">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-brand-600 to-accent-500"
              />
            </div>

            {/* Timeline Phases */}
            <div className="grid grid-cols-4 gap-8 relative">
              {roadmapPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                const isActive = phase.status === 'current';
                const isCompleted = phase.status === 'completed';

                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Node */}
                    <div className="flex justify-center mb-8">
                      <div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                          isActive
                            ? 'bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg shadow-brand-300'
                            : isCompleted
                            ? 'bg-green-500 shadow-lg shadow-green-300'
                            : 'bg-gray-300'
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                        {isActive && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border-4 border-brand-400 opacity-50"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`bg-white rounded-xl p-6 shadow-md border-2 ${
                        isActive
                          ? 'border-brand-500 shadow-lg shadow-brand-100'
                          : 'border-gray-200'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                          <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            YOU ARE HERE
                          </div>
                        </div>
                      )}

                      <div className="text-center">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {phase.label}
                        </h3>
                        <div className="text-sm font-semibold text-brand-600 mb-3">
                          {phase.date}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isActive = phase.status === 'current';

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-4">
                  {/* Icon Column */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg'
                          : 'bg-gray-300'
                      }`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {index < roadmapPhases.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 pb-8">
                    {isActive && (
                      <div className="inline-flex items-center gap-1 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        YOU ARE HERE
                      </div>
                    )}
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {phase.label}
                    </h3>
                    <div className="text-sm font-semibold text-brand-600 mb-2">
                      {phase.date}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Post-Launch Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-8 border border-brand-200"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Pre-Register Now?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When Kuiper launches in January 2026, installation demand will surge. Pre-registered customers get <span className="font-semibold text-brand-600">priority scheduling</span>, meaning you'll be installed in <span className="font-semibold">January-February</span> while general availability customers wait until <span className="font-semibold">March or later</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-brand-200">
                <div className="font-bold text-brand-600 mb-1">Pre-Registered</div>
                <div className="text-gray-600">Installed Jan-Feb 2026</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-gray-500 mb-1">General Public</div>
                <div className="text-gray-600">Wait until March+</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-bold text-green-600 mb-1">Time Saved</div>
                <div className="text-gray-600">2+ months faster</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchRoadmap;
