import type { FC } from "react";

const stats = [
  { label: "Customer Review", value: "50+" },
  { label: "Active Projects", value: "150+" },
  { label: "Countries Served", value: "180+" },
  { label: "Years of Experience", value: "10+" },
];

const CompanyStats: FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Marvellex
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E]">Best Talent, Competitive Cost</h3>
          <p className="text-[14px] text-[#4D4D4D]">
            We blend design, engineering, and product strategy to deliver reliable outcomes for our clients.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[18px] border border-[#E8F2EC] bg-[#F3FFFA] p-5 text-center shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
            >
              <p className="text-[26px] font-semibold text-[#0EAF66]">{stat.value}</p>
              <p className="text-[13px] font-semibold text-[#1E1E1E]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
