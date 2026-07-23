import { useRef, useState } from "react";
import {
  useReveal,
  useRevealStagger,
  useScrollLinked,
} from "@/hooks/useScrollAnimation";
import { SplitText } from "@/components/SplitText";

export const AboutPage = () => {
  const introRef = useReveal(100) as React.RefObject<HTMLDivElement>;
  const bioRef = useRevealStagger<HTMLDivElement>(110, 350);
  const quoteRef = useReveal(0) as React.RefObject<HTMLDivElement>;
  const skillsRef = useRevealStagger<HTMLDivElement>(40, 100);
  const eduRef = useRevealStagger<HTMLDivElement>(90, 60);

  const experience = [
    {
      role: "CEO & Founder",
      company: "VenRAAG",
      type: "Full-time",
      period: "Jul 2024 — Present",
      location: "London, United Kingdom · On-site",
      note: "Leading the team behind Enclaraa — flagship On-Prem Legal & Document AI built with domain-specific SLMs for zero-data-leakage environments.",
    },
    {
      role: "Director",
      company: "Arvya Tech",
      type: "Full-time",
      period: "May 2024 — Present",
      location: "Amaravati, Andhra Pradesh · Hybrid",
      note: "Leading our India team building applied AI for enterprise banking, e-commerce, automated invoice extraction, and intelligent business workflows.",
    },
    {
      role: "Gen AI Specialist, Senior Data Scientist",
      company: "Outlier",
      type: "Full-time",
      period: "Dec 2024 — Mar 2025",
      location: "London · Remote",
      note: "Advanced model reasoning and frontier LLM research, optimizing model outputs for complex domain-specific logic and reasoning tasks.",
    },
    {
      role: "RAG Data Scientist",
      company: "Cohere",
      type: "Full-time",
      period: "Jun 2024 — Nov 2024",
      location: "London · Hybrid",
      note: "Engineered high-performance enterprise AI retrieval & search systems to parse complex multi-document knowledge bases with high precision.",
    },
    {
      role: "Data Scientist & AI Engineer",
      company: "AntWorks",
      type: "Full-time",
      period: "Dec 2019 — Sep 2022",
      location: "Hybrid",
      note: "Key engineering role delivering $10M+ worth of insurance automation, underwriting risk models, and banking document intelligence systems.",
    },
  ];

  const education = [
    {
      school: "Liverpool John Moores University",
      degree: "MBA, Business Administration, Management & Operations",
      grade: "Distinction",
      mark: "LJMU",
      logoSrc: "https://logo.clearbit.com/ljmu.ac.uk",
    },
    {
      school: "University of Greenwich",
      degree: "MSc, Big Data & Business Intelligence",
      grade: "Distinction — focused on Enterprise AI & Document Intelligence.",
      mark: "UoG",
      logoSrc: "https://logo.clearbit.com/gre.ac.uk",
    },
    {
      school: "Vellore Institute of Technology",
      degree: "B.Tech, Computer Science",
      grade: "Distinction",
      mark: "VIT",
      logoSrc: "https://logo.clearbit.com/vit.ac.in",
    },
    {
      school: "Narayana Institute",
      degree: "High School Diploma · Math, Physics, Chemistry",
      grade: "96.8%",
      mark: "N",
      logoSrc: "https://logo.clearbit.com/narayanagroup.com",
    },
  ];

  const skills = [
    "7+ Yrs AI Leadership",
    "On-Prem AI Deployment",
    "Small Language Models (SLMs)",
    "Domain-Specific LLMs",
    "Insurance Automation ($10M+)",
    "Banking AI Systems",
    "Legal Tech (Enclaraa)",
    "E-Commerce Automation",
    "Enterprise RAG & Search",
    "Data Security & Governance",
    "Python",
    "LangChain",
    "LlamaIndex",
    "FastAPI",
    "Azure & AWS",
    "Docker & MLOps",
    "Vector Databases",
    "Model Fine-Tuning",
  ];

  // Scroll-linked vertical timeline line for Experience.
  // The same callback also reveals each row the moment the traveling circle
  // passes its center ” so text appears only when the dot "arrives".
  const lineRef = useRef<HTMLDivElement>(null);
  const expContainerRef = useScrollLinked<HTMLDivElement>((p) => {
    if (lineRef.current)
      lineRef.current.style.setProperty("--progress", String(p));
    const container = expContainerRef.current;
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
      {/* Hero strip */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-14 overflow-hidden">
        <div className="max-w-[1216px] mx-auto">
          <div ref={introRef} className="reveal">
            <p className="text-white/40 text-xs md:text-sm tracking-[0.26em] uppercase font-light mb-8">
              About He / Him Vijayawada · London
            </p>
            <h1
              className="text-white font-neutralsans font-normal leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 6.5vw, 104px)" }}
            >
              <SplitText text="I'm Manoj Kumar Thota." step={55} delay={120} />
              <br />
              <span className="text-white/30">
                <SplitText
                  text="7+ years building enterprise AI for regulated domains."
                  step={45}
                  delay={700}
                />
              </span>
            </h1>
          </div>

          <div
            ref={bioRef}
            className="mt-14 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-7 space-y-6">
              <p
                data-stagger
                className="text-white/75 text-base md:text-lg leading-relaxed font-light"
              >
                Over the past 7+ years as an AI industry leader, I&rsquo;ve specialized in building secure, high-impact enterprise AI solutions across Insurance, Banking, Legal Tech, and E-commerce. My career includes delivering and playing a key engineering role in over $10 million worth of insurance automation systems.
              </p>
              <p
                data-stagger
                className="text-white/60 text-base md:text-lg leading-relaxed font-light"
              >
                My core expertise lies in On-Premise AI deployments, Domain-Specific Large Language Models (LLMs), and Small Language Models (SLMs) engineered specifically for domain workflows — ensuring data security, cost efficiency, and high precision without data leaving corporate firewalls.
              </p>
              <p
                data-stagger
                className="text-white/60 text-base md:text-lg leading-relaxed font-light"
              >
                As Founder at VenRAAG (creators of Enclaraa Legal AI) and Director at Arvya Tech, I lead engineering teams bringing domain-tailored AI models into active daily enterprise use.
              </p>
            </div>

            <aside
              data-stagger
              className="md:col-span-5 md:border-l md:border-white/10 md:pl-12"
            >
              <p className="text-white/35 text-[11px] tracking-[0.3em] uppercase font-light mb-5">
                Leadership Roles
              </p>
              <ul className="space-y-5">
                <li>
                  <p className="text-white text-base font-normal">
                    CEO &amp; Founder
                  </p>
                  <p className="text-white/50 text-sm font-light">
                    VenRAAG &middot; London
                  </p>
                </li>
                <li>
                  <p className="text-white text-base font-normal">Director</p>
                  <p className="text-white/50 text-sm font-light">
                    Arvya Tech &middot; Vijayawada
                  </p>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/35 text-[11px] tracking-[0.3em] uppercase font-light mb-4">
                  Community &amp; Focus
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  2,600+ followers. AI builders, enterprise executives, and legal/financial leaders focused on production-grade On-Prem AI and domain SLMs.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-[1216px] mx-auto">
          <SectionLabel label="Experience" />
          <h2
            className="text-white font-neutralsans font-normal tracking-tight leading-[1.05] mb-14 reveal"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            <SplitText
              text="7+ years of engineering production AI across Insurance, Banking, Legal Tech & E-Commerce."
              step={40}
              delay={120}
            />
          </h2>
          <div ref={expContainerRef} className="relative pl-6 md:pl-10">
            <div ref={lineRef} className="timeline-line left-0 md:left-2" />
            {experience.map((role) => (
              <ExperienceRow key={role.company + role.period} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy pull-quote */}
      <section className="py-28 md:py-40 px-6 md:px-14 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div ref={quoteRef} className="reveal">
            <p
              className="text-black font-neutralsans font-normal leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(30px, 5vw, 72px)" }}
            >
              &ldquo;
              <SplitText
                text="Enterprise AI must be built for domain precision — on-premise, verifiable, and engineered for zero data leakage."
                step={50}
              />
              &rdquo;
            </p>
            <p className="text-black/40 text-sm mt-8 tracking-wide font-light">
              the core principle behind every domain-specific SLM, LLM, and enterprise architecture I engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-[1216px] mx-auto">
          <SectionLabel label="Education" />
          <div ref={eduRef} className="grid md:grid-cols-2 gap-x-14 gap-y-10">
            {education.map((ed) => (
              <EducationCard key={ed.school} item={ed} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills cloud */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-[1216px] mx-auto">
          <SectionLabel label="What I Work With" />
          <p className="text-white/55 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 reveal">
            Not a shopping list just the tools I actually use, in roughly the
            order I reach for them.
          </p>
          <div ref={skillsRef} className="flex flex-wrap gap-2.5 md:gap-3">
            {skills.map((s) => (
              <span
                key={s}
                data-stagger
                className="px-4 py-2 rounded-full border border-white/12 text-white/70 text-sm font-light hover:border-white/40 hover:text-white transition-all duration-500 cursor-default"
              >
                {s}
              </span>
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

const ExperienceRow = ({
  role,
}: {
  role: {
    role: string;
    company: string;
    type: string;
    period: string;
    location: string;
    note: string;
  };
}) => {
  return (
    <div
      data-timeline-row
      className="reveal group grid md:grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-t border-white/10 relative"
    >
      <div className="md:col-span-3">
        <p className="text-white/40 text-xs md:text-sm tracking-wider font-light">
          {role.period}
        </p>
      </div>
      <div className="md:col-span-5">
        <h3 className="text-white text-xl md:text-2xl font-normal leading-snug">
          {role.role}
        </h3>
        <p className="text-white/55 text-sm font-light mt-1">
          {role.company} &middot; {role.type}
        </p>
      </div>
      <div className="md:col-span-4">
        <p className="text-white/55 text-sm font-light leading-relaxed">
          {role.note}
        </p>
        <p className="text-white/30 text-xs font-light mt-3">{role.location}</p>
      </div>
    </div>
  );
};

const EducationCard = ({
  item,
}: {
  item: {
    school: string;
    degree: string;
    grade: string;
    mark: string;
    logoSrc?: string;
  };
}) => {
  return (
    <div data-stagger className="group pb-8 border-b border-white/8 hover-tilt">
      <div className="flex items-start gap-5">
        <EducationLogo mark={item.mark} src={item.logoSrc} alt={item.school} />
        <div className="flex-1 min-w-0">
          <h4 className="text-white text-lg md:text-xl font-normal leading-snug">
            {item.school}
          </h4>
          <p className="text-white/55 text-sm font-light mt-1">{item.degree}</p>
          <p className="text-white/35 text-xs font-light mt-2 tracking-wide">
            {item.grade}
          </p>
        </div>
      </div>
    </div>
  );
};

const EducationLogo = ({
  mark,
  src,
  alt,
}: {
  mark: string;
  src?: string;
  alt: string;
}) => {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
      {showImage ? (
        <img
          src={src}
          alt={`${alt} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-contain transition-[filter,opacity] duration-500 group-hover:opacity-100"
          style={{
            filter: "grayscale(1) brightness(1.35) contrast(0.9) opacity(0.82)",
          }}
        />
      ) : (
        <span className="text-white/45 font-neutralsans text-[11px] tracking-[0.14em] font-normal">
          {mark}
        </span>
      )}
    </div>
  );
};
