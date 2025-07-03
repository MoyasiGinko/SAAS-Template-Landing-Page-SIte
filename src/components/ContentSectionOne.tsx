"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function ContentSectionOne() {
  const backgroundFillRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const rect1Ref = useRef<HTMLDivElement>(null);
  const rect2Ref = useRef<HTMLDivElement>(null);
  const floatingElementRef = useRef<HTMLDivElement>(null);
  const smallRect1Ref = useRef<HTMLDivElement>(null);
  const smallRect2Ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animated purple background fill - sweeps from 20% to 100% and back
    if (backgroundFillRef.current) {
      gsap.fromTo(backgroundFillRef.current, 
        { scaleX: 0.2 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          repeatDelay: 1,
        }
      );
    }

    // Large purple circle animation - continuous rotation and pulsing
    if (circle1Ref.current) {
      gsap.to(circle1Ref.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      gsap.to(circle1Ref.current, {
        scale: 1.1,
        duration: 6,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Large animated rectangular block - Y-axis rotation and X-scaling
    if (rect1Ref.current) {
      gsap.to(rect1Ref.current, {
        rotationY: 360,
        duration: 8,
        ease: "power2.inOut",
        repeat: -1,
      });
      gsap.to(rect1Ref.current, {
        scaleX: 0.8,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Square rotating block with scaling
  if (rect2Ref.current) {
    gsap.to(rect2Ref.current, {
      rotation: 360,
      duration: 6,
      ease: "power2.inOut",
      repeat: -1,
    });
    gsap.to(rect2Ref.current, {
      scale: 1.2,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(rect2Ref.current, {
      x: 900, // move 60px to the right
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }


    // Floating circular element with multiple animations
    if (floatingElementRef.current) {
      gsap.to(floatingElementRef.current, {
        y: 20,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(floatingElementRef.current, {
        rotation: 360,
        duration: 5,
        ease: "none",
        repeat: -1,
      });
      gsap.to(floatingElementRef.current, {
        opacity: 0.3,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Small rotating rectangle with 3D rotation
    if (smallRect1Ref.current) {
      gsap.to(smallRect1Ref.current, {
        rotationZ: 360,
        duration: 7,
        ease: "none",
        repeat: -1,
      });
      gsap.to(smallRect1Ref.current, {
        rotationX: 180,
        duration: 3.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Small horizontal rectangle with Y-rotation and movement
    if (smallRect2Ref.current) {
      gsap.to(smallRect2Ref.current, {
        rotationY: 360,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
      });
      gsap.to(smallRect2Ref.current, {
        x: 10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Overlay circle element
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        scale: 1.1,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(overlayRef.current, {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl overflow-hidden">
          {/* Animated purple background fill - vibrant purple sweeping animation */}
          <div 
            ref={backgroundFillRef}
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500"
            style={{ 
              transformOrigin: "left",
              transform: "scaleX(0.2)"
            }}
          />
          
          {/* Purple geometric background shapes with GSAP animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large purple circle - continuously rotating and pulsing */}
            <div 
              ref={circle1Ref}
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-80"
              style={{ 
                transform: "translate(128px, -128px)"
              }}
            />

            {/* Square rotating block */}
            <div 
              ref={rect2Ref}
              className="absolute bottom-0 left-40 w-32 h-32 bg-purple-400 opacity-60"
            />

          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[400px]">
            {/* Left content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                The AI Workforce<br />
                humans can lean<br />
                on.
              </h2>
              <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-sm">
                Never quits, and always improves. Scale to meet any demand.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-900 font-semibold hover:text-purple-700 transition-colors text-sm"
              >
                More about clara
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Right image section */}
            <div className="md:w-1/2 relative p-8">
              <div className="relative">
                {/* Two people image - replace with actual image matching the design */}
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Two people collaborating with laptop"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  style={{ aspectRatio: '4/3' }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
