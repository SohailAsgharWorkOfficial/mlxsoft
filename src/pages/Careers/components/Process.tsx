import type { FC } from "react";

type Step = {
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    title: "CV Submission",
    description: "Submit your CV or resume through our online portal if you meet our requirements.",
    icon: "📄",
  },
  {
    title: "Phone Screening",
    description: "After looking at your CV you will be invited for a telephone interview at a time of your choosing.",
    icon: "📞",
  },
  {
    title: "Skill Assessment",
    description: "You will be invited at our local office to take a skills and knowledge assessment.",
    icon: "🧠",
  },
  {
    title: "Final Interview",
    description: "If you can pass all stages we will invite you for a final interview with our CEO and HR executive.",
    icon: "🤝",
  },
];

const Process: FC = () => {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Marvellex
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold leading-[1.25] text-[#1E1E1E]">
            Learn Our Recruitment Process
          </h3>
          <p className="text-[14px] leading-relaxed text-[#4D4D4D]">
            Are you looking for a job? Do you have any questions? Our HR department would love to help you with
            job opportunities and other potential relationships.
          </p>
        </div>

        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[18px] border border-[#E8F4EE] bg-[#F8FFFB] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E3F6EE] text-[18px] text-[#0EAF66]">
                {step.icon}
              </div>
              <h4 className="text-[16px] font-semibold text-[#1E1E1E]">{step.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-[#4D4D4D]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <svg
        aria-hidden
        className="pointer-events-none absolute -left-6 top-6 h-[220px] w-[260px] text-[#D6F2E5]"
        viewBox="0 0 300 220"
        fill="none"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 22}C120 ${20 + i * 20} 200 ${70 + i * 22} 300 ${50 + i * 20}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-6 h-[140px] w-[140px] text-[#6ECF9B]"
        viewBox="0 0 160 160"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={(i % 3) * 28 + 10}
            cy={Math.floor(i / 3) * 28 + 10}
            r="4"
            fill="currentColor"
          />
        ))}
      </svg>
    </section>
  );
};

export default Process;
