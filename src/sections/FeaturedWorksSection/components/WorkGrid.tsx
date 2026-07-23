import { WorkCard } from "@/sections/FeaturedWorksSection/components/WorkCard";

export const WorkGrid = () => {
  const works = [
    {
      href: "/work",
      imageAlt: "$10M+ Insurance Automation Engine",
      imageSrc: "/images/ai-systems.png",
      date: "Enterprise Scale",
      title: "$10M+ Insurance Automation",
      category: "Insurance & Banking AI",
    },
    {
      href: "https://venraag.com/",
      imageAlt: "Enclaraa — Legal AI Platform by VenRAAG",
      imageSrc: "/images/enclaraa-legal-ai.png",
      date: "2024 — Present",
      title: "Enclaraa",
      category: "Legal AI & On-Prem SLMs",
    },
    {
      href: "https://arvya.in/",
      imageAlt: "Arvya Tech — Applied Enterprise & E-commerce AI",
      imageSrc: "/images/work-arvya.png",
      date: "2024 — Present",
      title: "Arvya Tech",
      category: "E-Commerce & Banking AI",
    },
    {
      href: "https://www.legaltech-talk.com/legaltechtalk-hackathon/",
      imageAlt: "LegalTechTalk Hackathon 2025 — Best Overall Solution",
      imageSrc: "/images/work-3.jpg",
      date: "June 2025",
      title: "LegalTechTalk Hackathon Winner",
      category: "Award-Winning Innovation",
    },
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 mt-4">
      {works.map((work, i) => (
        <WorkCard key={work.href} {...work} index={i} delay={i * 120} />
      ))}
    </div>
  );
};
