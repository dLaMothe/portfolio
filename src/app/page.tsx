import React from "react";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import QuestsSection from "@/components/QuestsSection";
import SkillsSection from "@/components/SkillsSection";
import LibrarySection from "@/components/LibrarySection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <QuestsSection />
      <SkillsSection />
      <LibrarySection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
