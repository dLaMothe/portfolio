import React from "react";
import portfolioData from "@/data/portfolio.json";
import { BookOpen } from "lucide-react";

export default function LibrarySection() {
  const { library } = portfolioData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-12">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            BROWSE MY LIBRARY
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {library.map((book, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 h-64 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="bg-gray-300 rounded h-32 mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="font-semibold text-sm mb-2 text-gray-800">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
