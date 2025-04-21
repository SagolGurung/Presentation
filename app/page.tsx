/* app/page.tsx — full file */
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Slide1 from "@/components/slides/slide-1";
import Slide2 from "@/components/slides/slide-2";
import Slide3 from "@/components/slides/slide-3";
import Slide4 from "@/components/slides/slide-4";
import Slide5 from "@/components/slides/slide-5";
import Slide6 from "@/components/slides/slide-6";
import Slide7 from "@/components/slides/slide-7";
import Slide8 from "@/components/slides/slide-8";
import Slide9 from "@/components/slides/slide-9";
import Slide10 from "@/components/slides/slide-10";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/particle-background";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => currentSlide < totalSlides && setCurrentSlide(currentSlide + 1);
  const prevSlide = () => currentSlide > 1 && setCurrentSlide(currentSlide - 1);
  const goToSlide = (n: number) => setCurrentSlide(n);

  /* keyboard & custom‑event navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    const handleGoTo = (e: CustomEvent) => goToSlide(e.detail as number);

    window.addEventListener("keydown", handleKey);
    window.addEventListener("goToSlide", handleGoTo as EventListener);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("goToSlide", handleGoTo as EventListener);
    };
  }, [currentSlide]);

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
  ];

  /* ─────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-genshin-bg bg-cover bg-center flex flex-col overflow-hidden">
      <ParticleBackground />

      {/* ── Header ───────────────────────── */}
      <header className="bg-genshin-header/90 backdrop-blur-sm text-white p-4 shadow-lg border-b border-genshin-gold/30 z-10 relative">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl font-genshin"
          >
            Business Solutions Presentation
          </motion.h1>

          {/* the only page counter lives here */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm font-genshin px-4 py-1 rounded-full bg-white/20 border border-white/50"
          >
            {currentSlide} / {totalSlides}
          </motion.div>
        </div>
      </header>

      {/* ── Main frame ───────────────────── */}
      <main className="flex-1 flex flex-col relative z-0">
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          <motion.div
            className="relative flex-1 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="genshin-frame w-full h-full relative bg-[color:var(--slide-bg)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="w-full h-full"
                >
                  {slides[currentSlide - 1]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── Controls / progress bar ────── */}
          <div className="mt-6 flex justify-between items-center relative z-10">
            {/* Prev */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={prevSlide}
                disabled={currentSlide === 1}
                className="flex items-center gap-2 bg-genshin-button border-genshin-gold/50 text-genshin-gold hover:bg-genshin-button-hover hover:border-genshin-gold disabled:opacity-50 font-genshin"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
            </motion.div>

            {/* progress bar */}
            <div className="flex-1 mx-4 relative">
              <div className="h-2 bg-genshin-progress-bg rounded-full overflow-hidden border border-genshin-gold/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-genshin-gold/50 to-genshin-gold"
                  initial={{ width: `${((currentSlide - 1) / totalSlides) * 100}%` }}
                  animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* dots */}
              <div className="absolute -top-1 left-0 right-0 flex justify-between px-1">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => goToSlide(idx + 1)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className={cn(
                      "w-4 h-4 rounded-full border-2 -mt-1 transition-all duration-300 hover:scale-125",
                      currentSlide === idx + 1
                        ? "bg-genshin-gold border-genshin-gold shadow-glow"
                        : "bg-genshin-button border-genshin-gold/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides}
                className="flex items-center gap-2 bg-genshin-gold text-genshin-dark hover:bg-genshin-gold-hover disabled:opacity-50 font-genshin"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────── */}
      <footer className="bg-genshin-header/90 backdrop-blur-sm text-white/80 p-3 text-center text-sm border-t border-genshin-gold/30 relative z-10">
        <div className="container mx-auto font-genshin">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            Critical Success Factors in ERP Implementation: A Review of Case Studies
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
