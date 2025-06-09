import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Award } from "lucide-react";

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-yellow-500" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            VIEW MY ACHIEVEMENTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="font-bold text-sm mb-2 text-gray-800">
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                {achievement.issuer} • {achievement.date}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
