import type { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils"

export interface ExploreItem {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export interface WhatWeExploreProps {
  title?: string;
  subtitle?: string;
  items: ExploreItem[];
  className?: string;
}

export function WhatWeExplore({
  title = "What We'll Explore",
  subtitle = "The critical shifts every enterprise must plan for:",
  items,
  className,
}: WhatWeExploreProps) {
  return (
    <section className={cn("bg-[#e5e9f7] py-[54px] px-[100px]", className)}>
      <h2 className="max-w-[367px] text-[#e9a23b] font-black text-[40px] leading-[40px] font-satoshi mb-4">
        {title}
      </h2>

      <p className="max-w-[1240px] text-[#1a1a1a] font-medium text-[25px] leading-[25px] font-satoshi mt-[27px]">
        {subtitle}
      </p>

      {/* Boxes / Cards grid with exact 26px gap from subtitle */}
      <div className="max-w-[1174px] mx-auto grid grid-cols-3 gap-x-[10px] gap-y-[23px] bg-white rounded-[8px] mt-[26px]">
        {items.map((item, index) => (
          <ExploreCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}


interface ExploreCardProps {
  item: ExploreItem;
}

function ExploreCard({ item }: ExploreCardProps) {
  const Icon = item.icon;

  return (
    <div className="w-[380px] bg-white rounded-[8px] px-6 py-6 shadow-[0_4px_34px_0_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-[16px] mb-[22px]">
        <Icon className="w-[48px] h-[48px] text-[#3b82f6]" strokeWidth={1.5} />
        <h3 className="font-satoshi font-bold text-[24px] leading-[30px] text-[#1a1a1a]">
          {item.title}
        </h3>
      </div>
     <div className="text-[#000000] font-satoshi font-medium text-[22px] leading-[30px] max-w-[339px]">
  {item.description.map((line, i) => (
    <span key={i}>
      {line}
      {i < item.description.length - 1 && <br />}
    </span>
  ))}
</div>
    </div>
  );
}

