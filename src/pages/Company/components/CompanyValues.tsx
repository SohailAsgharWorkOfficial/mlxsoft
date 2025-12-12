import type { FC } from "react";

const values = [
  { title: "Quality", body: "We prioritize clarity, usability, and maintainability in every product." },
  { title: "Accuracy", body: "Data-driven decisions and disciplined execution to hit goals." },
  { title: "Team Work", body: "Close collaboration with clients and cross-functional partners." },
  { title: "Better Design", body: "Delightful, accessible experiences shaped with modern design systems." },
  { title: "Great Strategy", body: "Clear roadmaps, risk mitigation, and proactive communication." },
  { title: "Reliable Support", body: "Long-term partnerships with ongoing enhancements and care." },
];

const CompanyValues: FC = () => {
  return (
    <section className="bg-[#0E8D60] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F4DA68]">Marvellex Values</p>
          <h3 className="text-[24px] font-semibold">What We Believe</h3>
          <p className="text-[14px] leading-relaxed text-white/90">
            A culture of ownership, craftsmanship, and empathy helps us build products users trust.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-[18px] border border-white/15 bg-white/5 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4DA68] text-[16px] text-[#0E8D60] shadow-md shadow-black/10">
                ✦
              </div>
              <h4 className="text-[16px] font-semibold">{value.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-white/90">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
