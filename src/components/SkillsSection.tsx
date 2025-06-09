"use client";

import React, { useState } from "react";
import portfolioData from "@/data/portfolio.json";
import {
  Star,
  Code2,
  Server,
  Palette,
  Wrench,
  Smartphone,
  TestTube,
  ArrowRight,
  X,
} from "lucide-react";

interface Skill {
  category: string;
  description: string;
  tools: string[];
  skillLevel: string;
  quests: string[];
  color: string;
  icon: string;
}

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const getSkillIcon = (iconType: string) => {
    switch (iconType) {
      case "frontend":
        return <Code2 className="w-8 h-8 text-black" />;
      case "backend":
        return <Server className="w-8 h-8 text-black" />;
      case "design":
        return <Palette className="w-8 h-8 text-black" />;
      case "tools":
        return <Wrench className="w-8 h-8 text-black" />;
      case "mobile":
        return <Smartphone className="w-8 h-8 text-black" />;
      case "testing":
        return <TestTube className="w-8 h-8 text-black" />;
      default:
        return <Star className="w-8 h-8 text-black" />;
    }
  };

  const getColorClass = (colorType: string) => {
    switch (colorType) {
      case "skill-blue":
        return "bg-blue-100";
      case "skill-green":
        return "bg-green-100";
      case "skill-pink":
        return "bg-pink-100";
      case "skill-purple":
        return "bg-purple-100";
      case "skill-orange":
        return "bg-orange-100";
      case "skill-yellow":
        return "bg-yellow-100";
      default:
        return "bg-cyan-100";
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Star className="w-8 h-8 text-yellow-500" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            DISCOVER MY SKILLS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`${getColorClass(
                skillGroup.color
              )} p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
              onClick={() => setSelectedSkill(skillGroup)}
            >
              {/* Icon */}
              <div className="mb-4">{getSkillIcon(skillGroup.icon)}</div>

              {/* Title */}
              <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wide">
                {skillGroup.category}
              </h3>

              {/* Description Preview */}
              <p className="text-xs leading-relaxed mb-4 text-black line-clamp-3">
                {skillGroup.description.substring(0, 120)}...
              </p>

              {/* Skill Level */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-black mb-1">
                  SKILL LEVEL
                </p>
                <p className="text-sm font-mono">{skillGroup.skillLevel}</p>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-black font-medium">
                <span className="text-xs">READ MORE</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  {getSkillIcon(selectedSkill.icon)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedSkill.category}
                  </h2>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      SKILL LEVEL:
                    </span>
                    <span className="ml-2 text-lg font-mono">
                      {selectedSkill.skillLevel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                  About This Skill
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {selectedSkill.tools && selectedSkill.tools.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Tools & Methods I Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          tool.includes("❤️")
                            ? "bg-red-100 text-red-800 border border-red-200"
                            : "bg-blue-100 text-blue-800 border border-blue-200"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedSkill.quests && selectedSkill.quests.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Projects Using This Skill
                  </h3>
                  <div className="space-y-2">
                    {selectedSkill.quests.map((quest, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>{quest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
