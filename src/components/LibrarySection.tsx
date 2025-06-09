"use client";

import React, { useState } from "react";
import portfolioData from "@/data/portfolio.json";
import { BookOpen, X } from "lucide-react";

interface Book {
  title: string;
  author: string;
  description: string;
  image?: string;
}

export default function InventorySection() {
  const { inventory } = portfolioData;
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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
                className="bg-gray-100 rounded-lg p-4 w-72 flex-shrink-0 h-64 flex flex-col justify-between hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-blue-300 cursor-pointer"
                onClick={() => setSelectedBook(book)}
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

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden bg-gray-200 shadow-lg h-64 md:h-80">
                    {selectedBook.image ? (
                      <img
                        src={selectedBook.image}
                        alt={selectedBook.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                        <BookOpen className="w-12 h-12 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                    {selectedBook.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 font-medium">
                    by {selectedBook.author}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                      My Review & Rating
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedBook.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
