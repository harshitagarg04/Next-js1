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
        "relative px-[20px] py-[40px] md:px-[100px] md:py-[54px] min-h-screen",
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
        <div className="p-[5px] md:pt-0 md:pl-0 pb-[20px] md:pb-[68px]">
          <img
            src={logoImage || "/simplilearn-logo.svg"}
            alt={logoAlt}
            className="h-[40px] md:h-[86px] w-auto object-contain"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2">
          {/* Mobile: Badge Above Event Type */}
          <div className="md:hidden flex flex-col items-center gap-[8px] pb-[12px] items-start">
            {/* Badge */}
            <span className="
              inline-flex
              items-center
              h-[28px]
              px-[8px]
              rounded-[4px]
              bg-[#00FFFF]
              text-[#25286A]
              text-[12px]
              font-bold
              w-fit
            ">
              {badgeText}
            </span>
            
            {/* Event Type */}
            <span
              className="
                max-w-[181px]
                font-satoshi font-bold
                text-[20px]
                leading-[28px]
                text-[#00FFFF]
                text-start
                md:text-center
              "
            >
              {eventType}
            </span>
          </div>

          {/* Desktop: Badge + Event Type Inline */}
          <div className="hidden md:flex items-center gap-2 flex-wrap pb-[12px] md:pb-[18px]">
            {/* Badge */}
            <span className="
              inline-flex
              items-center
              h-[28px] md:h-[56px]
              px-[8px] md:px-[14px]
              rounded-[4px] md:rounded-[8px]
              bg-[#00FFFF]
              text-[#25286A]
              text-[12px] md:text-[25px]
              font-bold
              w-fit
            ">
              {badgeText}
            </span>
            
            {/* Event Type */}
            <span
              className="
                font-satoshi font-bold
                text-[20px] md:text-[24px]
                leading-[28px] md:leading-[32px]
                text-[#00FFFF]
              "
            >
              {eventType}
            </span>
          </div>

          <div className="max-w-[302px] md:max-w-[750px] pb-[30px] md:pb-[44px]">
            {/* Title */}
            <h2
              className="
                font-satoshi
                font-black
                text-[32px] md:text-[46px]
                leading-[40px] md:leading-[130%]
                text-[#F5AB40]
              "
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p
              className="
                font-satoshi
                font-bold
                text-[32px] md:text-[46px]
                leading-[40px] md:leading-[130%]
                text-[#F5AB40]
              "
            >
              {subtitle}
            </p>
          </div>

        </div>

        {/* Bottom Section - Date and Location */}
        <div className="flex flex-col gap-2 md:gap-1.5">
          <div className="flex items-center gap-2">
            <Calendar className="h-[20px] w-[20px] md:h-[26px] md:w-[26px] text-[#ffffff]" />
            <span className="text-white text-[18px] md:text-[30px] font-black">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-[20px] w-[20px] md:h-[26px] md:w-[26px] text-[#ffffff]" />
            <span className="text-white text-[18px] md:text-[30px] font-black">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
