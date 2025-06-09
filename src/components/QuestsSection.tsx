import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Code2, ExternalLink } from "lucide-react";

export default function QuestsSection() {
  const { quests } = portfolioData;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "In Development":
        return "bg-yellow-100 text-yellow-800";
      case "Planning":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {quest.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      quest.status
                    )}`}
                  >
                    {quest.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {quest.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {quest.description}
                </p>
              </div>

              {/* Footer with Tags */}
              <div className="px-4 pb-4">
                <div className="flex flex-wrap gap-2">
                  {quest.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional: Add a "View Project" button */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
