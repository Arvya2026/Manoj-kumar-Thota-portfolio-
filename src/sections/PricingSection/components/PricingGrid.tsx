import { PricingCard } from "@/sections/PricingSection/components/PricingCard";

export const PricingGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-4">
      <PricingCard
        title="Quick Call"
        price="2 hrs"
        description="A short call to talk through what you're trying to do, what's getting in the way, and where AI might actually help."
        ctaHref="/contact"
        ctaText="Book a Call"
        features={[
          "Talk through your problem",
          "Honest take on whether AI fits",
          "Advice on keeping data inside your firm",
          "Written next steps after the call",
        ]}
        checkIconUrl="https://c.animaapp.com/mobc47shBXEgtQ/assets/6903b1ea2130081c0a397028_white.svg"
        delay={0}
      />
      <PricingCard
        title="Build with Me"
        price="6–12 wks"
        description="Going from idea to a working AI tool your team can actually use. From first sketch to first user."
        ctaHref="/contact"
        ctaText="Start a Build"
        features={[
          "AI tuned to your work and your data",
          "Built to catch its own mistakes",
          "Runs on your servers or in the cloud",
          "Every answer comes with the source",
        ]}
        featured
        checkIconUrl="https://c.animaapp.com/mobc47shBXEgtQ/assets/6903b1ea2130081c0a397027_Green.svg"
        delay={140}
      />
      <PricingCard
        title="Long-term Partner"
        price="Ongoing"
        description="An AI team that works alongside yours for the long run. For organisations ready to move past one-off pilots."
        ctaHref="/contact"
        ctaText="Talk to Manoj"
        features={[
          "An AI team that works alongside yours",
          "Enclaraa set up and tuned to your firm",
          "AI for invoices, contracts and reports",
          "All the systems that keep it running",
        ]}
        checkIconUrl="https://c.animaapp.com/mobc47shBXEgtQ/assets/6903b1ea2130081c0a397028_white.svg"
        delay={280}
      />
    </div>
  );
};
