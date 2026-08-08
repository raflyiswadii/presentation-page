"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reportData } from "@/lib/data";

import Image from "next/image";
import Slide1Intro from "./slides/Slide1Intro";
import Slide2Omset from "./slides/Slide2Omset";
import Slide3NewCustomers from "./slides/Slide3NewCustomers";
import Slide4Products from "./slides/Slide4Products";
import Slide5Churn from "./slides/Slide5Churn";
import Slide6Highlight from "./slides/Slide6Highlight";
import Slide7Closing from "./slides/Slide7Closing";

const slides = [
  <Slide1Intro key="s1" />,
  <Slide2Omset key="s2" />,
  <Slide3NewCustomers key="s3" />,
  <Slide4Products key="s4" />,
  <Slide5Churn key="s5" />,
  <Slide6Highlight key="s6" />,
  <Slide7Closing key="s7" />
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function PresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1
    })
  };

  return (
    <div className="h-screen min-h-0 bg-background text-foreground flex flex-col overflow-hidden">

      {/* Global Header — flex-shrink-0 agar tidak ditekan konten */}
      <div className="flex-shrink-0 w-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center z-20 text-foreground swiss-border-b">
        <div className="flex gap-3 items-center">
          <Image src="/logo-icon.jpg" alt="Hatiga Logo" width={36} height={36} className="rounded-full shadow-sm md:w-12 md:h-12" />
          <h1 className="font-bold uppercase tracking-tighter text-base md:text-xl leading-tight">Laporan<br/>Penjualan.</h1>
        </div>
        <div className="text-right font-mono text-xs md:text-sm uppercase">
          {reportData.header.division} Div<br/>
          {reportData.header.area}
        </div>
      </div>

      {/* Main Slide Area — flex-1 mengisi sisa ruang yang tersedia */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5, ease: [0.25, 1, 0.5, 1] },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="absolute w-full h-full cursor-grab active:cursor-grabbing"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls — flex-shrink-0 agar selalu terlihat di bawah */}
      <div className="flex-shrink-0 w-full z-20 swiss-border-t bg-background">
        <div className="flex">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex-1 py-3 md:py-4 uppercase font-bold tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 transition-colors swiss-border-r
              ${currentSlide === 0
                ? "text-graphite/30 cursor-not-allowed bg-background"
                : "text-foreground hover:bg-foreground hover:text-background"
              }`}
          >
            <ChevronLeft size={16} /> Sebelumnya
          </button>

          <div className="px-6 md:px-8 py-3 md:py-4 flex items-center justify-center font-mono text-sm font-bold bg-foreground text-background">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex-1 py-3 md:py-4 uppercase font-bold tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 transition-colors swiss-border-l
              ${currentSlide === slides.length - 1
                ? "text-graphite/30 cursor-not-allowed bg-background"
                : "text-foreground hover:bg-foreground hover:text-background"
              }`}
          >
            Selanjutnya <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
