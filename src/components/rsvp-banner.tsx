"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import toast from 'react-hot-toast'

interface RSVPBannerProps {
  backgroundImage: string
  logoImage: string
  logoAlt?: string
  headingText: string
  inputPlaceholder: string
  buttonText: string
  copyrightText: string
  className?: string
}

export function RSVPBanner({
  backgroundImage,
  logoImage,
  logoAlt = "Logo",
  headingText,
  inputPlaceholder,
  buttonText,
  copyrightText,
  className,
}: RSVPBannerProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      try {
        console.log("Submitting RSVP Banner email:", email);
        
        const response = await fetch('/api/airtable', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        console.log("RSVP Banner API response status:", response.status);
        const result = await response.json();
        console.log("RSVP Banner API response data:", result);
        
        if (response.ok) {
          toast.success('Thank you for your RSVP!');
          setEmail("");
        } else {
          console.error("RSVP Banner API error:", result);
          toast.error(result.error || 'Failed to submit RSVP. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting RSVP Banner email:', error);
        toast.error('There was an error submitting your RSVP. Please try again.');
      }
    }
  }

  return (
<div className={cn("relative w-full overflow-hidden", className)}>
  {/* Background Image + overlay */}
  <div className="absolute inset-0 w-[1440px] h-[532px] -left-[50px]">
    <Image
      src={backgroundImage || "/placeholder.svg"}
      alt="Background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* Content over the image */}
  <div className="relative z-10 px-[100px] py-[54px] flex flex-col h-[532px]">
    {/* Heading */}
    <h2 className="text-[#ffffff] font-satoshi font-black text-[30px] leading-[30px] mb-[37px]">
      {headingText}
    </h2>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
      <div className="relative flex-1">
        <div className="relative h-[81px]">
          <Mail className="absolute left-[20px] top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="email"
            placeholder={inputPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[606px] h-[81px] rounded-[8px] border border-[#0000004A] bg-[#E7E7E7E5] px-[50px] text-base"
          />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="w-[251px] h-[81px] rounded-[8px] font-semibold text-[18px] leading-[39px] text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(245, 171, 64, 0.9) 0%, #F5AB40 100%)",
        }}
      >
        {buttonText}
      </Button>
    </div>


{/* Logo + Copyright inline */}
<div className="mt-[129px] flex items-center gap-[369px]">
  {/* Logo */}
  <div className="relative w-[280px] h-[150px]">
    <Image
      src={logoImage || "/placeholder.svg"}
      alt={logoAlt}
      fill
      className="object-contain object-left"
    />
  </div>

  {/* Copyright */}
  <p
    className="
      font-satoshi
      font-medium
      text-[18px]
      leading-[20px]
      tracking-[2%]
      text-white
      w-[549px] h-[27px]
    "
  >
    {copyrightText}
  </p>
</div>
  </div>
</div>

  )
}
