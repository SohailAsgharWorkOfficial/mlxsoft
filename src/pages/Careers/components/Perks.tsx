import type { FC } from "react";

type Perk = {
  icon: string;
  title: string;
};

const perks: Perk[] = [
  { icon: "🏢", title: "Large Beautiful Office" },
  { icon: "🤝", title: "Great Coworkers" },
  { icon: "🎉", title: "Events & Celebrations" },
  { icon: "✈️", title: "Yearly Picnics" },
  { icon: "🩺", title: "Medical Insurance" },
  { icon: "🏅", title: "Performance Award" },
];

const Perks: FC = () => {
  return (
    <section className="relative bg-[#0C855B] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h3 className="text-[20px] font-semibold">Perks &amp; Benefits</h3>
          <p className="text-[14px] leading-relaxed text-white/90">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been
            the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4DA68] text-[18px] text-[#0C855B] shadow-md shadow-black/10">
                {perk.icon}
              </div>
              <div className="leading-tight">
                <p className="text-[15px] font-semibold">{perk.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
