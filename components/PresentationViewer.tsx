"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide1Intro from "./slides/Slide1Intro";
import Slide2Omset from "./slides/Slide2Omset";
import Slide3NewCustomers from "./slides/Slide3NewCustomers";
import Slide4Products from "./slides/Slide4Products";
import Slide5Churn from "./slides/Slide5Churn";
import Slide6Highlight from "./slides/Slide6Highlight";

const slides = [
  <Slide1Intro key="s1" />,
  <Slide2Omset key="s2" />,
  <Slide3NewCustomers key="s3" />,
  <Slide4Products key="s4" />,
  <Slide5Churn key="s5" />,
  <Slide6Highlight key="s6" />
];

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
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      {/* Main Slide Area */}
      <div className="relative w-full max-w-6xl h-[700px] flex items-center justify-center z-10 px-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
              ${currentSlide === 0 
                ? "bg-slate-800/50 text-slate-600 cursor-not-allowed" 
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-300 rounded-full cursor-pointer
                  ${currentSlide === idx 
                    ? "w-8 h-2 bg-gold" 
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                onClick={() => {
                  setDirection(idx > currentSlide ? 1 : -1);
                  setCurrentSlide(idx);
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
              ${currentSlide === slides.length - 1 
                ? "bg-slate-800/50 text-slate-600 cursor-not-allowed" 
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <p className="text-sm text-slate-500">
          Gunakan panah keyboard (← / →) untuk navigasi
        </p>
      </div>
    </div>
  );
}
