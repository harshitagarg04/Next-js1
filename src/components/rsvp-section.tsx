"use client";

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";

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

                const response = await fetch("/api/airtable", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                console.log("API response status:", response.status);
                const result = await response.json();
                console.log("API response data:", result);

                if (response.ok) {
                    toast.success("Thank you for your RSVP!");
                    setEmail("");
                } else {
                    console.error("API error:", result);
                    toast.error(result.error || "Failed to submit RSVP");
                }
            } catch (error) {
                console.error("Error submitting RSVP:", error);
                toast.error(
                    "There was an error submitting your RSVP. Please try again.",
                );
            }
        }
    };

    return (
        <div className="px-4 py-6 md:px-[100px] md:py-[54px]">
            {/* Email Input and Button */}
            <div className="flex flex-col md:flex-row gap-[12px] md:gap-[8px] mb-8 w-full">
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

            {/* Intro Text */}
            <p
                className=" max-w-[385px] md:max-w-[1240px] font-satoshi font-medium
                            text-[15px] md:text-[27px]
                            leading-[27px] md:leading-[39px]
                            tracking-[0]
                            text-black
                            mb-6
                         "
            >
                {introText}
            </p>

            {/* Question Prefix */}
            <p  className=" max-w-[385px] md:max-w-[1240px] font-satoshi font-medium
                            text-[15px] md:text-[27px]
                            leading-[27px] md:leading-[39px]
                            tracking-[0]
                            text-black
                            mb-6
                         ">
                {questionPrefix}
            </p>

            {/* Main Heading */}
         <h2
  className="
    max-w-[347px] md:max-w-[703px]
    mx-auto
    font-satoshi font-black
    text-[25px] md:text-[40px]
    leading-[25px] md:leading-[40px]
    tracking-[0]
    text-foreground
    text-center
    mb-6
  "
>
  <span className="block">{headingLine1}</span>
  <span className="block">{headingLine2}</span>
</h2>


            {/* Footer Text */}
            <p className=" max-w-[385px] md:max-w-[1240px] font-satoshi font-medium
                            text-[15px] md:text-[27px]
                            leading-[27px] md:leading-[39px]
                            tracking-[0]
                            text-black
                            mb-6">
                {footerText}
            </p>
        </div>
    );
}
