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
    <div className="flex flex-col md:flex-row gap-[52px]">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={340}
          height={325}
          className="w-[340px] h-[325px] object-cover rounded-[8px]"
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="w-auto text-[#00FFFF] font-satoshi font-black text-[30px] leading-[30px] mb-[2px]">
            {speaker.name}
        </h3>
        <p className="text-white/90 font-satoshi font-medium text-[23px] leading-[35px] max-w-[821px]">
            {speaker.bio}
        </p>

      </div>
    </div>
  )
}
