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
    <section className={cn("bg-[#e5e9f7] py-[40px] md:py-[54px] px-[20px] md:px-[100px]", className)}>
      <h2 className="max-w-full md:max-w-[367px] text-[#e9a23b] font-black text-[28px] md:text-[40px] leading-[28px] md:leading-[40px] font-satoshi mb-4">
        {title}
      </h2>

      <p className="max-w-full md:max-w-[1240px] text-[#1a1a1a] font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25px] font-satoshi mt-[20px] md:mt-[27px]">
        {subtitle}
      </p>

      {/* Boxes / Cards grid with responsive layout */}
      <div className="max-w-[1174px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-x-[10px] md:gap-y-[23px] bg-white rounded-[8px] mt-[20px] md:mt-[26px] p-[16px] md:p-0">
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
    <div className="w-full md:w-[380px] bg-white rounded-[6px] md:rounded-[8px] px-4 md:px-6 py-4 md:py-6 shadow-[0_4px_34px_0_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-[12px] md:gap-[16px] mb-[16px] md:mb-[22px]">
        <Icon className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] text-[#3b82f6]" strokeWidth={1.5} />
        <h3 className="font-satoshi font-bold text-[20px] md:text-[24px] leading-[24px] md:leading-[30px] text-[#1a1a1a]">
          {item.title}
        </h3>
      </div>
     <div className="text-[#000000] font-satoshi font-medium text-[16px] md:text-[22px] leading-[24px] md:leading-[30px] max-w-full md:max-w-[339px]">
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
