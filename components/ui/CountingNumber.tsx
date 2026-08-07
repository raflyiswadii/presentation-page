import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface CountingNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  formatString?: "number" | "rupiah";
  as?: React.ElementType;
  [x: string]: any;
}

export function CountingNumber({ 
  value, 
  suffix = "", 
  duration = 1.5, 
  className = "", 
  formatString = "number",
  as: Component = "span",
  ...props
}: CountingNumberProps) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const formatRupiah = (val: number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(val);
    };

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          const formatted = formatString === "rupiah" 
            ? formatRupiah(Math.round(latest))
            : Math.round(latest);
          ref.current.textContent = `${formatted}${suffix}`;
        }
      },
    });

    return controls.stop;
  }, [value, duration, suffix, formatString]);

  return <Component ref={ref} className={className} {...props}>0{suffix}</Component>;
}
