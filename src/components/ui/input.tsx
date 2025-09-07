import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-sm border border-gray-300 bg-white px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none",
        "text-slate-800 placeholder:text-gray-400 placeholder:text-sm selection:bg-blue-100 selection:text-black",
        "focus-visible:border-none focus-visible:ring-navy/80 focus-visible:ring-[1px]",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
