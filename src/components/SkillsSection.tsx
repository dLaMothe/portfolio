import React from "react";
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
} from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;

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
              className="bg-cyan-100 p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-4">{getSkillIcon(skillGroup.icon)}</div>

              {/* Title */}
              <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wide">
                {skillGroup.category}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed mb-6 text-black">
                {skillGroup.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-black font-medium">
                <span className="text-xs">READ MORE</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
