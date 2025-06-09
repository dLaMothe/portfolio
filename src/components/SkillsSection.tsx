import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Star } from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <Star className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            DISCOVER MY SKILLS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-4 h-4 bg-${skillGroup.color} rounded-full mb-4`}
              ></div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-gray-600 text-sm bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
