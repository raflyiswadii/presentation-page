import React from "react";
import { SlideContainer, SlideCard } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { Star, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide6Highlight() {
  const { highlight } = reportData;
  
  return (
    <SlideContainer>
      <SlideCard className="items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-slate-800/40 to-slate-900/80">
        
        {/* Animated stars background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold"
              initial={{ 
                x: Math.random() * 800 - 400, 
                y: Math.random() * 600 - 300,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0.1
              }}
              animate={{ 
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <div className="z-10 flex flex-col items-center">
          <div className="mb-6 flex items-center justify-center p-4 bg-gold/10 rounded-full border border-gold/30">
            <Sparkles size={48} className="text-gold" />
          </div>
          
          <h2 className="text-2xl text-slate-400 uppercase tracking-[0.3em] font-semibold mb-8">
            Produk Sorotan (Highlight)
          </h2>
          
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="px-12 py-8 bg-gradient-to-r from-gold/20 via-yellow-500/10 to-gold/20 border-y-2 border-gold/50 w-full max-w-2xl backdrop-blur-sm"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {highlight[0]}
            </h1>
          </motion.div>
          
          <div className="mt-12 flex items-center gap-3 text-slate-300">
            <TrendingUp className="text-emerald-400" size={24} />
            <p className="text-lg">Berkontribusi signifikan terhadap pertumbuhan omset semester ini.</p>
          </div>
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
