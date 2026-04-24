import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialList = () => {
  const testimonials = [
    {
      imageSrc:
        "https://c.animaapp.com/mobc47shBXEgtQ/assets/690140ff7f40feb3218786dd_avatar-sophie-moore-testimonials-webflow-cloneable-template-brix-templates.jpg",
      imageAlt: "LegalTechTalk Hackathon 2025",
      testimonialText:
        "Won Best Overall Solution at the LegalTechTalk Hackathon 2025 in London. 48 hours, teams from across the world, judged by experts from McKinsey and Cleary Gottlieb. The work from that weekend turned into the version of Enclaraa we ship today.",
      authorName: "LegalTechTalk Hackathon",
      authorCompany: "2025    Best Overall Solution, London",
    },
    {
      imageSrc:
        "https://c.animaapp.com/mobc47shBXEgtQ/assets/690140ff7f40feb3218786e0_avatar-mike-warren-testimonials-webflow-cloneable-template-brix-templates.jpg",
      imageAlt: "Generator Bursary Award 2025",
      testimonialText:
        "Won the 2025 Generator Bursary, awarded by the University of Greenwich and Santander UK. The kind of outside recognition that tells you the work is actually landing with people who've seen a lot of ideas.",
      authorName: "Santander UK Ã Greenwich",
      authorCompany: "Generator Bursary · 2025",
    },
    {
      imageSrc:
        "https://c.animaapp.com/mobc47shBXEgtQ/assets/690140ff7f40feb3218786e3_avatar-adam-smith-testimonials-webflow-cloneable-template-brix-templates.jpg",
      imageAlt: "Investment Readiness Programme Cohort 7",
      testimonialText:
        "Selected for the Investment Readiness Programme run by Mountside Ventures and Funding London, with backing from the UK Government and the Mayor of London. Out of every early-stage AI startup in London, we made the top 10%.",
      authorName: "Mountside Ventures Ã Funding London",
      authorCompany: "Investment Readiness Cohort 7 · 2025",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-4">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} delay={i * 130} />
      ))}
    </div>
  );
};
