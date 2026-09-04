import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";

export default function Slide5Prospek() {
  const prospek = [
    "RSUD. Tubaba",
    "RSUD. Manggala",
    "RSU Mutiara Bunda",
    "RSU Ummi Athaya",
    "PMI Tubaba",
    "RSUD Sumber Sari Bantul",
    "RSU Muhammadiyah"
  ];

  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-12 grid-rows-6">
        <div className="md:col-span-12 row-span-1">
          <SwissHeader
            title="Daftar Prospek"
            subtitle="Target rumah sakit dan klinik selanjutnya"
          />
        </div>

        <div className="md:col-span-12 row-span-5 p-6 md:p-12 flex flex-col justify-start bg-surface overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            {prospek.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-background border border-border p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex shrink-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-surface border border-border rounded-full text-accent font-mono font-bold text-base md:text-lg group-hover:bg-accent group-hover:text-primary transition-colors">
                  {index + 1}
                </div>
                <h3 className="font-body text-lg md:text-2xl text-text-primary group-hover:text-secondary transition-colors">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}