"use client";

import { SiteDataProvider } from "@/lib/SiteDataContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ComicPanelPage() {
  return (
    <SiteDataProvider>
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
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </SiteDataProvider>
  );
}
