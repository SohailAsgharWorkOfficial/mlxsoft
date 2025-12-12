import type { FC } from "react";

type Item = {
  title: string;
  description: string;
  icon: string;
};

const items: Item[] = [
  {
    title: "Web Design & Development",
    description: "Elegant interfaces and robust web platforms tailored to your goals.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "iOS and Android experiences with performance and polish.",
    icon: "📱",
  },
  {
    title: "Product Engineering",
    description: "From discovery to delivery, we align product and engineering to ship faster.",
    icon: "⚙️",
  },
  {
    title: "Cloud & DevOps",
    description: "Resilient infrastructure, CI/CD, and observability baked in.",
    icon: "☁️",
  },
  {
    title: "QA & Testing",
    description: "Manual and automated testing to keep releases stable.",
    icon: "🧪",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing care to keep your products secure and current.",
    icon: "🛠️",
  },
];

const ServicesWhatWeDo: FC = () => {
  return (
    <section className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[22px] bg-[#0E8D60] px-6 py-10 text-white shadow-[0_18px_38px_rgba(0,0,0,0.12)] md:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F4DA68]">What We Do?</p>
              <h3 className="mt-1 text-[24px] font-semibold">Product Design & Development</h3>
            </div>
            <button className="inline-flex h-10 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white transition hover:bg-white/10">
              Lets Talk
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4DA68] text-[18px] text-[#0E8D60] shadow-md shadow-black/10">
                  {item.icon}
                </div>
                <h4 className="text-[16px] font-semibold">{item.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhatWeDo;
