import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";

export default function Slide2Omset() {
  const data = [
    { label: "Minggu I", value: 186191530 },
    { label: "Minggu II", value: 110575300 },
    { label: "Minggu III", value: 80600000 },
    { label: "Minggu IV", value: 220775500 },
  ];

  const total = 598142330;

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID').format(val);
  };

  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-12 grid-rows-6">
        <div className="md:col-span-12 row-span-1">
          <SwissHeader
            title="Omset Penjualan"
            subtitle="Rincian Nominal per Minggu"
          />
        </div>

        <div className="md:col-span-12 row-span-5 p-6 md:p-12 flex flex-col justify-center bg-surface">
          <div className="w-full max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-text-secondary font-mono text-sm uppercase tracking-wider font-semibold">
                  <th className="py-4 px-2 font-semibold">Minggu</th>
                  <th className="py-4 px-2 text-right font-semibold">Nominal</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-black/5 transition-colors">
                    <td className="py-6 px-2 font-display font-medium text-2xl text-text-primary">{row.label}</td>
                    <td className="py-6 px-2 font-mono font-semibold text-2xl text-right text-text-primary">{formatIDR(row.value)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-text-primary">
                  <td className="py-8 px-2 font-display font-medium text-3xl text-text-primary uppercase tracking-tighter">Total</td>
                  <td className="py-8 px-2 font-mono font-bold text-3xl text-right text-accent">{formatIDR(total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}