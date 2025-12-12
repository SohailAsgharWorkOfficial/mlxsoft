import type { FC } from "react";

const testimonials = [
  {
    quote:
      "Marvellex delivered a polished product on time. Collaboration was smooth and communication clear throughout.",
    name: "Andrew D. Bricker",
    role: "CEO & Founder",
  },
  {
    quote:
      "They understood our users quickly and shipped features that moved our KPIs. Great partner to have.",
    name: "Alex Bennett",
    role: "Product Lead",
  },
];

const CompanyTestimonials: FC = () => {
  return (
    <section className="bg-[#F3FFFA] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Marvellex
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E]">Yup, That&apos;s What They Said</h3>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[18px] border border-[#E6F0EA] bg-white p-6 shadow-[0_12px_26px_rgba(0,0,0,0.06)]"
            >
              <p className="text-[14px] leading-relaxed text-[#1E1E1E]">“{item.quote}”</p>
              <div className="mt-5">
                <p className="text-[15px] font-semibold text-[#0EAF66]">{item.name}</p>
                <p className="text-[12px] text-[#4D4D4D]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTestimonials;
