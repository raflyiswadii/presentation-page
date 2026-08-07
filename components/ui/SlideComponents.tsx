import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SlideContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("w-full h-full flex flex-col justify-center", className)}>
      {children}
    </div>
  );
}

export function SlideCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "w-full h-full bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 flex flex-col shadow-2xl",
      className
    )}>
      {children}
    </div>
  );
}

export function SlideTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-8 border-b border-slate-700/50 pb-6">
      <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-2 text-lg">{subtitle}</p>}
    </div>
  );
}
