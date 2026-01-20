import { EventCard } from "./event-card"

interface AgendaItem {
  title: string
  speaker: string
  description: string
}

interface EventAgendaProps {
  agendaItems: AgendaItem[]
}

export function EventAgenda({ agendaItems }: EventAgendaProps) {
  return (
    <section className="px-[20px] py-[40px] md:px-[100px] md:py-[54px] bg-[#00FFFF] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="max-w-full  text-[#1D4DF4] font-satoshi font-black text-[28px] md:text-[40px] leading-[28px] md:leading-[54px] mb-6 md:mb-10">
            Event Agenda
        </h2>

        
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[44px] items-stretch">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex-1 min-w-0 mb-6 md:mb-0">
              <EventCard
                title={item.title}
                speaker={item.speaker}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
