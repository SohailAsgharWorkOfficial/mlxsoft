import type { FC } from "react";

import HeroImage from "../../../assets/images/projectsapp2.jpg";

const ServicesApproach: FC = () => {
  return (
    <section className="relative bg-[#F3FFFA] py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-4">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Services
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold leading-[1.25] text-[#1E1E1E] md:text-[32px]">
            Our Professional
            <br />
            Approach To Your Business
          </h3>
          <p className="max-w-xl text-[14px] leading-relaxed text-[#4D4D4D]">
            We blend strategy, design, and engineering to craft products users love. Transparent collaboration
            keeps you in the loop from kickoff to launch.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[18px] border border-[#E7F2EC] bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0EAF66]">Discovery</p>
              <p className="mt-2 text-[14px] text-[#4D4D4D]">
                Workshops, requirements, and user journeys to align the roadmap.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E7F2EC] bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0EAF66]">Delivery</p>
              <p className="mt-2 text-[14px] text-[#4D4D4D]">
                Iterative design and development with QA baked in every sprint.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/12">
            <img src={HeroImage} alt="Team meeting" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        className="pointer-events-none absolute -left-6 top-8 h-[240px] w-[280px] text-[#D6F2E5]"
        viewBox="0 0 320 240"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 24}C120 ${20 + i * 24} 200 ${70 + i * 20} 320 ${50 + i * 18}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </section>
  );
};

export default ServicesApproach;
