import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SlideContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("w-full h-full flex flex-col p-2 sm:p-3 md:p-5 lg:p-8", className)}>
      {children}
    </div>
  );
}

// Swiss Grid Wrapper - No rounded corners, solid borders
export function SwissGrid({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "w-full h-full bg-background flex flex-col swiss-border",
      className
    )}>
      {children}
    </div>
  );
}

// Header specifically for the Swiss Layout
export function SwissHeader({ title, subtitle, rightElement }: { title: string, subtitle?: string, rightElement?: React.ReactNode }) {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 swiss-border-b">
      <div className="flex gap-4 items-baseline">
        <h2 className="text-xl md:text-2xl font-display font-medium uppercase tracking-tighter text-text-primary">{title}</h2>
        {subtitle && <p className="text-text-secondary font-mono text-sm hidden md:block font-semibold">{subtitle}</p>}
      </div>
      {rightElement && (
        <div className="font-mono text-sm text-text-primary font-semibold">
          {rightElement}
        </div>
      )}
    </div>
  );
}
