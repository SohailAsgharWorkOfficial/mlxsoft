import type { FC } from "react";

type Step = {
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  { title: "Discovery & Strategy", description: "Define goals, audience, and success metrics together.", icon: "🔎" },
  { title: "Design & Prototype", description: "UX flows, wireframes, and UI to validate early.", icon: "✏️" },
  { title: "Build & QA", description: "Iterative sprints with continuous testing baked in.", icon: "🚀" },
  { title: "Launch & Support", description: "Release, monitor, and improve with ongoing care.", icon: "📈" },
];

const ServicesProcess: FC = () => {
  return (
    <section className="bg-[#F3FFFA] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Process
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E] md:text-[32px]">
            Our Software Development Process
          </h3>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[18px] border border-[#E6F0EA] bg-white p-5 text-left shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0EAF66]/10 text-[18px] text-[#0EAF66]">
                {step.icon}
              </div>
              <h4 className="text-[16px] font-semibold text-[#1E1E1E]">{step.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-[#4D4D4D]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
