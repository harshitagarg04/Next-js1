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
    <section 
      className="px-[20px] py-[40px] md:py-[54px] px-[6px] md:px-12 lg:px-20"
      style={{
        background: 'linear-gradient(180deg, #1D4DF4 0%, #112D8E 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="max-w-full md:max-w-[358px] text-[#f5a623] font-satoshi font-black text-[28px] md:text-[40px] leading-[28px] md:leading-[40px] mb-6 md:mb-10">
            {title}
        </h2>

        <div className="flex flex-col gap-6 md:gap-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        {additionalPerspectives && (
          <div
            className="mt-8 md:mt-12 rounded-lg p-4 md:p-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/speakerbg.png')" }}
          >
            <div className="relative w-full max-w-full md:max-w-[457px] mb-3">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-md"
              ></div>

              {/* Title Text */}
              <h3 className="relative text-[#00FFFF] font-satoshi font-black text-[24px] md:text-[30px] leading-[24px] md:leading-[41px]">
                {additionalPerspectives.title}
              </h3>
            </div>

            <p className="text-white font-satoshi font-medium text-[18px] md:text-[24px] leading-[30px] md:leading-[35px] max-w-full md:max-w-[1078px]">
              {additionalPerspectives.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
