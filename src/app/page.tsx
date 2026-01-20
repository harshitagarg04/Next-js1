import { EventBanner } from "@/src/components/event-banner"
import { RSVPSection } from "@/src/components/rsvp-section"
import {
  WhatWeExplore,
  type ExploreItem,
} from "@/src/components/WhatWeExplore";
import {
  BrainCog,
  Puzzle,
  MonitorDot,
  ShieldCheck,
  ClipboardList,
  Rocket,
} from "lucide-react";
import { FeaturedSpeakers } from "@/src/components/featured-speakers"
import type { Speaker } from "@/src/components/speaker-card"
import { InsightsSection } from "@/src/components/insights-section"
import { EventCard } from "@/src/components/event-card"
import { EventAgenda } from "@/src/components/event-agenda"
import { RSVPBanner } from "@/src/components/rsvp-banner"

const exploreItems: ExploreItem[] = [
  {
    icon: BrainCog,
    title: "Skills Decay",
    description: ["every 2-3 years", "faster for technical skills"],
  },
  {
    icon: Puzzle,
    title: "Manager Role Shift",
    description: ["orchestrating", "people + AI agents"],
  },
  {
    icon: MonitorDot,
    title: "Leaders + AI Co-Pilots",
    description: ["requires sensemaking", "and systems thinking"],
  },
  {
    icon: ShieldCheck,
    title: "Frontline Capability",
    description: ["now depends", "on digital fluency"],
  },
  {
    icon: ClipboardList,
    title: "Core Human Capabilities",
    description: ["analytical reasoning", "and scenario planning"],
  },
  {
    icon: Rocket,
    title: "Winning Organizations",
    description: ["predict skills", "ahead of demand"],
  },
];

const speakersData: Speaker[] = [
  {
    name: "Rob Lauber",
    bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    image: "/images/speakers/rob-lauber.jpg",
  },
  {
    name: "Krishna Kumar",
    bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
    image: "/images/speakers/krishna-kumar.jpg",
  },
  {
    name: "Sudipto Mitra",
    bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
    image: "/images/speakers/sudipto-mitra.jpg",
  },
   
]

const additionalPerspectivesData = {
  title: "Additional Expert Perspectives",
  description:
    "Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.",
}

const insightsData = {
  title: "Go behind the curtain with real examples and high-scale insights",
  subtitle: "You'll walk away with:",
  insights: [
    {
      text: "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
    },
    {
      text: "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
    },
    {
      text: "Signals for where capability gaps may already be forming in your organization.",
    },
    {
      text: "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    },
    {
      text: "Actionable insights you can take straight into your next exec meeting.",
    },
  ],
  inputPlaceholder: "Enter your work email to confirm your attendance",
  buttonText: "RSVP Now",
  backgroundImage:
    "/images/chessimage.png",
}


const agendaItems = [
  {
    title: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
  },
  {
    title: "Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald's",
    description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
  },
  {
    title: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    description: "What large enterprise talent ecosystems are learning about capability-building at scale.",
  },
]






export default function Home() {
  return (
    <main className="w-full ">
      <EventBanner
        backgroundImage="/images/event-background.jpg"
        logoImage="/images/simplilearn-logo.svg"
        logoAlt="Simplilearn"
        badgeText="Invite-Only"
        eventType="An Executive Roundtable - Lunch"
        iconImage="/simplilearn-icon.svg"
        iconAlt="S"
        title="The Skills That Matter Next:"
        subtitle="Preparing Your Workforce & Leaders for the AI Era"
        date="February 20, 2026"
        location="Chamberlain's Steak & Fish House, Dallas"
      />
      <RSVPSection
        inputPlaceholder="Enter your work email to confirm your attendance"
        buttonText="RSVP Now"
        introText="AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents."
        questionPrefix="But even the most advanced enterprises are asking the same question:"
        headingLine1="Which capabilities will matter most,"
        headingLine2="and how do we build them at scale?"
        footerText="This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next."
      />
      <WhatWeExplore items={exploreItems} />
      <FeaturedSpeakers
        title="Featured Speakers"
        speakers={speakersData}
        additionalPerspectives={additionalPerspectivesData}
      />
       <InsightsSection
        title={insightsData.title}
        subtitle={insightsData.subtitle}
        insights={insightsData.insights}
        inputPlaceholder={insightsData.inputPlaceholder}
        buttonText={insightsData.buttonText}
        backgroundImage={insightsData.backgroundImage}
      />
       <EventAgenda agendaItems={agendaItems} />
        <RSVPBanner
          backgroundImage="/images/footerbg.png"
          logoImage="/images/simplilearn-logo.svg"
          logoAlt="Simplilearn"
          headingText="Space is limited."
          inputPlaceholder="Enter your work email to confirm your attendance"
          buttonText="RSVP Now"
          copyrightText="© 2009-2025 - Simplilearn Solutions. All Rights Reserved."
        />
    </main>
  )
}
