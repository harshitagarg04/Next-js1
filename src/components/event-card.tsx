import { cn } from "@/src/lib/utils"

interface EventCardProps {
  title: string
  speaker?: string
  description: string
  className?: string
}

export function EventCard({ title, speaker, description, className }: EventCardProps) {
  return (
    <div
      className={cn(
        "w-full md:w-[390px] h-auto md:h-[376px] bg-white rounded-[6px] md:rounded-[8px] p-5 md:p-7 flex flex-col justify-between shadow-[0_4px_34px_0_rgba(0,0,0,0.15)]",
        className
      )}
    >
      {/* Title */}
      <h3
        className="
          max-w-full md:max-w-[296px]
          font-satoshi font-black text-[18px] md:text-[24px] leading-[20px] md:leading-[24px] text-[#1D4DF4] 
          whitespace-pre-line
          mb-3 md:mb-0
        "
      >
        {title}
      </h3>

      {/* Speaker & Description */}
      <div className="max-w-full md:max-w-[343px]">
        {speaker && (
          <p className="font-satoshi font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-black mb-[16px] md:mb-[22px]">
            {speaker}
          </p>
        )}
        <p className="font-satoshi font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-black">
          {description}
        </p>
      </div>
    </div>
  );
}
