import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide5Churn() {
  const { churn } = reportData;
  const churnRate = churn.churnedDetails[0].value;
  
  return (
    <SlideContainer>
      <SwissGrid className="flex flex-col">
        <SwissHeader 
          title="Customer Churn" 
          subtitle="Retention Metrics"
          rightElement={<span>2026</span>}
        />
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
          
          <div className="md:col-span-8 p-6 md:p-12 flex flex-col justify-center swiss-border-r overflow-hidden">
            <h1 className="text-9xl md:text-[14rem] lg:text-[18rem] font-bold leading-none tracking-tighter text-foreground -ml-2">
              {churnRate.toString().replace('.', ',')}
            </h1>
            <p className="font-mono text-xl uppercase tracking-widest text-graphite mt-4 max-w-lg">
              (RS Bedah Kurnia Pringsewu)
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col">
            <div className="flex-1 p-6 md:p-12 swiss-border-b flex flex-col justify-center">
              <p className="font-mono text-sm uppercase mb-4 opacity-70">Total Pelanggan</p>
              <h2 className="text-6xl font-bold font-mono tracking-tighter">{churn.totalCustomers2026}</h2>
            </div>
            <div className="flex-1 p-6 md:p-12 bg-foreground text-background flex flex-col justify-center">
              <p className="font-mono text-sm uppercase mb-4 opacity-70">Pelanggan Berhenti</p>
              <h2 className="text-6xl font-bold font-mono tracking-tighter text-hatiga-green">{churn.churnedCustomers}</h2>
            </div>
          </div>
          
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}
