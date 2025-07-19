"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";

const contentCards = [
  {
    id: 1,
    titleKey: "contentSections.card1.title",
    descriptionKey: "contentSections.card1.description",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    layout: "left",
    category: "Analytics",
    readTime: "5 min read",
    icon: TrendingUp,
    color: "purple",
  },
  {
    id: 2,
    titleKey: "contentSections.card2.title",
    descriptionKey: "contentSections.card2.description",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    layout: "right",
    category: "Collaboration",
    readTime: "3 min read",
    icon: Users,
    color: "cyan",
  },
  {
    id: 3,
    titleKey: "contentSections.card3.title",
    descriptionKey: "contentSections.card3.description",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    layout: "left",
    category: "Innovation",
    readTime: "7 min read",
    icon: Play,
    color: "emerald",
  },
];

const colorVariants = {
  purple: {
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    hover: "hover:bg-purple-500/20",
  },
  cyan: {
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    hover: "hover:bg-cyan-500/20",
  },
  emerald: {
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    hover: "hover:bg-emerald-500/20",
  },
};

export default function ContentSections() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Mock translation function
  const t = (key: string) => {
    const translations: { [key: string]: string } = {
      "contentSections.card1.title":
        "Data-Driven Insights That Transform Your Business",
      "contentSections.card1.description":
        "Harness the power of advanced analytics to uncover hidden patterns, predict trends, and make informed decisions that drive sustainable growth and competitive advantage.",
      "contentSections.card2.title":
        "Seamless Team Collaboration Across All Platforms",
      "contentSections.card2.description":
        "Break down silos and foster innovation with integrated collaboration tools that keep your team connected, productive, and aligned on shared objectives regardless of location.",
      "contentSections.card3.title":
        "Innovation at Scale with Intelligent Automation",
      "contentSections.card3.description":
        "Accelerate your digital transformation journey with AI-powered automation solutions that streamline processes, reduce costs, and unlock new possibilities for growth.",
      "contentSections.readMore": "Explore Further",
    };
    return translations[key] || key;
  };

  useEffect(() => {
    const observers = contentCards.map((card) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, card.id]));
          }
        },
        { threshold: 0.2 }
      );

      if (cardRefs.current[card.id]) {
        observer.observe(cardRefs.current[card.id]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm font-medium uppercase tracking-wide">
              Our Solutions
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Empowering Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover how our innovative solutions can transform your business
            processes and accelerate growth
          </p>
        </div>

        <div className="space-y-12">
          {contentCards.map((card, index) => {
            const colors =
              colorVariants[card.color as keyof typeof colorVariants];
            const IconComponent = card.icon;
            const isVisible = visibleCards.has(card.id);

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[card.id] = el;
                }}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all duration-500">
                  {/* Subtle background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div
                    className={`relative grid lg:grid-cols-2 gap-0 ${
                      card.layout === "right" ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content Side */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 ${
                        card.layout === "right" ? "lg:col-start-2" : ""
                      }`}
                    >
                      {/* Category Badge */}
                      <div className="flex items-center space-x-4">
                        <div
                          className={`inline-flex items-center space-x-2 ${colors.bg} ${colors.border} border rounded-full px-3 py-1.5`}
                        >
                          <IconComponent className={`w-4 h-4 ${colors.text}`} />
                          <span
                            className={`text-sm font-medium ${colors.text}`}
                          >
                            {card.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{card.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                        {t(card.titleKey)}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {t(card.descriptionKey)}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-3">
                        {[
                          `Advanced ${card.category.toLowerCase()} tools`,
                          "Real-time insights and reporting",
                          "Seamless integration capabilities",
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${colors.text.replace(
                                "text-",
                                "bg-"
                              )}`}
                            />
                            <span className="text-slate-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                          className={`inline-flex items-center space-x-2 ${colors.bg} ${colors.hover} border ${colors.border} px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105`}
                        >
                          <span>{t("contentSections.readMore")}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button className="inline-flex items-center space-x-2 text-slate-400 hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
                          <ExternalLink className="w-4 h-4" />
                          <span>View Demo</span>
                        </button>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div
                      className={`relative p-8 lg:p-12 ${
                        card.layout === "right" ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div className="relative h-full min-h-[300px] bg-slate-800/30 rounded-xl border border-slate-700/30 overflow-hidden group-hover:border-slate-600/50 transition-all duration-500">
                        {/* Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${card.image})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                        {/* Interactive Elements */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="space-y-4">
                            {/* Mock Stats */}
                            <div className="flex space-x-4">
                              <div className="bg-black/40 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2">
                                <div className="text-white font-semibold text-sm">
                                  98%
                                </div>
                                <div className="text-slate-400 text-xs">
                                  Success Rate
                                </div>
                              </div>
                              <div className="bg-black/40 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2">
                                <div className="text-white font-semibold text-sm">
                                  2.4x
                                </div>
                                <div className="text-slate-400 text-xs">
                                  Faster Results
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Animated border glow */}
                        <div
                          className={`absolute inset-0 border-2 ${colors.border} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                      </div>

                      {/* Floating accent */}
                      <div
                        className={`absolute -top-3 -right-3 w-6 h-6 rounded-full ${colors.text.replace(
                          "text-",
                          "bg-"
                        )} opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl px-8 py-6">
            <div className="text-white font-semibold">
              Ready to get started?
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
