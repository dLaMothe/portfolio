import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Code2, ArrowRight } from "lucide-react";

export default function QuestsSection() {
  const { quests } = portfolioData;

  const getTechTagColor = (tech: string, index: number) => {
    const colors = [
      "bg-blue-500 text-white", // Bold blue
      "bg-yellow-400 text-black", // Bright yellow
      "bg-orange-500 text-white", // Vibrant orange
      "bg-red-500 text-white", // Bold red
      "bg-green-500 text-white", // Bright green
      "bg-purple-500 text-white", // Bold purple
      "bg-pink-500 text-white", // Hot pink
      "bg-cyan-500 text-white", // Bright cyan
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <Code2 className="w-8 h-8 text-purple-600" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            EXPLORE MY QUESTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-lg border-2 border-black overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="p-3 flex items-center justify-between bg-gray-100">
                <span className="text-xs font-bold text-black lowercase tracking-wide">
                  [{quest.category.toLowerCase().replace(/\s+/g, "")}]
                </span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>

              {/* Large Image Area */}
              <div className="relative h-48 bg-gray-400 overflow-hidden">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-3 bg-gray-100">
                {/* Title */}
                <h3 className="text-sm font-bold text-black mb-3 leading-tight">
                  {quest.title}
                </h3>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1">
                  {quest.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-bold border-2 border-black ${getTechTagColor(
                        tech,
                        index
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
