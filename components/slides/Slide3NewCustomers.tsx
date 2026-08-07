import React from "react";
import { SlideContainer, SlideCard, SlideTitle } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide3NewCustomers() {
  const { newCustomers } = reportData;
  
  return (
    <SlideContainer>
      <SlideCard>
        <SlideTitle 
          title="Omset Pelanggan Baru" 
          subtitle="Daftar akuisisi rumah sakit dan instansi medis baru" 
        />
        
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newCustomers.map((customer, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-slate-800/60 border border-slate-700 hover:border-gold/50 transition-colors p-6 rounded-2xl flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all">
                    <Building2 className="text-slate-400 group-hover:text-gold transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{customer}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-emerald-400">
                      <CheckCircle2 size={16} />
                      <span>Berhasil Diakuisisi</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <p className="text-blue-200 text-lg">
                Total penambahan pelanggan baru memberikan dampak signifikan pada lonjakan persentase pencapaian di bulan Juni (130%) dan Juli (147%).
              </p>
            </div>
          </div>
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
