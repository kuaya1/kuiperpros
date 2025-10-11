'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Loader, Rocket, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface LaunchMilestone {
  id: string;
  label: string;
  status: 'completed' | 'in-progress' | 'pending';
  completedDate?: string;
}

const milestones: LaunchMilestone[] = [
  {
    id: 'fcc-approval',
    label: 'FCC Approval Granted',
    status: 'completed',
    completedDate: 'July 2024'
  },
  {
    id: 'satellite-manufacturing',
    label: 'Satellite Manufacturing Complete',
    status: 'completed',
    completedDate: 'September 2025'
  },
  {
    id: 'launch-vehicles',
    label: 'Launch Vehicles Prepared',
    status: 'in-progress'
  },
  {
    id: 'first-activations',
    label: 'First Customer Activations',
    status: 'pending'
  },
  {
    id: 'your-installation',
    label: 'Your Installation Ready',
    status: 'pending'
  }
];

interface LaunchStatusTrackerProps {
  variant?: 'sidebar' | 'section';
}

const LaunchStatusTracker: React.FC<LaunchStatusTrackerProps> = ({ variant = 'sidebar' }) => {
  const getStatusIcon = (status: LaunchMilestone['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Loader className="w-5 h-5 text-blue-500" />
          </motion.div>
        );
      case 'pending':
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  if (variant === 'sidebar') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-24"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-brand-100 rounded-lg">
            <Rocket className="w-5 h-5 text-brand-600" />
          </div>
          <h3 className="font-bold text-lg text-gray-900">Kuiper Launch Status</h3>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="font-semibold text-brand-600">40%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="bg-gradient-to-r from-brand-600 to-accent-500 h-full rounded-full"
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-3 mb-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 mt-0.5">{getStatusIcon(milestone.status)}</div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-sm font-medium ${
                    milestone.status === 'completed'
                      ? 'text-gray-900'
                      : milestone.status === 'in-progress'
                      ? 'text-blue-600'
                      : 'text-gray-400'
                  }`}
                >
                  {milestone.label}
                </div>
                {milestone.completedDate && (
                  <div className="text-xs text-gray-500 mt-0.5">{milestone.completedDate}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link href="#kuiper-waitlist">
          <Button
            size="sm"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white shadow-md group"
          >
            <Bell className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Stay Updated
          </Button>
        </Link>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed">
            Get real-time email notifications as we complete each launch milestone
          </p>
        </div>
      </motion.div>
    );
  }

  // Section variant (for mobile/tablet or full-width display)
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Launch Progress
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Kuiper Launch Status
            </h2>
            <p className="text-gray-600">Track Amazon's progress toward Q1 2026 launch</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-gray-600 font-medium">Overall Progress</span>
              <span className="font-bold text-brand-600 text-lg">40%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="bg-gradient-to-r from-brand-600 to-accent-500 h-full rounded-full shadow-inner"
              />
            </div>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-xl border-2 ${
                  milestone.status === 'completed'
                    ? 'bg-green-50 border-green-200'
                    : milestone.status === 'in-progress'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">{getStatusIcon(milestone.status)}</div>
                  <div className="flex-1">
                    <div
                      className={`font-semibold ${
                        milestone.status === 'completed'
                          ? 'text-green-900'
                          : milestone.status === 'in-progress'
                          ? 'text-blue-900'
                          : 'text-gray-500'
                      }`}
                    >
                      {milestone.label}
                    </div>
                    {milestone.completedDate && (
                      <div className="text-xs text-gray-600 mt-1">{milestone.completedDate}</div>
                    )}
                    {milestone.status === 'in-progress' && (
                      <div className="text-xs text-blue-600 mt-1 font-medium">In Progress</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="#kuiper-waitlist">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white shadow-lg group">
                <Bell className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get Launch Notifications
              </Button>
            </Link>
            <p className="text-sm text-gray-600 mt-3">
              We'll email you as each milestone is completed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchStatusTracker;
