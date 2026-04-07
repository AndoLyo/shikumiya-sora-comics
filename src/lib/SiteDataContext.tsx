"use client";

import { createContext, useContext } from "react";
import type { SiteData } from "./site-data";
import { siteData } from "./site-data";

const SiteDataContext = createContext<SiteData | null>(null);

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  return (
    <SiteDataContext.Provider value={siteData}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData(): SiteData | null {
  return useContext(SiteDataContext);
}
