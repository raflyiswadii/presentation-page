import React from "react";
import { SlideContainer, SwissGrid } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide1Intro() {
  const { header } = reportData;
  
  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-12 grid-rows-6">
        
        {/* Top Header - spans full width */}
        <div className="md:col-span-12 row-span-1 swiss-border-b flex flex-col justify-center p-6">
          <p className="font-mono text-graphite uppercase tracking-widest text-xs md:text-sm">
            {header.period} — {header.semester}
          </p>
        </div>
        
        {/* Main Title Area */}
        <div className="md:col-span-8 row-span-4 swiss-border-r swiss-border-b flex flex-col justify-end p-6 md:p-12 relative overflow-hidden group">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85] text-foreground z-10 transition-transform duration-700 origin-bottom-left group-hover:scale-105 break-words">
            {header.title.split(' ')[0]}<br />
            <span className="text-hatiga-green">{header.title.split(' ')[1]}</span>.
          </h1>
        </div>
        
        {/* Author Info Area */}
        <div className="md:col-span-4 row-span-4 swiss-border-b bg-foreground text-background flex flex-col justify-between p-6 md:p-12">
          <div className="font-mono text-sm uppercase tracking-widest opacity-70">
            Disusun Oleh
          </div>
          <div className="mt-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-none mb-4 break-words">
              {header.author}
            </h2>
          </div>
        </div>
        
        {/* Footer Info Area */}
        <div className="md:col-span-6 row-span-1 swiss-border-r flex items-center p-6">
          <div className="font-bold text-xl uppercase tracking-tighter">
            Divisi {header.division}
          </div>
        </div>
        <div className="md:col-span-6 row-span-1 flex items-center p-6 bg-hatiga-green text-background">
          <div className="font-bold text-xl uppercase tracking-tighter text-background">
            Area {header.area}
          </div>
        </div>
        
      </SwissGrid>
    </SlideContainer>
  );
}
