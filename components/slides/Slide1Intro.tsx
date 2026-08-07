import React from "react";
import { SlideContainer, SlideCard } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { Briefcase, MapPin, User, Calendar } from "lucide-react";

export default function Slide1Intro() {
  const { header } = reportData;
  
  return (
    <SlideContainer>
      <SlideCard className="items-center justify-center text-center p-16 border-t-4 border-t-gold relative overflow-hidden">
        {/* Subtle background icon */}
        <Briefcase className="absolute -right-20 -bottom-20 w-96 h-96 text-slate-800/30 -rotate-12 pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mb-8 shadow-lg shadow-gold/20">
            <User size={40} className="text-slate-900" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            {header.title}
          </h1>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-800 border border-slate-700 text-gold font-medium mb-12">
            <Calendar size={18} />
            <span className="text-xl">{header.semester} ({header.period})</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-8">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <Briefcase size={28} className="text-slate-400 mb-3" />
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Divisi</p>
              <p className="text-2xl font-bold text-white mt-1">{header.division}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <MapPin size={28} className="text-slate-400 mb-3" />
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Area</p>
              <p className="text-2xl font-bold text-white mt-1">{header.area}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 ring-1 ring-gold/30">
              <User size={28} className="text-gold mb-3" />
              <p className="text-sm text-gold uppercase tracking-wider font-semibold">Disusun Oleh</p>
              <p className="text-2xl font-bold text-white mt-1">{header.author}</p>
            </div>
          </div>
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
