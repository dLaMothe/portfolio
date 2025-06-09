import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold mb-6">{contact.title}</h2>
        <p className="text-xs text-gray-300 mb-12 leading-relaxed">
          {contact.description}
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs">Email Me</span>
          </a>

          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-xs">GitHub</span>
          </a>

          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-xs">LinkedIn</span>
          </a>
        </div>

        {/* Decorative bottom border */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
