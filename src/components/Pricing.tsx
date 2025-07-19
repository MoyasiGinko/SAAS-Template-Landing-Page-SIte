"use client";

import React, { useState } from "react";
import {
  Check,
  Star,
  Zap,
  Crown,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";

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
}

// Mock localization and data
const mockTranslations = {
  "pricing.title": "Pricing",
  "pricing.subtitle": "Choose the perfect plan for your team",
  "pricing.description":
    "Start free and scale as you grow. All plans include our core features with advanced options for growing teams.",
  "pricing.monthly": "Monthly",
  "pricing.annual": "Annual",
  "pricing.yearlyPeriod": "/year",
  "pricing.save20": "Save 20%",
  "pricing.switchToMonthly": "Switch to monthly",
  "pricing.switchToAnnual": "Switch to annual",
  "pricing.plans": [
    {
      id: "starter",
      name: "Starter",
      price: 0,
      period: "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1GB storage",
        "Standard templates",
      ],
      buttonText: "Get Started Free",
      buttonStyle: "secondary",
    },
    {
      id: "professional",
      name: "Professional",
      price: 29,
      period: "/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Premium templates",
        "Team collaboration",
        "API access",
      ],
      buttonText: "Get Started",
      buttonStyle: "primary",
    },
    {
      id: "business",
      name: "Business",
      price: 79,
      period: "/month",
      description: "For scaling organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Advanced security",
        "Custom integrations",
        "200GB storage",
        "White-label options",
        "Advanced permissions",
        "SLA guarantee",
        "Phone support",
      ],
      buttonText: "Get Started",
      buttonStyle: "primary",
      isFeatured: true,
      badge: "Most Popular",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Business",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom development",
        "Enterprise security",
        "Compliance tools",
        "Training & onboarding",
        "Multi-region deployment",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "purple",
    },
  ],
};

const useLocalization = () => ({
  t: (key) => mockTranslations[key] || key,
});

const getPlanIcon = (planId: string) => {
  switch (planId) {
    case "starter":
      return <Zap className="w-6 h-6" />;
    case "professional":
      return <Star className="w-6 h-6" />;
    case "business":
      return <Crown className="w-6 h-6" />;
    case "enterprise":
      return <Shield className="w-6 h-6" />;
    default:
      return <Zap className="w-6 h-6" />;
  }
};

export default function Pricing() {
  const { t } = useLocalization();
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingPlans: PricingPlan[] = t(
    "pricing.plans"
  ) as unknown as PricingPlan[];

  // Enhanced PricingCard component with special design for featured card
  const PricingCard: React.FC<PricingCardProps> = ({
    plan,
    displayPrice,
    displayPeriod,
  }) => {
    if (plan.isFeatured) {
      // Special design for the Most Popular card
      return (
        <div className="relative transform scale-105 z-10">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-3xl blur-xl animate-pulse"></div>

          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-3xl opacity-20 animate-pulse"></div>
          <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 rounded-3xl backdrop-blur-xl"></div>

          {/* Floating badge with animation */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl border border-violet-400/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>POPULAR</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-10 flex flex-col h-full">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-20">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-2xl"></div>
            </div>
            <div className="absolute bottom-20 left-6 opacity-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl"></div>
            </div>

            {/* Plan Header with enhanced styling */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl blur-md opacity-50"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl border border-violet-400/30">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text">
                  {plan.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                  <span className="text-violet-300 text-sm font-medium">
                    Premium Choice
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Price Display */}
            <div className="mb-8 relative z-10">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black text-transparent bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text">
                  {displayPrice}
                </span>
                <span className="text-gray-300 text-xl font-medium">
                  {displayPeriod}
                </span>
              </div>
              {isAnnual && typeof plan.price === "number" && plan.price > 0 && (
                <div className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">
                    Save ${Math.floor(plan.price * 0.2 * 12)}/year
                  </span>
                </div>
              )}
            </div>

            {/* Description with gradient text */}
            <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium relative z-10">
              {plan.description}
            </p>

            {/* Enhanced Features List */}
            <div className="mb-10 flex-grow relative z-10">
              <div className="text-violet-300 font-bold mb-4 text-sm uppercase tracking-wider">
                Everything Included:
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg border border-violet-400/30">
                      <Check className="w-3 h-3 text-white font-bold" />
                    </div>
                    <span className="text-gray-200 leading-relaxed font-medium group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced CTA Button */}
            <div className="mt-auto relative z-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <button className="relative w-full py-5 px-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-bold text-lg shadow-2xl border border-violet-400/30 hover:from-violet-500 hover:to-fuchsia-500 transform hover:scale-105 transition-all duration-300 hover:shadow-violet-500/25">
                  <div className="flex items-center justify-center gap-3">
                    {plan.buttonText}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Regular card design for non-featured plans
    const getCardStyles = () => {
      return "bg-gray-900/30 border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-800/40 backdrop-blur-sm";
    };

    const getButtonStyles = () => {
      if (plan.id === "enterprise") {
        return "w-full py-4 px-6 bg-gradient-to-r from-purple-600/80 to-purple-700/80 text-white rounded-xl font-semibold border border-purple-500/30 hover:from-purple-500/90 hover:to-purple-600/90 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm";
      }
      return "w-full py-4 px-6 bg-gray-800/50 text-gray-200 border border-gray-600/40 rounded-xl font-semibold hover:bg-gray-700/60 hover:text-white hover:border-gray-500/60 transition-all duration-200 backdrop-blur-sm";
    };

    const getPriceColor = () => {
      if (plan.id === "enterprise") return "text-purple-300";
      return "text-white";
    };

    return (
      <div
        className={`${getCardStyles()} rounded-2xl overflow-hidden transition-all duration-300 relative flex flex-col h-full group`}
      >
        <div className="p-8 flex flex-col flex-1">
          {/* Plan Header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                plan.id === "enterprise"
                  ? "bg-gradient-to-br from-purple-600/80 to-purple-700/80 text-white border border-purple-500/30 backdrop-blur-sm"
                  : "bg-gray-800/50 text-gray-300 border border-gray-700/40"
              }`}
            >
              {getPlanIcon(plan.id)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className={`text-5xl font-bold ${getPriceColor()}`}>
                {displayPrice}
              </span>
              <span className="text-gray-400 text-lg">{displayPeriod}</span>
            </div>
            {isAnnual && typeof plan.price === "number" && plan.price > 0 && (
              <div className="mt-2 text-sm text-emerald-400 font-medium">
                Save ${Math.floor(plan.price * 0.2 * 12)}/year
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            {plan.description}
          </p>

          {/* Features */}
          <div className="mb-8 flex-grow">
            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-auto">
            <button className={getButtonStyles()}>{plan.buttonText}</button>
          </div>
        </div>
      </div>
    );
  };

  const getPrice = (plan: PricingPlan) => {
    if (typeof plan.price === "string") return plan.price;
    if (plan.price === 0) return "$0";
    const price = isAnnual ? Math.floor(plan.price * 0.8) : plan.price;
    return `$${price}`;
  };

  const getPeriod = (plan: PricingPlan) => {
    if (plan.id === "enterprise") return plan.period;
    return isAnnual ? t("pricing.yearlyPeriod") : plan.period;
  };

  return (
    <section className="py-20 bg-transparent min-h-screen">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-gray-900/40 border border-gray-700/40 text-violet-400 rounded-full px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5" />
              <span className="text-lg font-semibold tracking-wide">
                {t("pricing.title")}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("pricing.subtitle")}
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("pricing.description")}
          </p>

          {/* Enhanced Monthly/Annual Toggle */}
          <div className="flex items-center justify-center mb-12 relative">
            <span
              className={`font-medium text-lg transition-colors ${
                !isAnnual ? "text-white" : "text-gray-500"
              }`}
            >
              {t("pricing.monthly")}
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-20 h-10 mx-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm ${
                isAnnual
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/25 border border-violet-400/30"
                  : "bg-gray-800/50 border border-gray-600/40"
              }`}
            >
              <div
                className={`absolute top-1 w-8 h-8 rounded-full shadow-md transition-all duration-300 ${
                  isAnnual
                    ? "transform translate-x-10 bg-white shadow-violet-500/25"
                    : "translate-x-1 bg-gray-400"
                }`}
              />
            </button>

            <div className="relative flex items-center">
              <span
                className={`font-medium text-lg transition-colors ${
                  isAnnual ? "text-white" : "text-gray-500"
                }`}
              >
                {t("pricing.annual")}
              </span>
              {isAnnual && (
                <div className="absolute left-20 top-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap border border-emerald-400/30 backdrop-blur-sm">
                    {t("pricing.save20")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.id}>
              <PricingCard
                plan={plan}
                displayPrice={getPrice(plan)}
                displayPeriod={String(getPeriod(plan))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
