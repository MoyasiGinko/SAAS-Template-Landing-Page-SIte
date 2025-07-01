"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Know More, Act Faster And Close Smarter.
        </h2>
        <p className="mb-8">AI-powered clarity for every stage of your customer journey</p>
        <div className="space-x-4">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="bg-purple-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition">
            Schedule A Demo
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold mb-4">CLARA</div>
            <p>Every Customer Insights, Intelligently Handled</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Clara feed</a></li>
                <li><a href="#" className="hover:underline">Smart summary</a></li>
                <li><a href="#" className="hover:underline">Pulse Score</a></li>
                <li><a href="#" className="hover:underline">Touchpoint Reminder</a></li>
                <li><a href="#" className="hover:underline">Clara Snapshot</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Feature</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Stay in touch</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-8">
          Copyright 2025. All rights reserved by Clara
          <br />
          <a href="#" className="hover:underline">Privacy policy</a> | <a href="#" className="hover:underline">Terms and conditions</a>
        </div>
      </footer>
    </>
  );
}
