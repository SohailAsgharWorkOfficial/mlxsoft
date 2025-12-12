import type { FC } from "react";

type Tab = {
  title: string;
  body: string;
};

const tabs: Tab[] = [
  {
    title: "Discovery Stage",
    body: "User research, product audits, and stakeholder interviews to uncover the right problems before we design.",
  },
  {
    title: "Design",
    body: "Wireframes, prototypes, and high-fidelity UI with accessible components and design systems.",
  },
  {
    title: "Development",
    body: "Full-stack engineering with modern stacks, CI/CD pipelines, and performance-first practices.",
  },
  {
    title: "Support",
    body: "Continuous improvement, monitoring, and roadmap delivery after launch.",
  },
];

const ServicesSolutions: FC = () => {
  return (
    <section className="bg-[#F3FFFA] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Services
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E] md:text-[32px]">
            Our Custom Software Solution Services
          </h3>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, idx) => (
            <button
              key={tab.title}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                idx === 0
                  ? "border-[#0EAF66] bg-[#0EAF66] text-white shadow-md shadow-[#0EAF66]/20"
                  : "border-[#E0E0E0] bg-white text-[#1E1E1E] hover:border-[#0EAF66] hover:text-[#0EAF66]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-[0_16px_32px_rgba(0,0,0,0.08)] lg:p-8">
          <p className="text-[14px] leading-relaxed text-[#4D4D4D]">{tabs[0].body}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSolutions;
