"use client";

import React from "react";

export default function Pricing() {
  return (
    <section className="w-full bg-white">
    <div className="py-20 bg-white px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-12 text-black">5M+ users and still counting</h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Start free and upgrade anytime as your team and projects grow
      </p>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 max-w-5xl mx-auto">
        {/* Starter */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 text-center bg-white">
          <h3 className="text-xl font-semibold mb-4 text-black">Starter</h3>
          <p className="text-4xl font-bold mb-4 text-black">$0</p>
          <p className="mb-6 text-gray-700">Per user/month</p>
          <ul className="text-gray-700 mb-6 text-left space-y-2">
            <li>For personal</li>
            <li>Basic Activity Feed (1 Day History)</li>
            <li>AI Smart Summary (Limited Content)</li>
            <li>Basic Email Tracking</li>
          </ul>
          <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md font-semibold hover:bg-purple-50 transition">
            Free Access
          </button>
        </div>
        {/* Growth */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 text-center bg-white">
          <h3 className="text-xl font-semibold mb-4 text-black">Growth</h3>
          <p className="text-4xl font-bold mb-4 text-black">$35</p>
          <p className="mb-6 text-gray-700">Per user/month</p>
          <ul className="text-gray-700 mb-6 text-left space-y-2">
            <li>For growing teams</li>
            <li>Up to 10 Users</li>
            <li>Smart Summary + Pulse Score</li>
            <li>Touchpoint Reminder</li>
            <li>Outreach Sequence</li>
          </ul>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-800 transition">
            Get Started
          </button>
        </div>
        {/* Pro */}
        <div className="flex-1 border-2 border-purple-700 rounded-lg p-6 text-center bg-purple-50 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Users Best Choice
          </div>
          <h3 className="text-xl font-semibold mb-4 text-black">Pro</h3>
          <p className="text-4xl font-bold mb-4 text-black">$55</p>
          <p className="mb-6 text-gray-700">Per month</p>
          <ul className="text-gray-700 mb-6 text-left space-y-2">
            <li>For multi-user teams</li>
            <li>Unlimited Users</li>
            <li>Data Snapshot</li>
            <li>AI Suggestion Engine</li>
            <li>Advanced Scheduling Assistant</li>
          </ul>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-800 transition">
            Get Started
          </button>
        </div>
        {/* Enterprise */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 text-center bg-white">
          <h3 className="text-xl font-semibold mb-4 text-black">Enterprise</h3>
          <p className="mb-6 text-black">Custom</p>
          <p className="mb-6 text-gray-700">Per month</p>
          <ul className="text-gray-700 mb-6 text-left space-y-2">
            <li>More flexible</li>
            <li>Fields & Data Model</li>
            <li>Various Integrations</li>
            <li>Custom Insight AI Training</li>
            <li>SLA, Onboarding, And Permissions</li>
          </ul>
          <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Talk to sales
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
