import type { FC } from "react";

import HeroImage from "../../../assets/images/heroimage.png";

const ServicesHero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3FFFA] pb-16 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full bg-[#F4DA68] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C6B00]">
            Marvellex
          </div>
          <h1 className="font-faroSad text-[34px] font-semibold leading-[1.15] text-[#1E1E1E] md:text-[40px] lg:text-[46px]">
            Web and mobile app
            <br />
            development services
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#4D4D4D]">
            Our expert teams craft modern web and mobile experiences tailored to your business. From discovery
            through delivery, we keep quality, speed, and collaboration at the core.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-11 items-center justify-center rounded-full bg-[#0EAF66] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/25 transition hover:bg-[#0c8d53]">
              Lets Talk
            </button>
            <button className="inline-flex h-11 items-center justify-center rounded-full border border-[#0EAF66] px-6 text-sm font-semibold text-[#0EAF66] transition hover:bg-[#0EAF66]/10">
              Our Services
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          <div
            className="relative mx-auto h-[400px] w-[300px] overflow-hidden shadow-xl shadow-slate-900/10 sm:h-[440px] sm:w-[340px]"
            style={{
              clipPath:
                "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
              borderRadius: "36px",
            }}
          >
            <img src={HeroImage} alt="Team working" className="h-full w-full object-cover" />
          </div>

          <div className="absolute -right-6 bottom-10 w-32 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-900/10">
            <div className="text-[12px] font-semibold text-[#0EAF66]">100+</div>
            <p className="text-[11px] text-[#4D4D4D]">Completed Projects</p>
          </div>
        </div>
      </div>

      {/* background lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-6 top-6 h-[260px] w-[320px] text-[#D6F2E5]"
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

export default ServicesHero;
