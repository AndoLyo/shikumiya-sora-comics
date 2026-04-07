"use client";

import { SiteDataProvider } from "@/lib/SiteDataContext";
import type { SiteData } from "@/lib/site-data";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const siteData: SiteData = {
  artistName: "Sora",
  subtitle: "漫画家 & イラストレーター",
  catchcopy: "物語は、一コマから始まる",
  bio: "漫画とイラストを描いています。AI画像生成を使って、新しい表現を探求中。",
  motto: "描きたいものを、描きたいように",
  email: "ryoya112@outlook.com",
  snsX: "https://x.com/sora_manga_test",
  snsInstagram: "https://instagram.com/sora_manga_test",
  works: [],
};

export default function ComicPanelPage() {
  return (
    <SiteDataProvider data={siteData}>
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
