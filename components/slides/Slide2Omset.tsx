"use client";

import React from "react";
import { SlideContainer, SlideCard, SlideTitle } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp, Target, Award } from "lucide-react";

export default function Slide2Omset() {
  const { omset, header } = reportData;
  
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatShortRupiah = (value: number) => {
    if (value >= 1000000000) {
      return `Rp ${(value / 1000000000).toFixed(1)}M`;
    }
    if (value >= 1000000) {
      return `Rp ${(value / 1000000).toFixed(0)}Jt`;
    }
    return `Rp ${value}`;
  };

  return (
    <SlideContainer>
      <SlideCard>
        <SlideTitle 
          title="Pencapaian Omset Individu" 
          subtitle={`Periode: ${header.period}`} 
        />
        
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/50 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <Target size={20} />
              </div>
              <span className="text-slate-400 font-medium">Total Target</span>
            </div>
            <p className="text-2xl font-bold text-white mt-auto">
              {formatRupiah(omset.targetTotal)}
            </p>
          </div>
          
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/50 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gold/20 text-gold rounded-lg">
                <TrendingUp size={20} />
              </div>
              <span className="text-slate-400 font-medium">Pencapaian (Sem 1)</span>
            </div>
            <p className="text-2xl font-bold text-white mt-auto">
              {formatRupiah(omset.semester1)}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gold/20 to-slate-800 rounded-2xl p-6 border border-gold/30 flex flex-col relative overflow-hidden">
            <div className="absolute right-4 bottom-4 opacity-20">
              <Award size={64} className="text-gold" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-gold font-medium">Persentase Pencapaian</span>
            </div>
            <div className="mt-auto flex items-end gap-2">
              <p className="text-5xl font-extrabold text-gold">{omset.percentage}%</p>
              <p className="text-sm text-slate-300 pb-1">dari Total Target</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex-1 min-h-[300px] w-full bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Tren Pencapaian per Bulan</h3>
            <div className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-400">
              Target per bulan: {formatShortRupiah(omset.targetPerMonth)}
            </div>
          </div>
          
          <div className="w-full h-[calc(100%-40px)]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={omset.monthly}
                margin={{ top: 20, right: 20, bottom: 0, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  yAxisId="left"
                  tickFormatter={formatShortRupiah} 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  tickFormatter={(val) => `${val}%`} 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{ fill: '#1e293b' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc' }}
                  formatter={(value: any, name: any) => {
                    if (name === "Pencapaian") return [formatRupiah(value as number), name];
                    if (name === "Target") return [formatRupiah(value as number), name];
                    return [`${value}%`, name];
                  }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                
                <Bar 
                  yAxisId="left" 
                  dataKey="achieved" 
                  name="Pencapaian" 
                  fill="#3b82f6" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="target" 
                  name="Target" 
                  stroke="#eab308" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="percentage" 
                  name="% Pencapaian" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4, strokeWidth: 2, stroke: '#0f172a' }}
                  activeDot={{ r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </SlideCard>
    </SlideContainer>
  );
}
