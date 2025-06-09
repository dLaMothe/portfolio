import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function ValuesSection() {
  const { values } = portfolioData;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          MY VALUES
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
