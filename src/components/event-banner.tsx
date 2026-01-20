import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/src/lib/utils"

export interface EventBannerProps {
  /** URL for the background image */
  backgroundImage: string
  /** URL for the company/brand logo */
  logoImage: string
  /** Alt text for the logo */
  logoAlt?: string
  /** Badge text (e.g., "Invite-Only") */
  badgeText: string
  /** Event type description (e.g., "An Executive Roundtable - Lunch") */
  eventType: string
  /** URL for the small circular icon */
  iconImage?: string
  /** Alt text for the icon */
  iconAlt?: string
  /** Main title of the event */
  title: string
  /** Subtitle/description of the event */
  subtitle: string
  /** Event date */
  date: string
  /** Event location/venue */
  location: string
  /** Optional className for additional styling */
  className?: string
}

export function EventBanner({
  backgroundImage,
  logoImage,
  logoAlt = "Logo",
  badgeText,
  eventType,
  iconImage,
  iconAlt = "Icon",
  title,
  subtitle,
  date,
  location,
  className,
}: EventBannerProps) {
  return (
    <div
      className={cn(
        "relative px-[100px] py-[54px] ",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top Section - Logo */}
        <div className="pb-[68px]">
          <img
            src={logoImage || "/simplilearn-logo.svg"}
            alt={logoAlt}
            className="h-[86px] w-auto object-contain"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2">
          {/* Badge and Event Type Row */}
          <div className="flex items-center gap-2 flex-wrap pb-[18px]">
            <span className="inline-flex items-center px-[10px] py-[22px] bg-[#00FFFF] text-[#25286A] text-[25px] font-bold rounded pb-[18px] h-[56px] w-auto">
              {badgeText}
            </span>
            <span className="text-[#00FFFF] text-[24px] font-bold">{eventType}</span>
          </div>
<div className="max-w-[750px] pb-[44px]">
          {/* Title */}
          <h2 className="text-[#F5AB40] text-[46px] font-black leading-[130%]">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-[#f5a623] text-[46px] font-medium leading-[130%]">
            {subtitle}
          </p>
          </div>
        </div>

        {/* Bottom Section - Date and Location */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Calendar className="h-[26px] w-[26px] text-[#ffffff]" />
            <span className="text-white text-[30px] font-black">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-[26px] w-[26px] text-[#ffffff]" />
            <span className="text-white text-[30px] font-black">{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
