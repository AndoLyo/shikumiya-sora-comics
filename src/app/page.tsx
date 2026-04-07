"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ComicPanelPage() {
  return (
    <div
      className="comic-panel-template"
      style={
        {
          "--cp-bg": "#FFFEF5",
          "--cp-surface": "#FFFFFF",
          "--cp-text": "#1A1A1A",
          "--cp-text-muted": "#666666",
          "--cp-red": "#E63946",
          "--cp-blue": "#2563EB",
          "--cp-yellow": "#FFC107",
          "--cp-border": "#1A1A1A",
          backgroundColor: "#FFFEF5",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
        } as React.CSSProperties
      }
    >
      <Header />
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
