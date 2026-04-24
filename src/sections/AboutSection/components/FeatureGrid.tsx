import { FeatureCard } from "@/sections/AboutSection/components/FeatureCard";

export const FeatureGrid = () => {
  const features = [
    {
      title: "Built with real users",
      description:
        "Enclaraa started as my Master's project at the University of Greenwich. Every feature we ship has been tested with the people who will actually use it    lawyers, paralegals, in-house teams. We don't ship anything we wouldn't use ourselves.",
      delay: 0,
    },
    {
      title: "Your data stays yours",
      description:
        "Enclaraa runs on your own systems. So your contracts, case files and client information never leave your firm. No copy-paste into ChatGPT. No third party seeing what you're working on. That's the whole point.",
      delay: 120,
    },
    {
      title: "Recognised by the right people",
      description:
        "Won the LegalTechTalk Hackathon 2025, judged by experts from McKinsey and Cleary Gottlieb. Awarded the Generator Bursary by the University of Greenwich and Santander UK. Selected by the Mayor of London's investment programme into the top 10% of London AI startups.",
      delay: 240,
      images: [
        { src: "/images/Bursaries Award.jpg", alt: "Generator Bursary Award" },
        {
          src: "/images/cohert funding poster.jpg",
          alt: "Cohort Funding Poster",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  );
};
