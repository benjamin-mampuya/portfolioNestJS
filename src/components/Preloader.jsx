"use client";
import { useEffect, useState } from "react";
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/data/translations';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cache le preloader après le chargement du site, ou après 1.5s (fallback)
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback
      setTimeout(() => setLoading(false), 2000);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const { language } = useLanguage();
  const t = translations[language].preloader;

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="relative flex items-center justify-center">
          {/* Cercle externe (ping) */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-primary/20 animate-ping"></div>
          {/* Cercle interne (spin) */}
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
          {/* Point central (pulse) */}
          <div className="absolute w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(0,180,216,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,229,255,0.5)]"></div>
        </div>
        {/* Texte loading */}
        <div className="text-primary font-outfit text-sm font-medium tracking-widest animate-pulse">
          {t.loading}
        </div>
      </div>
    </div>
  );
}
