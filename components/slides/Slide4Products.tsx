import React from "react";
import { SlideContainer, SlideCard, SlideTitle } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { PackagePlus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide4Products() {
  const { addedProducts } = reportData;
  
  return (
    <SlideContainer>
      <SlideCard>
        <SlideTitle 
          title="Penambahan Item Produk" 
          subtitle="Ekspansi portfolio produk pada pelanggan existing" 
        />
        
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {addedProducts.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-transparent pointer-events-none" />
                
                <div className="w-24 h-24 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 z-10">
                  <PackagePlus size={48} className="text-blue-400" />
                </div>
                
                <div className="flex-1 text-center md:text-left z-10">
                  <h3 className="text-xl text-slate-400 uppercase tracking-widest font-semibold mb-2">Pelanggan</h3>
                  <p className="text-4xl font-bold text-white mb-6">{item.customer}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 z-10">
                  <Plus size={24} className="text-gold" />
                </div>
                
                <div className="flex-1 text-center md:text-right z-10">
                  <h3 className="text-xl text-slate-400 uppercase tracking-widest font-semibold mb-2">Item Tambahan</h3>
                  <p className="text-4xl font-extrabold text-gold">{item.product}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-16 grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-slate-700 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
