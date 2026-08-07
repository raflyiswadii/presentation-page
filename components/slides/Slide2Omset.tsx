"use client";

import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";
import { CountingNumber } from "../ui/CountingNumber";
import { 
  ComposedChart, 
  Bar, 
  Line, 
  Scatter,
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { motion } from "framer-motion";

const CustomAnimatedScatterLabel = (props: any) => {
  const { cx, cy, payload } = props;
  const percentage = payload.percentage;
  
  return (
    <CountingNumber 
      as={motion.text}
      initial={{ y: cy + 50, opacity: 0 }}
      animate={{ y: cy - 10, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      x={cx} 
      fill="var(--color-foreground)" 
      textAnchor="middle" 
      fontFamily="var(--font-geist-mono)"
      fontSize={12}
      fontWeight="bold"
      value={percentage} 
      suffix="%" 
      duration={1.5}
      style={{
        paintOrder: "stroke fill",
        stroke: "var(--color-background)",
        strokeWidth: 4,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }}
    />
  );
};

const GlassmorphismTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const formatRupiah = (val: number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(val);
    };

    return (
      <div className="bg-background/60 backdrop-blur-md border border-hatiga-green/30 text-foreground p-3 md:p-4 rounded-lg shadow-xl min-w-[200px] z-50 relative">
        <p className="font-bold text-sm uppercase tracking-widest border-b border-hatiga-green/20 pb-2 mb-3">{label}</p>
        <div className="flex flex-col gap-2 font-mono text-xs">
          <div className="flex justify-between items-center gap-4">
            <span className="opacity-70">Target</span>
            <span className="font-bold text-hatiga-green">{formatRupiah(data.target)}</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="opacity-70">Pencapaian</span>
            <span className="font-bold">{formatRupiah(data.achieved)}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const CustomBar = (props: any) => {
  const { x, y, width, height } = props;
  const bottomY = y + height;
  
  return (
    <g>
      <motion.rect
        x={x}
        width={width}
        initial={{ y: bottomY, height: 0 }}
        animate={{ y: y, height: height }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        fill="var(--color-foreground)"
      />
    </g>
  );
};

export default function Slide2Omset() {
  const { omset } = reportData;
  
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatShortRupiah = (value: number) => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}M`;
    if (value >= 1000000) return `${(value / 1000000).toFixed(0)}Jt`;
    return `${value}`;
  };

  // Custom tooltips don't fit the brutalist aesthetic well unless highly customized.
  // We'll rely on the stark visual comparison.
  
  return (
    <SlideContainer>
      <SwissGrid className="flex flex-col">
        <SwissHeader 
          title="Pencapaian Omset" 
          subtitle="Semester 1"
          rightElement={<span>IDR / 2026</span>}
        />
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Data Column */}
          <div className="md:col-span-4 swiss-border-r flex flex-col min-h-0">
            <div className="flex-1 p-4 md:p-6 lg:p-8 swiss-border-b flex flex-col justify-center min-h-0">
              <p className="font-mono text-xs text-graphite uppercase mb-1">Total Target</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter font-mono truncate selectable">
                <CountingNumber value={omset.targetTotal} formatString="rupiah" duration={1.5} />
              </h3>
            </div>
            
            <div className="flex-1 p-4 md:p-6 lg:p-8 swiss-border-b flex flex-col justify-center bg-foreground text-background min-h-0">
              <p className="font-mono text-xs uppercase opacity-70 mb-1">Pencapaian</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter font-mono text-hatiga-green truncate selectable">
                <CountingNumber value={omset.semester1} formatString="rupiah" duration={1.5} />
              </h3>
            </div>
            
            <div className="flex-[2] p-4 md:p-6 lg:p-8 flex flex-col justify-center items-start overflow-hidden min-h-0">
              <p className="font-mono text-xs text-graphite uppercase mb-2">Persentase Target</p>
              <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold text-hatiga-green leading-none tracking-tighter -ml-1 selectable">
                <CountingNumber value={omset.percentage} suffix="%" duration={1.5} />
              </h1>
            </div>
          </div>
          
          {/* Right Chart Column */}
          <div className="md:col-span-8 p-4 md:p-6 lg:p-12 flex flex-col min-h-0">
            <div className="flex flex-wrap justify-between items-end mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">Tren Bulanan</h3>
              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-foreground"></div>
                  <span>Pencapaian</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-[2px] bg-hatiga-green"></div>
                  <span>Target ({formatShortRupiah(omset.targetPerMonth)})</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-h-0 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={omset.monthly} margin={{ top: 40, right: 0, bottom: 20, left: 0 }}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={true}
                    tickLine={false}
                    tick={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, fill: 'var(--color-foreground)' }}
                    dy={16}
                    height={60}
                    tickMargin={10}
                    stroke="var(--color-foreground)"
                  />
                  <Tooltip 
                    content={<GlassmorphismTooltip />} 
                    cursor={{ fill: 'var(--color-hatiga-green)', opacity: 0.1 }}
                  />
                  {/* Brutalist design: no Y-axis labels, we rely on the visual scale */}
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="var(--color-hatiga-green)" 
                    strokeWidth={3}
                    strokeDasharray="10 8"
                    dot={{ strokeWidth: 3, r: 5, fill: "var(--color-background)", stroke: "var(--color-hatiga-green)" }}
                    activeDot={{ r: 8, fill: "var(--color-hatiga-green)", stroke: "var(--color-background)", strokeWidth: 2 }}
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="achieved" 
                    fill="var(--color-foreground)" 
                    isAnimationActive={false}
                    shape={<CustomBar />}
                  />
                  <Scatter 
                    dataKey="achieved" 
                    shape={<CustomAnimatedScatterLabel />} 
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}
