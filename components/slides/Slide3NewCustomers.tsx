import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide3NewCustomers() {
  const { newCustomers } = reportData;
  
  return (
    <SlideContainer>
      <SwissGrid className="flex flex-col">
        <SwissHeader 
          title="Akuisisi Baru" 
          subtitle="Pelanggan"
          rightElement={<span>Q1-Q2 / 2026</span>}
        />
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Large Typography */}
          <div className="swiss-border-r p-6 md:p-12 flex flex-col justify-between">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mt-4 md:mt-8">
              Ekspansi<br />
              <span className="text-hatiga-green">Jaringan.</span>
            </h1>
            
            <div className="mt-12 max-w-sm">
              <p className="font-mono text-sm leading-relaxed text-graphite uppercase">
                Data Akuisisi Semester 1
              </p>
            </div>
          </div>
          
          {/* Right Column - List of hospitals */}
          <div className="flex flex-col">
            {newCustomers.map((customer, idx) => (
              <div 
                key={idx} 
                className="flex-1 swiss-border-b p-4 md:p-6 flex flex-col justify-center relative group hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <div className="font-mono text-xs mb-1 md:mb-2 opacity-50">NO. {String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter truncate pr-8">
                  {customer}
                </h3>
                {/* Arrow indicator that appears on hover */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}
