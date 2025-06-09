import React from "react";
import portfolioData from "@/data/portfolio.json";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{contact.title}</h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          {contact.description}
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>

          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Decorative bottom border */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
