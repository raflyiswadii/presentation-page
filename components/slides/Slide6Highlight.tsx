import React from "react";
import Image from "next/image";
import { SlideContainer, SwissGrid } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide6Highlight() {
  const { highlight } = reportData;
  
  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        
        {/* Left Column: Typography */}
        <div className="flex flex-col relative overflow-hidden bg-hatiga-green text-background p-6 md:p-12 items-center justify-center">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-[1px] bg-background" style={{ top: `${i * 10}%` }}></div>
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-[1px] bg-background" style={{ left: `${i * 10}%` }}></div>
            ))}
          </div>
          
          <div className="font-mono text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-12 border border-background px-6 py-2 z-10">
            Highlight Product
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-center leading-tight z-10 text-balance">
            {highlight[0]}
          </h1>
        </div>

        {/* Right Column: Full Bleed Image */}
        <div className="relative w-full h-64 md:h-full bg-white swiss-border-t md:swiss-border-t-0 md:swiss-border-l">
          <Image 
            src="/product-hbsag.jpg" 
            alt={highlight[0]}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
      </SwissGrid>
    </SlideContainer>
  );
}
