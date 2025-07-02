"use client";

import React, { useState } from "react";

interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle: "primary" | "secondary" | "purple";
  isFeatured?: boolean;
  badge?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  displayPrice: string;
  displayPeriod: string;
  getButtonClasses: (style: string) => string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    period: "Per user/month",
    description: "For personal",
    features: [
      "2 User Seat Only",
      "Basic Activity Feed (7-Day History)",
      "AI Smart Summary (Limited Context)",
      "Basic Email Tracking"
    ],
    buttonText: "Free Access",
    buttonStyle: "secondary"
  },
  {
    id: "growth",
    name: "Growth",
    price: 35,
    period: "Per user/month",
    description: "For growing teams",
    features: [
      "Up To 10 Users",
      "Smart Summary + Pulse Score",
      "Touchpoint Reminder",
      "Outreach Sequence"
    ],
    buttonText: "Get Started",
    buttonStyle: "primary"
  },
  {
    id: "pro",
    name: "Pro",
    price: 55,
    period: "Per month",
    description: "For multi-user teams",
    features: [
      "Unlimited Users",
      "Clara Snapshot",
      "AI Suggestion Engine",
      "Advanced Scheduling Assistant"
    ],
    buttonText: "Get Started",
    buttonStyle: "purple",
    isFeatured: true,
    badge: "Users best choice !"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "More flexible",
    description: "For large teams",
    features: [
      "Fields & Data Model",
      "Various Integrations",
      "Custom Insight AI Training",
      "SLA, Onboarding, And Permissions"
    ],
    buttonText: "Talk to sales",
    buttonStyle: "secondary"
  }
];

// Reusable PricingCard component
const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  displayPrice,
  displayPeriod,
  getButtonClasses,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 relative border border-gray-200 flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <div className="mb-6">
          <span className={`text-4xl font-bold ${plan.id === 'enterprise' ? 'text-purple-400' : 'text-gray-900'}`}>
            {displayPrice}
          </span>
          <span className="text-gray-500 ml-2">{displayPeriod}</span>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-4 text-gray-900">
            {plan.description}
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            className={
              plan.isFeatured
                ? "w-full py-3 px-4 bg-white text-purple-700 border-2 border-purple-500 rounded-lg font-semibold shadow-lg hover:bg-purple-600 hover:text-white hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-all duration-200"
                : "w-full py-3 px-4 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
            }
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (plan: PricingPlan) => {
    if (typeof plan.price === 'string') return plan.price;
    if (plan.price === 0) return '$0';
    
    const price = isAnnual ? Math.floor(plan.price * 0.8) : plan.price; // 20% discount for annual
    return `$${price}`;
  };

  const getPeriod = (plan: PricingPlan) => {
    if (plan.id === 'enterprise') return plan.period;
    return isAnnual ? 'Per user/year' : plan.period;
  };

  const getButtonClasses = (style: string) => {
    switch (style) {
      case "primary":
        return "w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors";
      case "purple":
        return "w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-lg";
      case "secondary":
      default:
        return "w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header with extra top spacing */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <span className="text-black font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            5M+ users and still counting
          </h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8">
            Start free and upgrade anytime as your team and projects grow
          </p>
          
          {/* Monthly/Annual Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium transition-colors ${!isAnnual ? 'text-black' : 'text-purple-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500 ${
                isAnnual ? 'bg-white' : 'bg-white/30'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full shadow-md transition-transform duration-200 ${
                  isAnnual ? 'transform translate-x-7 left-1 bg-purple-500' : 'left-1 bg-white'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`font-medium transition-colors ${isAnnual ? 'text-black' : 'text-purple-200'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards Container with 2px spacing on sides */}
        <div className="px-0.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan) =>
              plan.isFeatured ? (
          <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-2xl relative flex flex-col items-center p-1" key={plan.id}>
            {/* Featured Badge */}
            {plan.badge && (
              <div className="mb-1">
                <span className="text-white text-sm font-semibold shadow-lg">
            {plan.badge}
                </span>
              </div>
            )}
            <PricingCard
              plan={plan}
              displayPrice={getPrice(plan)}
              displayPeriod={getPeriod(plan)}
              getButtonClasses={getButtonClasses}
            />
          </div>
              ) : (
          <PricingCard
            key={plan.id}
            plan={plan}
            displayPrice={getPrice(plan)}
            displayPeriod={getPeriod(plan)}
            getButtonClasses={getButtonClasses}
          />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
