"use client";

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Mail } from "lucide-react";
import toast from 'react-hot-toast';

interface RSVPSectionProps {
    inputPlaceholder: string;
    buttonText: string;
    introText: string;
    questionPrefix: string;
    headingLine1: string;
    headingLine2: string;
    footerText: string;
}

export function RSVPSection({
    inputPlaceholder,
    buttonText,
    introText,
    questionPrefix,
    headingLine1,
    headingLine2,
    footerText,
}: RSVPSectionProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        if (email.trim()) {
            try {
                console.log("Submitting RSVP for email:", email);
                
                const response = await fetch('/api/airtable', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email })
                });
                
                console.log("API response status:", response.status);
                const result = await response.json();
                console.log("API response data:", result);
                
                if (response.ok) {
                    toast.success('Thank you for your RSVP!');
                    setEmail("");
                } else {
                    console.error("API error:", result);
                    toast.error(result.error || 'Failed to submit RSVP');
                }
            } catch (error) {
                console.error('Error submitting RSVP:', error);
                toast.error('There was an error submitting your RSVP. Please try again.');
            }
        }
    };

    return (
        <div className="px-[100px] py-[54px]">
            {/* Email Input and Button */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
                <div className="relative  h-[81px] ">
                    <Mail className="absolute left-[20px] top-1/2 -translate-y-1/2 size-4 text-muted-foreground " />
                    <Input
                        type="email"
                        name="email"
                        placeholder={inputPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[606px] h-[81px] rounded-[8px] border border-muted-foreground/30 px-[50px] text-base "
                        required
                    />
                </div>
                <Button
                    onClick={handleSubmit}
                    className="w-[251px] h-[81px]  bg-amber-500 hover:bg-amber-600 text-white font-semibold text-[18px] leading-[39px] "
                >
                    {buttonText}
                </Button>
            </div>

            {/* Intro Text */}
            <p className="max-w-[1240px] text-[27px] leading-[39px] font-medium text-#000000 leading-relaxed mb-6">
                {introText}
            </p>

            {/* Question Prefix */}
            <p className="max-w-[1240px] text-[27px] leading-[39px] font-medium text-#000000 mb-4">{questionPrefix}</p>

            {/* Main Heading */}
            <h2 className="max-w-[703px] mx-auto text-[32px] sm:text-[40px] font-bold text-foreground text-center mb-6">
                <span className="block">{headingLine1}</span>
                <span className="block">{headingLine2}</span>
            </h2>

            {/* Footer Text */}
            <p className="max-w-[1240px] text-[27px] leading-[39px] font-medium text-#000000 leading-relaxed">{footerText}</p>
        </div>
    );
}
