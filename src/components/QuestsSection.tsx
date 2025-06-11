"use client";

import React, { useEffect } from "react";
import portfolioData from "@/data/portfolio.json";
import { Code2, ArrowRight, Clock, Users, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

export default function QuestsSection() {
  const { quests } = portfolioData;
  const router = useRouter();

  // Restore scroll position when component mounts
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(
      "portfolioScrollPosition"
    );
    if (savedScrollPosition) {
      // Use setTimeout to ensure the page is fully rendered before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollPosition, 10),
          behavior: "smooth",
        });
        // Clear the saved position after restoring
        sessionStorage.removeItem("portfolioScrollPosition");
      }, 100);
    }
  }, []);

  const getSkillTagColor = (skill: string, index: number) => {
    const colors = [
      "bg-blue-500 text-white", // Bold blue
      "bg-green-500 text-white", // Bright green
      "bg-purple-500 text-white", // Bold purple
      "bg-orange-500 text-white", // Vibrant orange
      "bg-pink-500 text-white", // Hot pink
      "bg-cyan-500 text-white", // Bright cyan
      "bg-yellow-500 text-black", // Bright yellow
      "bg-red-500 text-white", // Bold red
    ];
    return colors[index % colors.length];
  };

  const handleQuestClick = (questId: number) => {
    // Save current scroll position before navigating
    sessionStorage.setItem(
      "portfolioScrollPosition",
      window.scrollY.toString()
    );
    router.push(`/quest/${questId}`);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-purple-600" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            EXPLORE MY QUESTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-lg border-2 border-black overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleQuestClick(quest.id)}
            >
              {/* Header */}
              <div className="p-3 flex items-center justify-between bg-gray-100">
                <span className="text-xs font-bold text-black lowercase tracking-wide">
                  [quest-{quest.id.toString().padStart(2, "0")}]
                </span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>

              {/* Large Gradient Area */}
              <div
                className={`relative h-48 bg-${quest.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2 px-4 leading-tight">
                      {quest.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{quest.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="p-4 bg-gray-100 space-y-3">
                {/* Team Info */}
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700 leading-tight">
                    {quest.team}
                  </span>
                </div>

                {/* Applied Skills */}
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                      Applied Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {quest.appliedSkills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs font-bold border-2 border-black ${getSkillTagColor(
                          skill,
                          index
                        )}`}
                      >
                        {skill.split(" | ")[0]} {/* Show shortened version */}
                      </span>
                    ))}
                    {quest.appliedSkills.length > 3 && (
                      <span className="px-2 py-1 text-xs font-bold border-2 border-black bg-gray-500 text-white">
                        +{quest.appliedSkills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tools Preview */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Wrench className="w-3 h-3" />
                  <span>
                    {quest.tools
                      .slice(0, 2)
                      .map((tool) => tool.replace(" ❤️", ""))
                      .join(", ")}
                    {quest.tools.length > 2 &&
                      ` +${quest.tools.length - 2} more`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
