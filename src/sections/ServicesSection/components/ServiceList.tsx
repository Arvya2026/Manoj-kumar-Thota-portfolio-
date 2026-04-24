import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServiceList = () => {
  const services = [
    {
      number: "01",
      title: "AI that reads your documents",
      description:
        "I build AI tools that can search through thousands of your own documents, find the exact passage you need, and quote it back to you with the source attached. So you always know where the answer came from ” and you can trust it.",
      imageSrc: "/images/CEO -  3.jpg",
      imageAlt: "AI that reads your documents",
      imagePosition: "center 12%",
      flip: false,
    },
    {
      number: "02",
      title: "Enclaraa  the AI tool for lawyers",
      description:
        "Our flagship product at VenRAAG. It reads your firm's contracts, drafts NDAs from a single sentence, processes 50+ documents at once, and shows you exactly where each answer came from. Runs on your own systems if your data has to stay inside the firm.",
      imageSrc: "/images/CEO- 4.jpg",
      imageAlt: "Enclaraa  the AI tool for lawyers",
      imagePosition: "center 12%",
      flip: true,
    },
    {
      number: "03",
      title: "AI for finance and back-office work",
      description:
        "At Arvya Tech we build AI that handles the tedious paperwork. It reads invoices automatically ” even messy scans and unusual formats ” and drops the line items straight into your accounting system. With a clear record of everything it did.",
      imageSrc: "/images/CEO - 5.jpg",
      imageAlt: "AI for finance and back-office work",
      imagePosition: "center 15%",
      flip: false,
    },
    {
      number: "04",
      title: "The systems behind it all",
      description:
        "Most AI projects don't fail because the AI got the answer wrong. They fail because nobody set up the systems that keep it running properly. I do both ” the AI itself, and all the engineering that makes it work day after day.",
      imageSrc: "/images/CEO - 1 copy.jpg",
      imageAlt: "The systems behind it all",
      imagePosition: "center 12%",
      flip: true,
    },
  ];

  return (
    <div className="mt-4">
      {services.map((s, i) => (
        <ServiceItem key={s.title} {...s} delay={i * 120} />
      ))}
    </div>
  );
};
