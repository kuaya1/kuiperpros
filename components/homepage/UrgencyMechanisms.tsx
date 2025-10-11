'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, TrendingUp, Users, MapPin, Clock } from 'lucide-react';

interface RecentActivity {
  id: string;
  name: string;
  location: string;
  action: string;
  timestamp: string;
}

// Simulated recent activities (in production, would come from backend)
const generateRecentActivities = (): RecentActivity[] => {
  const names = ['John', 'Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'James', 'Ashley'];
  const locations = ['Seattle', 'Austin', 'Denver', 'Portland', 'Phoenix', 'Boston', 'Atlanta', 'Miami'];
  const actions = ['reserved a slot', 'joined the waitlist', 'upgraded to Pioneer tier'];
  
  return Array.from({ length: 5 }, (_, i) => ({
    id: `activity-${i}`,
    name: names[Math.floor(Math.random() * names.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    timestamp: `${Math.floor(Math.random() * 10) + 1} min ago`
  }));
};

interface UrgencyMechanismsProps {
  variant?: 'limited-slots' | 'live-activity' | 'early-bird-banner' | 'all';
  userState?: string; // For personalized limited slots messaging
}

export const LimitedSlotsAlert: React.FC<{ userState?: string }> = ({ userState = 'California' }) => {
  const slotsRemaining = Math.floor(Math.random() * 50) + 30; // Random 30-80

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-red-500 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg mb-1">⚠️ High Demand Alert</h4>
          <p className="text-gray-700 mb-3">
            Only <span className="font-bold text-red-600">{slotsRemaining} priority installation slots</span> remaining in {userState}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 20) + 10} people are viewing this page right now</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(slotsRemaining / 100) * 100}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="bg-gradient-to-r from-red-500 to-orange-500 h-full rounded-full"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">Slots filling fast - reserve yours before they're gone</p>
        </div>
      </div>
    </motion.div>
  );
};

export const LiveActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<RecentActivity[]>(generateRecentActivities());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [activities.length]);

  const currentActivity = activities[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-md"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">LIVE ACTIVITY</span>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentActivity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-600 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {currentActivity.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              <span className="font-semibold">{currentActivity.name}</span> in{' '}
              <span className="font-medium text-brand-600">{currentActivity.location}</span> just {currentActivity.action}
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              {currentActivity.timestamp}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          247 signups this week
        </span>
        <span className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Demand increasing
        </span>
      </div>
    </motion.div>
  );
};

export const EarlyBirdBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 7,
    minutes: 23
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#ff9900] to-[#ffb347] rounded-xl p-6 shadow-lg text-white relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5" />
          <span className="font-bold text-sm uppercase tracking-wider">Early Bird Special</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-2">Lock in $299 Installation Rate</h3>
        <p className="text-white/90 text-sm mb-4">
          After November 15, pricing increases to $399. Save $100 by reserving now.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-xs text-white/80 uppercase">Days</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs text-white/80 uppercase">Hours</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs text-white/80 uppercase">Minutes</div>
          </div>
        </div>

        <a href="#kuiper-waitlist">
          <button className="w-full bg-white text-[#ff9900] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all shadow-md">
            Lock in Pricing Now →
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const UrgencyMechanisms: React.FC<UrgencyMechanismsProps> = ({ variant = 'all', userState }) => {
  if (variant === 'limited-slots') {
    return <LimitedSlotsAlert userState={userState} />;
  }

  if (variant === 'live-activity') {
    return <LiveActivityFeed />;
  }

  if (variant === 'early-bird-banner') {
    return <EarlyBirdBanner />;
  }

  // 'all' variant - display all mechanisms in a grid
  return (
    <div className="space-y-6">
      <EarlyBirdBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LimitedSlotsAlert userState={userState} />
        <LiveActivityFeed />
      </div>
    </div>
  );
};

export default UrgencyMechanisms;
