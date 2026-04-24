import { useReveal, useRevealStagger } from "@/hooks/useScrollAnimation";
import { SplitText } from "@/components/SplitText";

export const ContactPage = () => {
  const headRef = useReveal(100) as React.RefObject<HTMLDivElement>;
  const channelsRef = useRevealStagger<HTMLDivElement>(110, 200);
  const formRef = useRevealStagger<HTMLDivElement>(80, 350);
  const locationsRef = useRevealStagger<HTMLDivElement>(150, 60);

  const channels = [
    {
      label: "Email    VenRAAG",
      value: "info@venraag.com",
      href: "mailto:info@venraag.com",
      hint: "Best for AI tools for legal teams, Enclaraa and partnerships.",
    },
    {
      label: "Email    Arvya Tech",
      value: "info@arvya.in",
      href: "mailto:info@arvya.in",
      hint: "Best for AI tools for finance, operations and back-office teams.",
    },
    {
      label: "LinkedIn",
      value: "/in/manoj-kumar-thota",
      href: "https://www.linkedin.com/in/manoj-kumar-thota-22123715b/",
      hint: "Most responsive here. DMs are open.",
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

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <div ref={headRef} className="reveal">
            <p className="text-white/40 text-xs md:text-sm tracking-[0.26em] uppercase font-light mb-8">
              Contact
            </p>
            <h1
              className="text-white font-neutralsans font-normal leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 8vw, 128px)" }}
            >
              <SplitText text="Got a problem worth" step={55} delay={120} />
              <br />
              <span className="text-white/30">
                <SplitText text="solving with AI?" step={55} delay={520} />
              </span>
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light max-w-2xl mt-10 leading-relaxed">
              Whether it&rsquo;s an AI tool for your legal team, automation for
              your finance team, or something nobody&rsquo;s built yet I&rsquo;d
              like to hear about it.
            </p>
          </div>
        </div>
      </section>

      {/* Split grid: channels + form */}
      <section className="pb-24 md:pb-32 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Channels */}
          <div ref={channelsRef} className="md:col-span-5 space-y-10">
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

            <div data-stagger className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-6">
                Ventures
              </p>
              <div className="grid grid-cols-2 gap-6">
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
                    Applied Enterprise AI
                  </p>
                  <p className="text-white/30 text-[11px] font-light mt-3 tracking-wider">
                    arvya.in
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Form    staggered field reveals */}
          <div
            ref={formRef}
            className="md:col-span-7 border border-white/10 rounded-2xl p-7 md:p-10 bg-white/[0.02]"
          >
            <p
              data-stagger
              className="text-white/40 text-[11px] tracking-[0.3em] uppercase font-light mb-6"
            >
              Send a Note
            </p>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get("name") as string;
                const email = data.get("email") as string;
                const message = data.get("message") as string;
                const subject = encodeURIComponent(
                  `Portfolio enquiry from ${name || "a visitor"}`,
                );
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`,
                );
                window.location.href = `mailto:info@venraag.com?subject=${subject}&body=${body}`;
              }}
            >
              <Field
                name="name"
                label="Your name"
                placeholder="Manoj Kumar Thota"
              />
              <Field
                name="email"
                label="Email"
                placeholder="you@company.com"
                type="email"
              />
              <Field
                name="company"
                label="Company / firm (optional)"
                placeholder="Where you&rsquo;re reaching from"
              />
              <div data-stagger>
                <label className="block text-white/45 text-xs tracking-wider font-light mb-2">
                  What&rsquo;s on your mind?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="The shorter, the better. What are you trying to do?"
                  className="w-full bg-transparent border border-white/12 rounded-xl px-4 py-3 text-white font-light text-[15px] outline-none focus:border-white/40 transition-colors duration-500 resize-none"
                />
              </div>
              <button
                data-stagger
                type="submit"
                className="self-start mt-2 inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-light tracking-wider hover:bg-white/85 transition-all duration-500"
              >
                Send message
                <span className="text-base"> </span>
              </button>
              <p data-stagger className="text-white/35 text-xs font-light">
                Opens your email client. Prefer LinkedIn? That&rsquo;s above.
              </p>
            </form>
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

const Field = ({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div data-stagger>
    <label className="block text-white/45 text-xs tracking-wider font-light mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={type !== "text" || name === "name" || name === "email"}
      className="w-full bg-transparent border border-white/12 rounded-xl px-4 py-3 text-white font-light text-[15px] outline-none focus:border-white/40 transition-colors duration-500"
    />
  </div>
);

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
