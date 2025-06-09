import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Code2, ArrowUpRight } from "lucide-react";

export default function QuestsSection() {
  const { quests } = portfolioData;

  const getTechTagColor = (tech: string, index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800 border border-blue-200", // Light blue
      "bg-yellow-100 text-yellow-800 border border-yellow-200", // Light yellow
      "bg-orange-100 text-orange-800 border border-orange-200", // Light orange
      "bg-red-100 text-red-800 border border-red-200", // Light red
      "bg-green-100 text-green-800 border border-green-200", // Light green
      "bg-purple-100 text-purple-800 border border-purple-200", // Light purple
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <Code2 className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            EXPLORE MY QUESTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 lowercase tracking-wide">
                  [{quest.category.toLowerCase().replace(/\s+/g, "")}]
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>

              {/* Large Image Area */}
              <div className="relative h-48 mx-4 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-4 pt-0">
                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                  {quest.title}
                </h3>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {quest.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getTechTagColor(
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
