"use client";

import React, { useState } from "react";
import portfolioData from "@/data/portfolio.json";
import { Award, X, ExternalLink } from "lucide-react";

interface Achievement {
  name: string;
  description: string;
  type: string;
  picture?: string;
  link?: string;
}

export default function AchievementsSection() {
  const { achievements } = portfolioData;
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  // Utility function to handle base path for GitHub Pages
  const getImageSrc = (path: string) => {
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    return `${basePath}${path}`;
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "publication":
        return "bg-blue-500 text-white";
      case "certificate":
        return "bg-green-500 text-white";
      case "shout out":
        return "bg-purple-500 text-white";
      default:
        return "bg-yellow-500 text-black";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "publication":
        return "📄";
      case "certificate":
        return "🏆";
      case "shout out":
        return "🎉";
      default:
        return "⭐";
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-yellow-500" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            VIEW MY ACHIEVEMENTS
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-scroll py-4 -mb-6 pb-10">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 w-72 flex-shrink-0 h-64 flex flex-col justify-between hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-yellow-300 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div>
                  <div className="rounded h-28 mb-3 overflow-hidden bg-gray-200 shadow-inner">
                    {achievement.picture ? (
                      <img
                        src={getImageSrc(achievement.picture)}
                        alt={achievement.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400">
                        <div className="text-4xl">
                          {getTypeIcon(achievement.type)}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getTypeColor(
                        achievement.type
                      )}`}
                    >
                      {achievement.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xs mb-2 text-gray-800 leading-tight h-8 overflow-hidden">
                    {achievement.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-tight overflow-hidden h-12">
                  {achievement.description.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden bg-gray-200 shadow-lg h-64 md:h-80">
                    {selectedAchievement.picture ? (
                      <img
                        src={getImageSrc(selectedAchievement.picture)}
                        alt={selectedAchievement.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400">
                        <div className="text-6xl">
                          {getTypeIcon(selectedAchievement.type)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide ${getTypeColor(
                        selectedAchievement.type
                      )}`}
                    >
                      {selectedAchievement.type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    {selectedAchievement.name}
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                      About This Achievement
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedAchievement.description}
                    </p>
                  </div>
                  {selectedAchievement.link && (
                    <a
                      href={selectedAchievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
