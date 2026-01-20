"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import toast from 'react-hot-toast'

interface InsightItem {
  text: string
}

interface InsightsSectionProps {
  title: string
  subtitle: string
  insights: InsightItem[]
  inputPlaceholder: string
  buttonText: string
  backgroundImage: string
}

export function InsightsSection({
  title,
  subtitle,
  insights,
  inputPlaceholder,
  buttonText,
  backgroundImage,
}: InsightsSectionProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    if (email.trim()) {
      try {
        console.log("Submitting Insights email:", email);
        
        const response = await fetch('/api/airtable', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        console.log("Insights API response status:", response.status);
        const result = await response.json();
        console.log("Insights API response data:", result);
        
        if (response.ok) {
          toast.success('Thank you for your interest!');
          setEmail("");
        } else {
          console.error("Insights API error:", result);
          toast.error(result.error || 'Failed to submit. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting Insights email:', error);
        toast.error('There was an error. Please try again.');
      }
    }
  }

  return (
    <section className="relative px-[20px] py-[60px] md:px-[100px] md:py-[100px] bg-white">
      {/* Mobile Chess Image - Top */}
      <div className="md:hidden relative w-full h-[300px] mb-8">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Chess pieces illustration"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Title */}
      <div className="relative">
        <h2 className="max-w-full md:max-w-[687px] text-[#F5AB40] font-satoshi font-black text-[28px] md:text-[40px] leading-[28px] md:leading-[40px] mb-[30px] md:mb-[50px]">
          {title}
        </h2>

        {/* Desktop Chess Image - Right Side */}
        <div className="hidden md:block absolute right-0 top-0 w-[570px] h-[611px] pointer-events-none">
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt="Chess pieces illustration"
            className="w-full h-full object-contain object-center"
            style={{
              width: '570px',
              height: '611px',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          />
        </div>

        {/* Text + Points */}
        <div className="relative z-10">
          {/* Subtitle */}
          <p className="max-w-full md:max-w-[242px] text-black font-satoshi font-medium text-[16px] md:text-[25px] leading-[16px] md:leading-[25px] ml-[0px] md:ml-[70px]">
            {subtitle}
          </p>

          {/* Points */}
          <ul className="mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px] ml-[0px] md:ml-[70px]">
            {insights.map((insight, index) => (
              <li key={index} className="flex">
                <div className="w-[3px] h-[40px] md:h-[59px] bg-[#F5AB40] flex-shrink-0" />
                <div className="ml-[16px] md:ml-[240px]">
                  <p className="font-satoshi font-medium text-[14px] md:text-[20px] leading-[20px] md:leading-[30px] text-black max-w-full md:max-w-[801px]">
                    {insight.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Input + Button */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-2 mt-[40px] md:mt-[80px] ml-[0px] md:ml-[70px]">
            {/* Input */}
             <div className="relative w-full md:w-[606px]">
                    <Mail className="absolute left-[14px] top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

                    <Input
                        type="email"
                        name="email"
                        placeholder={inputPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-[45px] md:h-[81px] rounded-[3px] md:rounded-[8px] border border-black/30 px-[40px] md:px-[50px] text-[14px] md:text-[16px] leading-none"
                    />
                </div>

                {/* Button */}
                <Button
                    onClick={handleSubmit}
                    className=" w-[139px] md:w-[251px] h-[45px] md:h-[81px]
                            rounded-[5px] md:rounded-[8px]
                            px-[22px] py-[16px]
                            md:px-6 md:py-0
                            bg-gradient-to-r from-[#F5AB40]/90 to-[#F5AB40]
                           text-white
                            font-semibold
                            text-[14px] md:text-[18px]
                            flex items-center justify-center gap-[10px]
                            leading-none md:leading-[39px]
                             "
                >
                    {buttonText}
                </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
