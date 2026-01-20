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
        "w-[390px] h-[376px] bg-white rounded-[8px] p-7 flex flex-col justify-between shadow-[0_4px_34px_0_rgba(0,0,0,0.15)]",
        className
      )}
    >
      {/* Title */}
      <h3
        className="
          max-w-[296px]
          font-satoshi font-black text-[24px] leading-[24px] text-[#1D4DF4] 
          whitespace-pre-line
        "
      >
        {title}
      </h3>

      {/* Speaker & Description */}
      <div className="max-w-[343px]">
        {speaker && (
          <p className="font-satoshi font-bold text-[20px] leading-[30px] text-black mb-[22px]">
            {speaker}
          </p>
        )}
        <p className="font-satoshi font-medium text-[20px] leading-[30px] text-black">
          {description}
        </p>
      </div>
    </div>
  )
}
