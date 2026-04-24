import { useReveal, useRevealStagger } from "@/hooks/useScrollAnimation";
import { SplitText } from "@/components/SplitText";

export const BlogPage = () => {
  const headRef = useReveal(100) as React.RefObject<HTMLDivElement>;
  const gridRef = useRevealStagger<HTMLDivElement>(110, 80);
  const ctaRef = useRevealStagger<HTMLDivElement>(140, 100);

  const posts = [
    {
      category: "Legal Tech",
      readTime: "6 min read",
      title: "Why a chatbot isn't enough for legal work",
      excerpt:
        "Lawyers don't have time to fact-check AI. The next step beyond chatbots is AI that checks its own work    and shows you exactly where every answer came from.",
    },
    {
      category: "AI for Business",
      readTime: "5 min read",
      title: "Where your AI lives matters: cloud, on your servers, or both",
      excerpt:
        "Cloud is fast and easy. Your own servers keep client data inside the building. The right choice depends on what you handle. A practical guide to picking the right one.",
    },
    {
      category: "Founders",
      readTime: "4 min read",
      title: "From hackathon to top 10%: lessons from year one of VenRAAG",
      excerpt:
        "Three wins in twelve months    the LegalTechTalk Hackathon, the Generator Bursary, and a place in the Mayor of London's Investment Readiness Programme. The honest lessons I'd hand to any first-time founder.",
    },
    {
      category: "Building AI",
      readTime: "7 min read",
      title: "How to build AI that knows when it's wrong",
      excerpt:
        "In law, finance and anything regulated, AI that's confidently wrong is worse than AI that says 'I don't know'. How we build AI that catches its own mistakes    and tries again.",
    },
    {
      category: "Product",
      readTime: "5 min read",
      title:
        "Reading 50 contracts at once    and still knowing where each answer came from",
      excerpt:
        "How Enclaraa handles dozens of legal documents in parallel without losing track of which passage backs each answer. The engineering behind our London Tech Week demo, in plain English.",
    },
    {
      category: "Hiring",
      readTime: "3 min read",
      title:
        "Hiring engineers who can actually ship    not just pass interviews",
      excerpt:
        "What we screen for when hiring at Arvya Tech, and why 'can you ship it safely to real users?' beats every algorithm puzzle we've ever tried.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <div ref={headRef} className="reveal">
            <p className="text-white/40 text-xs md:text-sm tracking-[0.26em] uppercase font-light mb-8">
              Field Notes
            </p>
            <h1
              className="text-white font-neutralsans font-normal leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 7.5vw, 120px)" }}
            >
              <SplitText text="Writing." step={55} delay={120} />
              <br />
              <span className="text-white/30">
                <SplitText
                  text="Mostly about shipping."
                  step={50}
                  delay={400}
                />
              </span>
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light max-w-2xl mt-10 leading-relaxed">
              Honest notes on building AI for high-stakes work what&rsquo;s
              worth doing, what&rsquo;s worth avoiding, and what we got wrong
              before we got it right.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-10 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <FeaturedPost post={posts[0]} />
        </div>
      </section>

      {/* Post grid    staggered cascade */}
      <section className="pb-24 md:pb-32 px-6 md:px-14">
        <div className="max-w-[1216px] mx-auto">
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
            {posts.slice(1).map((p) => (
              <PostCard key={p.title} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 px-6 md:px-14 border-t border-white/5">
        <div ref={ctaRef} className="max-w-[900px] mx-auto text-center">
          <p
            data-stagger
            className="text-white/40 text-[13px] tracking-[0.26em] uppercase font-light mb-6"
          >
            Subscribe
          </p>
          <h2
            data-stagger
            className="text-white font-neutralsans font-normal leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
          >
            Get new essays when they drop.
          </h2>
          <p
            data-stagger
            className="text-white/55 text-base font-light max-w-xl mx-auto mb-10"
          >
            Maybe one a month. Usually about how we build AI in the real world
            what works, what doesn&rsquo;t, what just broke. No fluff.
          </p>
          <a
            data-stagger
            href="/contact"
            className="inline-block text-white text-sm font-light tracking-wider border border-white/25 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Drop me a line
          </a>
        </div>
      </section>
    </div>
  );
};

const FeaturedPost = ({
  post,
}: {
  post: { category: string; readTime: string; title: string; excerpt: string };
}) => {
  const ref = useReveal(0) as React.RefObject<HTMLDivElement>;
  return (
    <a
      ref={ref}
      href="#"
      className="reveal-card block group border border-white/10 rounded-3xl p-8 md:p-14 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-white/25 transition-all duration-700 hover-tilt"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-white/45 text-[11px] tracking-[0.26em] uppercase font-light border border-white/15 rounded-full px-3 py-1">
          Featured
        </span>
        <span className="text-white/45 text-xs tracking-wider font-light">
          {post.category}
        </span>
        <span className="text-white/30 text-xs font-light">&middot;</span>
        <span className="text-white/45 text-xs font-light">
          {post.readTime}
        </span>
      </div>
      <h2
        className="text-white font-neutralsans font-normal tracking-tight leading-[1.05] mb-6"
        style={{ fontSize: "clamp(28px, 4.2vw, 56px)" }}
      >
        {post.title}
      </h2>
      <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-3xl">
        {post.excerpt}
      </p>
      <div className="mt-8 inline-flex items-center gap-2 text-white/70 text-sm font-light">
        <span className="link-underline">Read the piece</span>
        <span className="text-lg transition-transform duration-500 group-hover:translate-x-1"></span>
      </div>
    </a>
  );
};

const PostCard = ({
  post,
}: {
  post: { category: string; readTime: string; title: string; excerpt: string };
}) => {
  return (
    <a
      data-stagger
      href="#"
      className="group border border-white/8 rounded-2xl p-7 md:p-9 bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex flex-col gap-5 hover-tilt"
    >
      <div className="flex items-center gap-3 text-white/45 text-xs tracking-wider font-light">
        <span>{post.category}</span>
        <span className="text-white/25">&middot;</span>
        <span>{post.readTime}</span>
      </div>
      <h3
        className="text-white font-neutralsans font-normal tracking-tight leading-tight"
        style={{ fontSize: "clamp(22px, 2.3vw, 32px)" }}
      >
        {post.title}
      </h3>
      <p className="text-white/55 text-sm md:text-[15px] font-light leading-relaxed flex-1">
        {post.excerpt}
      </p>
      <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-500 text-sm font-light">
        <span className="link-underline">Read</span>
        <span className="transition-transform duration-500 group-hover:translate-x-1"></span>
      </span>
    </a>
  );
};
