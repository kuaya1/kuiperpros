'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  DollarSign, 
  Calendar, 
  Headphones, 
  Zap, 
  Users, 
  Crown,
  Star,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface TierBenefit {
  icon: React.ElementType;
  label: string;
}

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  savings: string;
  deadline: string;
  capacity: {
    total: number;
    claimed: number;
  };
  benefits: TierBenefit[];
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

const tiers: PricingTier[] = [
  {
    id: 'founder',
    name: 'Founder',
    badge: 'BEST VALUE',
    price: '$100 OFF',
    savings: 'Save $100 + Lifetime Benefits',
    deadline: '30 Days Remaining',
    capacity: {
      total: 100,
      claimed: 78
    },
    benefits: [
      { icon: DollarSign, label: '$100 installation discount' },
      { icon: Headphones, label: 'Lifetime priority support hotline' },
      { icon: Calendar, label: 'Choose any installation date' },
      { icon: Shield, label: 'Extended equipment warranty' },
      { icon: Crown, label: 'Founder badge + exclusive updates' }
    ],
    ctaText: 'Claim Founder Status',
    ctaLink: '#kuiper-waitlist',
    featured: true
  },
  {
    id: 'pioneer',
    name: 'Pioneer',
    price: '$50 OFF',
    savings: 'Save $50 + Priority Access',
    deadline: '90 Days Remaining',
    capacity: {
      total: 500,
      claimed: 234
    },
    benefits: [
      { icon: DollarSign, label: '$50 installation discount' },
      { icon: Calendar, label: 'Q1 2026 priority scheduling' },
      { icon: Headphones, label: 'Priority support for 1 year' },
      { icon: Star, label: 'Early equipment upgrades' }
    ],
    ctaText: 'Join Pioneer Tier',
    ctaLink: '#kuiper-waitlist'
  },
  {
    id: 'early-access',
    name: 'Early Access',
    price: 'Price Lock',
    savings: 'Pre-Launch Pricing Protection',
    deadline: 'Until Q1 2026',
    capacity: {
      total: -1, // Unlimited
      claimed: 9935
    },
    benefits: [
      { icon: DollarSign, label: 'Lock in today\'s installation rate' },
      { icon: Calendar, label: 'Launch week installation access' },
      { icon: Zap, label: 'Skip the general waitlist' }
    ],
    ctaText: 'Reserve Early Access',
    ctaLink: '#kuiper-waitlist'
  }
];

const EarlyAdopterBenefits: React.FC = () => {
  return (
    <section id="early-adopter-benefits" className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-500/30">
            <Award className="w-4 h-4" />
            Limited Time Opportunity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Early Adopter Advantage
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join the space-age internet revolution. Lock in exclusive benefits before Kuiper launches.
          </p>
        </motion.div>

        {/* Why Be First Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Pre-Register Now?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-4 bg-brand-500/30 rounded-xl mb-4">
                <TrendingUp className="w-8 h-8 text-accent-300" />
              </div>
              <h4 className="font-bold text-white mb-2">Skip the Rush</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                When Kuiper launches, installation demand will surge. Pre-registered customers get scheduled first.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-brand-500/30 rounded-xl mb-4">
                <DollarSign className="w-8 h-8 text-accent-300" />
              </div>
              <h4 className="font-bold text-white mb-2">Price Protection</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Lock in today's installation rate. Protect against future price increases as demand grows.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-brand-500/30 rounded-xl mb-4">
                <Crown className="w-8 h-8 text-accent-300" />
              </div>
              <h4 className="font-bold text-white mb-2">Exclusive Access</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Join the Kuiper Pioneers community. Get insider updates, early equipment access, direct tech support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const claimedPercentage = tier.capacity.total > 0 
              ? (tier.capacity.claimed / tier.capacity.total) * 100 
              : 0;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${tier.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                <div
                  className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 h-full flex flex-col ${
                    tier.featured
                      ? 'border-[#ff9900] shadow-2xl shadow-[#ff9900]/20'
                      : 'border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#ff9900] to-[#ffb347] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-brand-600 mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-600 mb-3">{tier.savings}</div>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {tier.deadline}
                    </div>
                  </div>

                  {/* Capacity Progress Bar (if applicable) */}
                  {tier.capacity.total > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-gray-600 font-medium">
                          {tier.capacity.claimed}/{tier.capacity.total} claimed
                        </span>
                        <span className={`font-bold ${claimedPercentage > 75 ? 'text-red-600' : 'text-brand-600'}`}>
                          {tier.capacity.total - tier.capacity.claimed} left
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${claimedPercentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            claimedPercentage > 75
                              ? 'bg-gradient-to-r from-red-500 to-orange-500'
                              : 'bg-gradient-to-r from-brand-600 to-accent-500'
                          }`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Benefits List */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => {
                        const IconComponent = benefit.icon;
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 p-1 bg-brand-100 rounded-lg">
                              <IconComponent className="w-4 h-4 text-brand-600" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {benefit.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={tier.ctaLink}>
                    <Button
                      size="lg"
                      className={`w-full shadow-lg transition-all ${
                        tier.featured
                          ? 'bg-gradient-to-r from-[#ff9900] to-[#ffb347] hover:shadow-xl hover:scale-105 text-white'
                          : 'bg-brand-600 hover:bg-brand-700 text-white'
                      }`}
                    >
                      {tier.ctaText}
                    </Button>
                  </Link>
                </div>

                {/* Urgency Indicator */}
                {tier.capacity.total > 0 && claimedPercentage > 75 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      FILLING FAST
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Social Proof / Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
            <Users className="w-6 h-6 text-accent-300" />
            <div className="text-left">
              <div className="text-white font-bold text-lg">10,247 Spots Reserved</div>
              <div className="text-white/70 text-sm">Join thousands of future Kuiper customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
