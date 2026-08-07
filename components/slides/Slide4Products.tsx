import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide4Products() {
  const { addedProducts } = reportData;
  
  return (
    <SlideContainer>
      <SwissGrid className="flex flex-col">
        <SwissHeader 
          title="Penambahan Item" 
          subtitle="Portfolio Produk"
          rightElement={<span>EXISTING CLIENT / 2026</span>}
        />
        
        <div className="flex-1 flex flex-col justify-center p-6 md:p-12 relative overflow-hidden">
          
          <div className="absolute top-12 left-12 font-mono text-xs uppercase tracking-widest text-graphite">
            // Cross-selling metrics
          </div>
          
          {addedProducts.map((item, idx) => (
            <div key={idx} className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
              <div className="flex-1">
                <p className="font-mono text-sm uppercase mb-4 opacity-70">Pelanggan</p>
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                  {item.customer}
                </h2>
              </div>
              
              <div className="hidden md:block font-mono text-4xl text-hatiga-green">
                +
              </div>
              
              <div className="flex-1 md:text-right mt-12 md:mt-0">
                <p className="font-mono text-sm uppercase mb-4 opacity-70">Item Tambahan</p>
                <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-hatiga-green">
                  {item.product}
                </h2>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-0 left-0 w-full flex">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-16 flex-1 swiss-border-r swiss-border-t bg-foreground opacity-5"></div>
            ))}
          </div>
          
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}
