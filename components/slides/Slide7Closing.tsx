"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { SlideContainer, SwissGrid } from "../ui/SlideComponents";
import { CountingNumber } from "../ui/CountingNumber";
import { reportData } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Slide7Closing() {
  const { header, omset, newCustomers, churn } = reportData;

  const formatShortRupiah = (value: number) => {
    if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(2)}M`;
    if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}Jt`;
    return `Rp ${value}`;
  };

  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-5 relative overflow-hidden">

        {/* Left — 3/5: Bold typographic statement */}
        <motion.div
          className="md:col-span-3 flex flex-col justify-between p-6 md:p-10 lg:p-14 swiss-border-r relative overflow-hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Decorative background number — very faint */}
          <motion.div
            variants={fadeIn}
            className="absolute -bottom-8 -left-4 text-[18rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none"
            aria-hidden
          >
            07
          </motion.div>

          {/* Top label */}
          <motion.div variants={fadeUp} className="font-mono text-xs uppercase tracking-widest text-graphite">
            Laporan Selesai — {header.period}
          </motion.div>

          {/* Main heading */}
          <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 my-6">
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] text-foreground"
            >
              Terima<br />
              <span className="text-hatiga-green">Kasih.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-mono text-sm md:text-base text-graphite leading-relaxed max-w-xs"
            >
              "Hasil nyata,<br />dari kerja nyata."
            </motion.p>
          </div>

          {/* Bottom — presenter identity */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="font-bold text-lg md:text-xl uppercase tracking-tighter text-foreground">{header.author}</p>
            <p className="font-mono text-xs text-graphite uppercase tracking-widest">
              {header.division} Division — Area {header.area}
            </p>
          </motion.div>
        </motion.div>

        {/* Right — 2/5: Summary panel */}
        <motion.div
          className="md:col-span-2 flex flex-col bg-foreground text-background"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Summary label */}
          <motion.div
            variants={fadeUp}
            className="px-6 py-4 border-b border-background/10 font-mono text-xs uppercase tracking-widest opacity-60"
          >
            Ringkasan Semester 1
          </motion.div>

          {/* Stats rows */}
          <div className="flex-1 flex flex-col divide-y divide-background/10">

            <motion.div variants={fadeUp} className="flex-1 flex flex-col justify-center px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">Total Target</p>
              <p className="text-xl md:text-2xl font-bold font-mono text-background/70 tracking-tighter">
                {formatShortRupiah(omset.targetTotal)}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex-1 flex flex-col justify-center px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">Total Pencapaian</p>
              <p className="text-xl md:text-2xl font-bold font-mono text-hatiga-green tracking-tighter">
                <CountingNumber value={omset.semester1} formatString="rupiah" duration={1.8} />
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex-1 flex flex-col justify-center px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">Customer Baru</p>
              <p className="text-xl md:text-2xl font-bold font-mono text-background tracking-tighter">
                {newCustomers.length} Rumah Sakit
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex-1 flex flex-col justify-center px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">Churn</p>
              <p className="text-xl md:text-2xl font-bold font-mono tracking-tighter" style={{ color: churn.churnedCustomers > 0 ? "#ef4444" : "var(--color-hatiga-green)" }}>
                {churn.churnedCustomers} Customer
              </p>
            </motion.div>

          </div>

          {/* Bottom accent bar */}
          <motion.div
            variants={fadeIn}
            className="h-2 bg-hatiga-green"
          />
        </motion.div>

      </SwissGrid>
    </SlideContainer>
  );
}
