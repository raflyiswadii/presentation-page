import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

export default function Slide3OmsetChart() {
  const data = [
    { name: "M 1", label: "Minggu I", value: 186191530 },
    { name: "M 2", label: "Minggu II", value: 110575300 },
    { name: "M 3", label: "Minggu III", value: 80600000 },
    { name: "M 4", label: "Minggu IV", value: 170825500 },
    { name: "TOTAL", label: "Total Keseluruhan", value: 548192330 },
  ];

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatCompact = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      notation: "compact",
      compactDisplay: "short",
    }).format(val);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface p-4 border border-border shadow-lg font-mono rounded-lg">
          <p className="text-text-secondary mb-1">{payload[0].payload.label}</p>
          <p className="text-text-primary font-bold text-lg">
            {formatIDR(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-12 grid-rows-6">
        <div className="md:col-span-12 row-span-1">
          <SwissHeader
            title="Grafik Penjualan"
            subtitle="Tren Omset per Minggu"
          />
        </div>

        <div className="md:col-span-12 row-span-5 p-6 md:p-12 flex flex-col justify-center bg-surface">
          <div className="w-full h-full max-h-[600px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: 'var(--color-text-secondary)', fontFamily: 'var(--font-jetbrains)' }}
                  axisLine={{ stroke: 'var(--color-border)' }}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  tickFormatter={formatCompact}
                  tick={{ fill: 'var(--color-text-secondary)', fontFamily: 'var(--font-jetbrains)' }}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-background)', opacity: 0.5 }} />
                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                  barSize={60}
                  animationDuration={1500}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === "TOTAL" ? "var(--color-secondary)" : "var(--color-accent)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}