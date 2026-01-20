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
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={backgroundImage || "/placeholder.svg"}
      alt="Background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* Content over image */}
  <div className="relative z-10 px-[20px] py-[40px] md:px-[100px] md:py-[54px] flex flex-col h-[532px]">
    {/* Heading */}
    <h2 className="text-[#ffffff] font-satoshi font-black text-[20px] md:text-[30px] leading-[20px] md:leading-[30px] mb-[20px] md:mb-[37px] text-left ">
      {headingText}
    </h2>

   <div className="flex flex-col md:flex-row gap-3 md:gap-2 mt-[40px] md:mt-[80px] ml-[0px]">
            {/* Input */}
             <div className="relative w-full md:w-[606px]">
                    <Mail className="absolute left-[14px] top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

                    <input
                        type="email"
                        name="email"
                        placeholder={inputPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-[45px] md:h-[81px] rounded-[3px] md:rounded-[8px] borderborder-[#0000004A] bg-[#E7E7E7E5] px-[40px] md:px-[50px] text-[14px] md:text-[16px] leading-none"
                    />
                </div>

                {/* Button */}
                <Button
                    onClick={handleSubmit}
                    className=" w-[139px] md:w-[251px] h-[45px] md:h-[81px]
                            rounded-[5px] md:rounded-[8px]
                            px-[22px] py-[16px]
                            md:px-6 md:py-0
                           text-white
                            font-semibold
                            text-[14px] md:text-[18px]
                            flex items-center justify-center gap-[10px]
                            leading-none md:leading-[39px]
                             "style={{
          background:
            "linear-gradient(90deg, rgba(245, 171, 64, 0.9) 0%, #F5AB40 100%)",
        }}

                >
                    {buttonText}
                </Button>
            
          </div>

    {/* Logo + Copyright inline */}
    <div className="mt-[80px] md:mt-[129px] flex flex-col md:flex-row items-start md:items-center gap-[20px] md:gap-[369px]">
      {/* Logo */}
      <div className="relative w-[200px] h-[46px] md:w-[280px] md:h-[150px]">
        <Image
          src={logoImage || "/placeholder.svg"}
          alt={logoAlt}
          fill
          className="object-contain object-left max-h-[46px] w-auto"
        />
      </div>

      {/* Copyright */}
      <p
        className="
          font-satoshi
          font-medium
          text-[14px] md:text-[18px]
          leading-[16px] md:leading-[20px]
          tracking-[2%]
          text-white
          text-left
          w-full md:w-[549px]
        "
      >
        {copyrightText}
      </p>
    </div>
  </div>
</div>

  )
}
