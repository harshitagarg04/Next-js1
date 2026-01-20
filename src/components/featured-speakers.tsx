import { SpeakerCard, type Speaker } from "./speaker-card"

interface AdditionalPerspectives {
  title: string
  description: string
}

interface FeaturedSpeakersProps {
  title: string
  speakers: Speaker[]
  additionalPerspectives?: AdditionalPerspectives
}

export function FeaturedSpeakers({
  title,
  speakers,
  additionalPerspectives,
}: FeaturedSpeakersProps) {
  return (
    <section className="px-[100px] py-[54px] bg-gradient-to-b from-[#0a1628] to-[#1a3a6e] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="max-w-[358px] text-[#f5a623] font-satoshi font-black text-[40px] leading-[40px] mb-10">
            {title}
        </h2>


        <div className="flex flex-col gap-10 md:gap-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        {additionalPerspectives && (
  <div
    className="mt-12 md:mt-16 rounded-lg p-6 md:p-8 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/speakerbg.png')" }}
  >
 <div className="relative w-full max-w-[457px] mb-3">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center rounded-md"
   
  ></div>

  {/* Title Text */}
  <h3 className="relative text-[#00FFFF] font-satoshi font-black text-[30px] leading-[41px]">
    {additionalPerspectives.title}
  </h3>
</div>

<p className="text-white font-satoshi font-medium text-[24px] leading-[35px] max-w-[1078px]">
  {additionalPerspectives.description}
</p>
  </div>
)}

      </div>
    </section>
  )
}
