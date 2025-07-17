"use client";

import React from "react";
import Image from "next/image";
import { useLocalization } from "../lib/LocalizationProvider";

export default function Hero() {
  const { t } = useLocalization();
  return (
    <section className="pt-16 pb-12 px-4  bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Headline and CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block border border-indigo-700 text-purple-300 rounded-full px-4 py-1 text-xs mb-5 font-semibold bg-indigo-950 shadow tracking-wide">
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
            {(() => {
              const headline = t("hero.headline");
              let lines: string[] = [];
              if (typeof headline === "string") {
                lines = headline.split("\n");
              } else if (Array.isArray(headline)) {
                lines = headline;
              }
              return lines.map((line: string, idx: number) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ));
            })()}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {/* Optionally highlight a word or phrase here for extra effect */}
            </span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {t("hero.description")}
          </p>
          <button className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition text-base">
            {t("hero.getStarted")}
          </button>
        </div>
        {/* UI Mockup Section */}
        <div className="relative w-full max-w-7xl mt-10 flex flex-col items-center">
          {/* Simple background grid dots SVG */}
          <div className="absolute bg-transparent inset-0 w-full h-full pointer-events-none">
            {/* Grid dots background */}
            <div
              className="absolute bg-transparent inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/grid-dots.svg')",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
                opacity: 0.5,
                filter: "invert(0)",
                zIndex: 0,
              }}
            />
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 h-full w-[40%] z-10"
              style={{
                background: "linear-gradient(to top, transparent, transparent)",
                pointerEvents: "none",
              }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 h-full w-[40%] z-10"
              style={{
                background:
                  "linear-gradient(to left, transparent, transparent)",
                pointerEvents: "none",
              }}
            />
            {/* Top fade */}
            <div
              className="absolute top-0 left-0 w-full h-[40%] z-10"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, transparent)",
                pointerEvents: "none",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 w-full h-[40%] z-10"
              style={{
                background: "linear-gradient(to top, transparent, transparent)",
                pointerEvents: "none",
              }}
            />
          </div>
          <div className="relative z-10 w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden bg-transparent max-w-7xl w-full aspect-[16/9] flex items-center justify-center">
              <Image
                src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif"
                alt={String(t("hero.imageAlt"))}
                width={1200}
                height={675}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
