import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Sparkles */}
      {hero.sparkles.map((sparkle, index) => (
        <div
          key={index}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {sparkle.symbol}
        </div>
      ))}

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 300" className="w-full h-auto">
          <path
            d="M0,300 L0,200 Q200,150 400,180 Q600,120 800,160 Q1000,100 1200,140 L1200,300 Z"
            fill="rgba(255,255,255,0.1)"
          />
          <path
            d="M0,300 L0,220 Q150,180 300,200 Q450,160 600,180 Q750,140 900,160 Q1050,120 1200,140 L1200,300 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl ml-auto mr-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-left">
          <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-6">
            {hero.title}
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
