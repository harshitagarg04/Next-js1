import Image from "next/image"

export interface Speaker {
  name: string
  bio: string
  image: string
}

interface SpeakerCardProps {
  speaker: Speaker
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[52px] mb-8 md:mb-12">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-auto">
        <div className="relative w-full md:w-[389px] h-[250px] md:h-[419px]">
          <Image
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name}
            fill
            className="object-cover rounded-[6px] md:rounded-[8px]"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 mt-2 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="w-auto text-[#00FFFF] font-satoshi font-black text-[20px] md:text-[30px] leading-[20px] md:leading-[30px] mb-2 md:mb-[2px]">
          {speaker.name}
        </h3>
        <p className="text-white/90 font-satoshi font-medium text-[16px] md:text-[23px] leading-[24px] md:leading-[35px] max-w-full md:max-w-[821px] mb-6 md:mb-8">
          {speaker.bio}
        </p>
      </div>
    </div>
  );
}
