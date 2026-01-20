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
    <section className="relative px-[100px] py-[100px] bg-white">
      {/* Title */}
      <div className="relative ">
<h2 className="max-w-[687px] text-[#F5AB40] font-satoshi font-black text-[40px] leading-[40px]  mb-[50px]">
  {title}
</h2>


    <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none">
    <img
      src={backgroundImage || "/placeholder.svg"}
      alt="Chess pieces illustration"
      className="w-full h-full object-contain object-center"
    />
  </div>

  {/* Text + Points */}
  <div className="relative z-10">

    {/* Subtitle */}
    <p className="max-w-[242px] text-black font-satoshi font-medium text-[25px] leading-[25px] ml-[70px]">
      {subtitle}
    </p>

 {/* Points */}
<ul className="mt-[30px] space-y-[30px] ml-[70px]">
  {insights.map((insight, index) => (
    <li key={index} className="flex">
      <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0" />
      <div className="ml-[240px]">
        <p className="font-satoshi font-medium text-[20px] leading-[30px] text-black max-w-[801px]">
          {insight.text}
        </p>
      </div>
    </li>
  ))}
</ul>

{/* Input + Button (80px gap) */}
<div className="flex flex-col sm:flex-row gap-2 mt-[80px] ml-[70px]">
  <div className="relative h-[81px]">
    <Mail className="absolute left-[20px] top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
    <Input
      type="email"
      placeholder={inputPlaceholder}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-[606px] h-[81px] rounded-[8px] border border-muted-foreground/30 px-[50px]"
    />
  </div>

  <Button
    onClick={handleSubmit}
    className="w-[251px] h-[81px] bg-amber-500 hover:bg-amber-600 text-white font-semibold text-[18px] leading-[39px]"
  >
    {buttonText}
  </Button>
</div>


  </div>
</div>
    </section>
  )
}
