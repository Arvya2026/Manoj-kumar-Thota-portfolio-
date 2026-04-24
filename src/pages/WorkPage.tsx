import { useRef } from "react";
import {
  useReveal,
  useRevealStagger,
  useScrollLinked,
} from "@/hooks/useScrollAnimation";
import { SplitText } from "@/components/SplitText";

export const WorkPage = () => {
  const headRef = useReveal(100) as React.RefObject<HTMLDivElement>;

  const projects = [
    {
      title: "Enclaraa",
      tagline: "AI tool for lawyers · Founder & Chief Architect",
      period: "2024 — Present",
      href: "https://venraag.com/",
      description:
        "The product I wake up thinking about. Enclaraa is the AI tool we built at VenRAAG for legal teams. It chats with the firm's own documents. It drafts NDAs and standard contracts from a single sentence. It can read 50+ contracts at once and pull out what matters. And every answer it gives comes with a clear pointer back to the exact passage it came from. Runs on your own systems if your client data has to stay inside the firm.",
      stack: ["AI for Lawyers", "Document Search", "Auto-drafting", "Runs on your servers", "Sourced answers"],
      imageSrc: "/images/enclaraa-legal-ai.png",
    },
    {
      title: "Arvya Tech",
      tagline: "AI for businesses · Director",
      period: "2024 — Present",
      href: "https://arvya.in/",
      description:
        "Arvya Tech is our applied-AI studio in Vijayawada, India. We build AI tools that take repetitive, paper-heavy work off business teams — invoice reading, smart search through company knowledge, and automation that fits into the systems they already use. Practical AI for the kind of work that sits in spreadsheets, PDFs and emails.",
      stack: [
        "AI for Business",
        "Custom AI Tools",
        "Smart Automation",
        "Cloud Systems",
        "Workflow Automation",
      ],
      imageSrc: "/images/work-arvya.png",
    },
    {
      title: "AI Invoice Reader",
      tagline: "Built at Arvya Tech · 2025",
      period: "2025",
      href: "/contact",
      description:
        "An AI tool that reads invoices automatically — even messy scans, PDFs and unusual formats — and drops the line items straight into the company's accounting system. It always keeps a clear record of what it pulled out and from where, so finance teams can check anything in seconds.",
      stack: ["AI", "Invoice Reading", "Accounting Integration", "Always Auditable"],
      imageSrc: "/images/ai-finance.png",
    },
    {
      title: "AI Search at Cohere",
      tagline: "Data Scientist · London · Hybrid",
      period: "Jun 2024 — Nov 2024",
      href: "#",
      description:
        "Six months at Cohere in London, working on the AI search systems that read large collections of documents and find the right answer. A lot of what makes Enclaraa work today started during this period.",
      stack: ["AI Search", "Document Reading", "Large Language Models", "Research"],
      imageSrc: "/images/ai-systems.png",
    },
  ];

  const events = [
    {
      year: "2025",
      month: "Oct",
      title: "Selected by the Mayor of London — Investment Readiness, Cohort 7",
      body:
        "VenRAAG was selected for the October 2025 Investment Readiness Programme run by Mountside Ventures and Funding London, with backing from the UK Government and the Mayor of London. Out of every early-stage AI startup in London, we made the top 10%.",
      tag: "Selected",
    },
    {
      year: "2025",
      month: "Jun",
      title: "Won Best Overall Solution — LegalTechTalk Hackathon, London",
      body:
        "We won Best Overall Solution at the LegalTechTalk Hackathon 2025 in London. 48 hours, teams from across the world, judged by experts from McKinsey (QuantumBlack) and the international law firm Cleary Gottlieb. The work from that weekend turned into the version of Enclaraa we ship today.",
      tag: "Award",
    },
    {
      year: "2025",
      month: "Jun",
      title: "Launched Enclaraa publicly at London Tech Week",
      body:
        "Showed Enclaraa for the first time in public at London Tech Week 2025 (Olympia London, June 9–13). Live demos of contract drafting, document search across 50+ files at once, and the version that runs entirely on a firm's own servers — for teams that can't put their data anywhere else.",
      tag: "Launch",
    },
    {
      year: "2025",
      month: "—",
      title: "Won the 2025 Generator Bursary",
      body:
        "VenRAAG won the 2025 Generator Bursary, awarded by the University of Greenwich and Santander UK. The kind of independent recognition that tells you the work is actually landing with people who've seen a lot of ideas. With thanks to the judges Remy Foucher and Lea Rozencwajg Henry.",
      tag: "Award",
    },
    {
      year: "2024",
      month: "—",
      title: "Started VenRAAG and Arvya Tech",
      body:
        "Started VenRAAG in London and Arvya Tech in Vijayawada — a UK-India team building AI for the kind of work that sits in case files, spreadsheets and PDFs.",
      tag: "Milestone",
    },
  ];

  // Scroll-linked vertical line for the events timeline.
  // The same callback reveals each event row the moment the traveling circle
  // passes its center — so text appears only when the dot "arrives".
  const eventLineRef = useRef<HTMLDivElement>(null);
  const eventsContainerRef = useScrollLinked<HTMLDivElement>((p) => {
    if (eventLineRef.current)
      eventLineRef.current.style.setProperty("--progress", String(p));
    const container = eventsContainerRef.current;
    if (!container) return;
    const travelerY = p * container.offsetHeight;
    container
      .querySelectorAll<HTMLElement>("[data-timeline-row]")
      .forEach((row) => {
        const revealAt = row.offsetTop + row.offsetHeight * 0.45;
        if (travelerY >= revealAt) row.classList.add("visible");
      });
  });

  return (
    <div className="bg-[#0a0a0a]">
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <div ref={headRef} className="reveal">
            <p className="text-white/40 text-xs md:text-sm tracking-[0.26em] uppercase font-light mb-8">
              Selected Work · 2019 — Now
            </p>
            <h1
              className="text-white font-neutralsans font-normal leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 7.5vw, 120px)" }}
            >
              <SplitText text="The things I've shipped" step={50} delay={120} />
              <br />
              <span className="text-white/30">
                <SplitText
                  text="— and the rooms they were shipped in."
                  step={45}
                  delay={520}
                />
              </span>
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light max-w-2xl mt-10 leading-relaxed reveal">
              The products, projects and moments I&rsquo;m most proud of. Most are
              live. A few I can&rsquo;t talk about publicly. If anything here looks
              like the kind of thing you&rsquo;re trying to build, just get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Project list */}
      <section className="pb-10 md:pb-16 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto flex flex-col gap-20 md:gap-28">
          {projects.map((p, i) => (
            <ProjectBlock key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Events & awards timeline */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-[1216px] mx-auto">
          <SectionLabel label="Events, Awards & Milestones" />
          <h2
            className="text-white font-neutralsans font-normal tracking-tight leading-tight mb-16 reveal"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
          >
            <SplitText
              text="One year. Three awards. A launch. And only just getting started."
              step={45}
              delay={120}
            />
          </h2>
          <div ref={eventsContainerRef} className="relative pl-8 md:pl-12">
            <div ref={eventLineRef} className="timeline-line left-0 md:left-3" />
            {events.map((e) => (
              <EventRow key={e.title} event={e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionLabel = ({ label }: { label: string }) => {
  const ref = useReveal(0) as React.RefObject<HTMLDivElement>;
  return (
    <div ref={ref} className="reveal flex items-center gap-4 mb-10">
      <span className="accent-line visible" />
      <p className="text-white/40 text-[13px] tracking-[0.26em] uppercase font-light">
        {label}
      </p>
    </div>
  );
};

const ProjectBlock = ({
  project,
  index,
}: {
  project: {
    title: string;
    tagline: string;
    period: string;
    href: string;
    description: string;
    stack: string[];
    imageSrc: string;
  };
  index: number;
}) => {
  const ref = useReveal(0) as React.RefObject<HTMLDivElement>;
  const stackRef = useRevealStagger<HTMLDivElement>(45, 200);
  const flipped = index % 2 === 1;
  const external = project.href.startsWith("http");

  return (
    <div
      ref={ref}
      className={`reveal-card group grid md:grid-cols-12 gap-8 md:gap-14 items-center ${
        flipped ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a
        href={project.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="md:col-span-7 block relative rounded-2xl overflow-hidden bg-neutral-900"
      >
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-700" />
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          style={{ aspectRatio: "16/10", willChange: "transform" }}
        />
      </a>

      <div className="md:col-span-5 flex flex-col gap-5">
        <p className="text-white/35 text-xs tracking-[0.22em] uppercase font-light">
          {project.period}
        </p>
        <h3
          className="text-white font-neutralsans font-normal tracking-tight leading-none"
          style={{ fontSize: "clamp(30px, 3.6vw, 56px)" }}
        >
          {project.title}
        </h3>
        <p className="text-white/55 text-sm font-light tracking-wide">
          {project.tagline}
        </p>
        <p className="text-white/60 text-[15px] md:text-base leading-relaxed font-light">
          {project.description}
        </p>
        <div ref={stackRef} className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((s) => (
            <span
              key={s}
              data-stagger
              className="text-white/55 text-xs tracking-wide border border-white/12 rounded-full px-3 py-1 font-light"
            >
              {s}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-3 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-500 text-sm font-light tracking-wide"
        >
          <span className="link-underline">View project</span>
          <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
            â†’
          </span>
        </a>
      </div>
    </div>
  );
};

const EventRow = ({
  event,
}: {
  event: { year: string; month: string; title: string; body: string; tag: string };
}) => {
  return (
    <div
      data-timeline-row
      className="reveal group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-white/10 hover:bg-white/[0.015] transition-colors duration-500 relative"
    >
      <div className="md:col-span-2 flex md:flex-col gap-2">
        <p className="text-white font-neutralsans text-2xl md:text-3xl font-normal leading-none">
          {event.year}
        </p>
        <p className="text-white/35 text-xs tracking-[0.22em] uppercase font-light">
          {event.month}
        </p>
      </div>
      <div className="md:col-span-2">
        <span className="inline-block text-white/45 text-[10px] tracking-[0.28em] uppercase border border-white/15 rounded-full px-3 py-1 font-light">
          {event.tag}
        </span>
      </div>
      <div className="md:col-span-8">
        <h3 className="text-white text-lg md:text-xl font-normal leading-snug mb-2">
          {event.title}
        </h3>
        <p className="text-white/55 text-sm md:text-[15px] leading-relaxed font-light">
          {event.body}
        </p>
      </div>
    </div>
  );
};
