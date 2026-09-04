import React from "react";
import { motion, Variants } from "framer-motion";
import { SlideContainer, SwissGrid } from "../ui/SlideComponents";
import { reportData } from "@/lib/data";

export default function Slide5Closing() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <SlideContainer>
      <SwissGrid className="relative bg-secondary text-primary overflow-hidden">
        {/* Ambient Botanical Background Effect */}
        <motion.div
          className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-accent opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-border opacity-10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight text-surface">
                Terima Kasih.
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto rounded-pill" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-body text-lg md:text-2xl lg:text-3xl text-primary/80 max-w-2xl mx-auto leading-relaxed"
            >
              Laporan ini disusun sebagai refleksi atas pencapaian dan dasar strategi pertumbuhan ke depan.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-12">
              <p className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase text-surface/60">
                Disusun Oleh
              </p>
              <p className="font-display text-xl md:text-2xl mt-2 text-surface">
                {reportData.header.author}
              </p>
              <p className="font-mono text-xs mt-1 text-surface/60">
                Divisi {reportData.header.division} — Area {reportData.header.area}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}