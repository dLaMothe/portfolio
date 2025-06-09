import React from "react";
import portfolioData from "@/data/portfolio.json";
import { BookOpen } from "lucide-react";

export default function InventorySection() {
  const { inventory } = portfolioData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            BROWSE MY INVENTORY
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-scroll py-4 -mb-6 pb-10">
            {inventory.map((book, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 w-72 flex-shrink-0 h-64 flex flex-col justify-between hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-blue-300"
              >
                <div>
                  <div className="rounded h-28 mb-3 overflow-hidden bg-gray-200 shadow-inner">
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                        <BookOpen className="w-6 h-6 text-gray-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-xs mb-2 text-gray-800 leading-tight h-8 overflow-hidden">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 font-medium">
                    by {book.author}
                  </p>
                </div>
                <p className="text-xs text-gray-500 leading-tight overflow-hidden h-12">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
