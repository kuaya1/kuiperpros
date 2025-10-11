'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LaunchCountdownProps {
  variant?: 'compact' | 'full';
  showCTA?: boolean;
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({ 
  variant = 'full', 
  showCTA = true 
}) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  // Target launch date: January 1, 2026 (Q1 2026)
  const launchDate = new Date('2026-01-01T00:00:00').getTime();

  useEffect(() => {
    setMounted(true);

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  // Prevent hydration mismatch by not rendering time until mounted
  if (!mounted) {
    return (
      <div className={variant === 'compact' ? 'h-20' : 'h-48'}>
        <div className="animate-pulse bg-gray-200 rounded-lg h-full"></div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-brand-600 to-accent-500 rounded-lg p-4 shadow-lg"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Kuiper Launch:</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{timeRemaining.days}</div>
              <div className="text-xs text-white/80">DAYS</div>
            </div>
            <div className="text-white text-xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{String(timeRemaining.hours).padStart(2, '0')}</div>
              <div className="text-xs text-white/80">HRS</div>
            </div>
            <div className="text-white text-xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{String(timeRemaining.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-white/80">MIN</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 rounded-2xl p-8 shadow-2xl border border-accent-500/30 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 bg-accent-500/20 rounded-lg animate-pulse">
            <Rocket className="w-6 h-6 text-accent-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Kuiper Launch Countdown</h3>
        </div>

        {/* Countdown Display */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-white text-center mb-1">
              {timeRemaining.days}
            </div>
            <div className="text-xs text-white/70 text-center uppercase tracking-wider">
              Days
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-white text-center mb-1">
              {String(timeRemaining.hours).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/70 text-center uppercase tracking-wider">
              Hours
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-white text-center mb-1">
              {String(timeRemaining.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/70 text-center uppercase tracking-wider">
              Minutes
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-white text-center mb-1">
              {String(timeRemaining.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/70 text-center uppercase tracking-wider">
              Seconds
            </div>
          </motion.div>
        </div>

        {/* Sub-text */}
        <p className="text-white/80 text-center mb-6 text-sm">
          Until Amazon Kuiper launches and you can get blazing-fast satellite internet
        </p>

        {/* CTA */}
        {showCTA && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#kuiper-waitlist">
              <Button 
                size="lg" 
                className="bg-accent-500 hover:bg-accent-600 text-brand-900 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Secure Installation Slot
              </Button>
            </Link>
            <Link href="#early-adopter-benefits">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Clock className="w-5 h-5 mr-2" />
                See Early Bird Benefits
              </Button>
            </Link>
          </div>
        )}

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff9900]/20 border border-[#ff9900]/40 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9900] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9900]"></span>
            </span>
            <span className="text-white text-sm font-medium">
              10,247 people have already reserved their spot
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LaunchCountdown;
