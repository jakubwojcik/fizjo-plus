"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TimelineItemProps {
  children: ReactNode;
  index: number;
}

export const TimelineItem = ({ children, index }: TimelineItemProps) => (
  <li className="relative border-l-2 border-base-300 pb-4 pl-6 last:pb-0">
    <div className="absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-primary bg-white font-bold">
      {index}
    </div>
    {children}
  </li>
);

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => (
  <ul className={cn("ml-4 mt-4", className)}>{children}</ul>
);
