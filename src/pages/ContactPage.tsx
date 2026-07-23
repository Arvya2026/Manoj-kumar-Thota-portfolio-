import { useEffect, useState, useRef } from "react";
import { useReveal, useRevealStagger } from "@/hooks/useScrollAnimation";
import { SplitText } from "@/components/SplitText";
import { Calendar, Clock, ExternalLink, Sparkles, Link2, Check, Edit3 } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/manojkumarthota";

export const ContactPage = () => {
  const headRef = useReveal(100) as React.RefObject<HTMLDivElement>;
  const channelsRef = useRevealStagger<HTMLDivElement>(110, 200);
  const calendlyRef = useReveal(150) as React.RefObject<HTMLDivElement>;
  const locationsRef = useRevealStagger<HTMLDivElement>(150, 60);

  const containerRef = useRef<HTMLDivElement>(null);

  // Allow live editing & persistence of Calendly URL
  const [calendlyUrl, setCalendlyUrl] = useState<string>(() => {
    return localStorage.getItem("portfolio_calendly_url") || DEFAULT_CALENDLY_URL;
  });
  const [inputUrl, setInputUrl] = useState<string>(calendlyUrl);
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const [iframeLoading, setIframeLoading] = useState(true);

  // Load Calendly external widget script
  useEffect(() => {
    const head = document.head;
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      head.appendChild(script);
    }
  }, []);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = inputUrl.trim();
    if (cleaned && !cleaned.startsWith("http://") && !cleaned.startsWith("https://")) {
      cleaned = `https://${cleaned}`;
    }
    setCalendlyUrl(cleaned);
    localStorage.setItem("portfolio_calendly_url", cleaned);
    setIsEditingUrl(false);
    setIframeLoading(true);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const channels = [
    {
      label: "Email — VenRAAG",
      value: "info@venraag.com",
      href: "mailto:info@venraag.com",
      hint: "Best for On-Prem AI, Domain SLMs/LLMs, Enclaraa Legal AI, and UK/Global partnerships.",
    },
    {
      label: "Email — Arvya Tech",
      value: "info@arvya.in",
      href: "mailto:info@arvya.in",
      hint: "Best for Enterprise Insurance/Banking automation, E-Commerce AI, and custom engineering projects.",
    },
    {
      label: "LinkedIn",
      value: "/in/manoj-kumar-thota",
      href: "https://www.linkedin.com/in/manoj-kumar-thota-22123715b/",
      hint: "Most responsive here for AI leadership & consultation inquiries. DMs open.",
    },
  ];

  const locations = [
    {
      city: "London, United Kingdom",
      role: "VenRAAG · Head Office",
      note: "Where I run VenRAAG, take founder meetings, and meet legal teams in person.",
    },
    {
      city: "Vijayawada, Andhra Pradesh",
      role: "Arvya Tech · Engineering",
      note: "APIIC IT Park Autonagar Phase 2, Amaravati    522503. Where our India team builds and ships.",
    },
  ];

  const meetingTypes = [
    { label: "Introductory Call", time: "15 min" },
    { label: "AI Consultation & Demo", time: "30 min" },
    { label: "Deep Dive / Partnership", time: "45 min" },
  ];

  // Construct iframe embed URL with dark parameters
  const getEmbedUrl = (baseUrl: string) => {
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=ffffff`;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <div ref={headRef} className="reveal">
            <p className="text-white/40 text-xs md:text-sm tracking-[0.26em] uppercase font-light mb-8">
              Connect & Schedule
            </p>
            <h1
              className="text-white font-neutralsans font-normal leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 8vw, 128px)" }}
            >
              <SplitText text="Book a call directly" step={55} delay={120} />
              <br />
              <span className="text-white/30">
                <SplitText text="on Calendly." step={55} delay={520} />
              </span>
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light max-w-2xl mt-10 leading-relaxed">
              No back-and-forth emails or forms. Pick a time slot that suits you best on Calendly, and let&rsquo;s talk about your AI initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Channels (Left) + Calendly Embed (Right) */}
      <section className="pb-24 md:pb-32 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Direct Channels & Ventures */}
          <div ref={channelsRef} className="lg:col-span-4 space-y-10">
            <div>
              <p
                data-stagger
                className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-6"
              >
                Direct Channels
              </p>
              <ul className="space-y-6">
                {channels.map((c) => (
                  <li key={c.label} data-stagger>
                    <p className="text-white/45 text-xs tracking-wider font-light mb-1">
                      {c.label}
                    </p>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white text-lg md:text-xl font-normal link-underline"
                    >
                      {c.value}
                    </a>
                    <p className="text-white/45 text-sm font-light mt-1">
                      {c.hint}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Meeting Types */}
            <div data-stagger className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-4">
                Available Discussions
              </p>
              <div className="space-y-3">
                {meetingTypes.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-white/[0.02]"
                  >
                    <span className="text-white/80 text-xs font-light tracking-wide flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-white/50" />
                      {m.label}
                    </span>
                    <span className="text-white/40 text-[11px] font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {m.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ventures */}
            <div data-stagger className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-6">
                Ventures
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://venraag.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all duration-500 hover-tilt"
                >
                  <p className="text-white text-base font-normal">VenRAAG</p>
                  <p className="text-white/45 text-xs font-light mt-1">
                    Enclaraa &middot; Legal AI
                  </p>
                  <p className="text-white/30 text-[11px] font-light mt-3 tracking-wider">
                    venraag.com
                  </p>
                </a>
                <a
                  href="https://arvya.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all duration-500 hover-tilt"
                >
                  <p className="text-white text-base font-normal">Arvya Tech</p>
                  <p className="text-white/45 text-xs font-light mt-1">
                    Enterprise AI
                  </p>
                  <p className="text-white/30 text-[11px] font-light mt-3 tracking-wider">
                    arvya.in
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Calendly Integration Container */}
          <div
            ref={calendlyRef}
            className="lg:col-span-8 border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm reveal"
          >
            {/* Header info & URL Editor */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-white/70" />
                  <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light">
                    Calendly Scheduler
                  </p>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-neutralsans font-normal">
                  Schedule a Time Slot
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditingUrl(!isEditingUrl)}
                  className="inline-flex items-center gap-1.5 text-xs font-light text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-3 py-1.5 transition-all"
                  title="Update Calendly URL"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>{isEditingUrl ? "Cancel" : "Change Link"}</span>
                </button>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-light text-white/80 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-4 py-2 transition-all duration-300 bg-white/[0.03]"
                >
                  <span>Open in Calendly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick URL setting drawer if user wants to change their link directly */}
            {isEditingUrl && (
              <form onSubmit={handleSaveUrl} className="mb-6 p-4 rounded-xl border border-white/15 bg-white/[0.03] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-white/70 font-light flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5" />
                    Enter your Calendly link (e.g. https://calendly.com/your-username):
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://calendly.com/your-username"
                    required
                    className="flex-1 bg-black/60 border border-white/20 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-white/60"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-4 py-2 rounded-lg text-xs font-medium hover:bg-white/85 transition-all"
                  >
                    Save & Embed
                  </button>
                </div>
              </form>
            )}

            {savedSuccess && (
              <div className="mb-4 p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Calendly URL updated successfully! Loading calendar...</span>
              </div>
            )}

            {/* Embed Frame */}
            <div ref={containerRef} className="relative min-h-[680px] w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/5">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-white/50 z-10 gap-3">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <p className="text-xs font-light tracking-wider uppercase">Loading Calendly calendar...</p>
                </div>
              )}

              <iframe
                key={calendlyUrl}
                src={getEmbedUrl(calendlyUrl)}
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a meeting with Manoj Kumar Thota on Calendly"
                onLoad={() => setIframeLoading(false)}
                className="w-full h-[700px] rounded-xl"
              />
            </div>
            <p className="text-white/35 text-xs font-light mt-4 text-center">
              Powered by Calendly &bull; Real-time calendar availability synced automatically
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-[1216px] mx-auto">
          <SectionLabel label="Where I work from" />
          <div
            ref={locationsRef}
            className="grid md:grid-cols-2 gap-10 md:gap-14"
          >
            {locations.map((loc) => (
              <LocationCard key={loc.city} item={loc} />
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

const LocationCard = ({
  item,
}: {
  item: { city: string; role: string; note: string };
}) => {
  return (
    <div
      data-stagger
      className="border border-white/10 rounded-2xl p-7 md:p-9 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover-tilt"
    >
      <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-3">
        {item.role}
      </p>
      <h3
        className="text-white font-neutralsans font-normal tracking-tight leading-tight mb-3"
        style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
      >
        {item.city}
      </h3>
      <p className="text-white/55 text-sm font-light leading-relaxed">
        {item.note}
      </p>
    </div>
  );
};
