import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServiceList = () => {
  const services = [
    {
      number: "01",
      title: "On-Prem AI & Small Language Models (SLMs)",
      description:
        "Specialized in building domain-specific SLMs and fine-tuning Large Language Models tailored for high-security environments. Deployed entirely on-premise so sensitive corporate data never leaves your infrastructure while delivering superior speed, accuracy, and cost efficiency.",
      imageSrc: "/images/CEO -  3.jpg",
      imageAlt: "On-Prem AI & Small Language Models",
      imagePosition: "center 5%",
      flip: false,
    },
    {
      number: "02",
      title: "$10M+ Insurance & Banking Automation",
      description:
        "Proven track record in engineering and delivering $10M+ worth of enterprise automation for insurance and banking institutions. From intelligent claims triage and underwriting risk extraction to regulatory compliance pipelines.",
      imageSrc: "/images/CEO- 4.jpg",
      imageAlt: "Insurance & Banking Automation",
      imagePosition: "center 5%",
      flip: true,
    },
    {
      number: "03",
      title: "Legal Tech & Document AI (Enclaraa)",
      description:
        "Flagship product built at VenRAAG. Enclaraa chats with firm documents, drafts NDAs and standard contracts in seconds, processes multi-document packages, and provides verifiable line-by-line citation pointers.",
      imageSrc: "/images/CEO - 5.jpg",
      imageAlt: "Legal Tech & Document AI",
      imagePosition: "center 5%",
      flip: false,
    },
    {
      number: "04",
      title: "E-Commerce & Enterprise AI Systems",
      description:
        "At Arvya Tech, we design practical enterprise AI tools that eliminate tedious back-office operations — automated invoice processing, intelligent product/catalog search, and end-to-end data workflows for e-commerce and retail.",
      imageSrc: "/images/CEO - 1 copy.jpg",
      imageAlt: "E-Commerce & Enterprise AI Systems",
      imagePosition: "center 2%",
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
