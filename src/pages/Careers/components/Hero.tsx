import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3FFFA] pb-16 pt-12 text-center">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6">
        <h1 className="font-faroSad text-[44px] font-semibold text-[#1E1E1E] md:text-[52px]">
          Careers
        </h1>
        <p className="text-[15px] text-[#555]">
          We are hiring passionate people to join us on our mission.
        </p>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-5xl flex-col items-center gap-8 px-6">
        <span className="rounded-full bg-[#F4DA68] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7C6B00]">
          Marvellex
        </span>
        <div className="space-y-5">
          <h2 className="font-faroSad text-[30px] font-semibold leading-[1.25] text-[#1E1E1E] md:text-[36px]">
            Join Our World-Class Team
            <br />
            Of Creators &amp; Dreamers
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-[#4D4D4D]">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture
            that empowers you to do your best work.
          </p>
        </div>
      </div>

      {/* background lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-10 top-10 h-[260px] w-[320px] text-[#D6F2E5]"
        viewBox="0 0 360 260"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 24}C140 ${20 + i * 26} 220 ${70 + i * 22} 360 ${50 + i * 20}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-0 h-[240px] w-[300px] text-[#D6F2E5]"
        viewBox="0 0 320 240"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${50 + i * 22}C120 ${70 + i * 24} 200 ${20 + i * 26} 320 ${40 + i * 24}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </section>
  );
};

export default Hero;
