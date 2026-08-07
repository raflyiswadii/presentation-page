import React from "react";
import { SlideContainer, SlideCard, SlideTitle } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { Users, UserMinus, AlertTriangle } from "lucide-react";

export default function Slide5Churn() {
  const { churn } = reportData;
  
  // Calculate percentage correctly: 1 / 55 = ~0.018 or 1.8%
  // The data says "0,01" which might mean 1% or 0.01 fraction. We'll show the exact fraction from data.
  const churnRate = churn.churnedDetails[0].value;
  
  return (
    <SlideContainer>
      <SlideCard>
        <SlideTitle 
          title="Customer Churn" 
          subtitle="Tingkat retensi pelanggan sepanjang tahun 2026" 
        />
        
        <div className="flex-1 flex flex-col items-center justify-center">
          
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Total Customers */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="p-4 bg-blue-500/10 rounded-full mb-4 text-blue-400">
                <Users size={40} />
              </div>
              <p className="text-slate-400 text-lg mb-2">Jumlah Pelanggan Aktif</p>
              <p className="text-6xl font-bold text-white">{churn.totalCustomers2026}</p>
            </div>
            
            {/* Churned Customers */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-red-500/50" />
              <div className="p-4 bg-red-500/10 rounded-full mb-4 text-red-400">
                <UserMinus size={40} />
              </div>
              <p className="text-slate-400 text-lg mb-2">Pelanggan Berhenti</p>
              <p className="text-6xl font-bold text-red-400">{churn.churnedCustomers}</p>
            </div>
            
          </div>
          
          {/* Detailed breakdown */}
          <div className="w-full max-w-4xl bg-slate-900/80 border border-slate-700 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">{churn.churnedDetails[0].name}</h4>
                <p className="text-slate-400">Satu-satunya pelanggan yang berhenti di tahun ini</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-slate-400 text-sm mb-1">Tingkat Churn</p>
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-2xl font-bold text-white">{churnRate.toString().replace('.', ',')}</span>
              </div>
            </div>
          </div>
          
          <p className="text-emerald-400 mt-8 text-center max-w-2xl font-medium">
            Tingkat retensi pelanggan sangat baik, menandakan kepuasan yang tinggi terhadap layanan dan produk yang diberikan.
          </p>
          
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
