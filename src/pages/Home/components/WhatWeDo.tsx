import React, { useState } from "react";

interface Service {
  icon: string;
  title: string;
  subtitle: string;
}

const services: Service[] = [
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
  { icon: "🎨", title: "Creative", subtitle: "UI/UX Design" },
  { icon: "💻", title: "Web", subtitle: "Development" },
  { icon: "📱", title: "Mobile", subtitle: "Development" },
  { icon: "🔐", title: "Web", subtitle: "Security" },
];

const WhatWeDo: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => index < services.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <section className="relative w-full mt-16">

      <div
        className="
        bg-[#007F5F] 
        text-white 
        py-16
        -mt-26 
        px-10 
        rounded-l-[40px] 
        ml-auto          /* move block to the right */
        w-[87%]          /* EXACT 70% width */
        relative
        overflow-hidden
      "
      >

        <div>
          <h2 className="text-2xl font-semibold">What We Do?</h2>
          <p className="text-sm text-white/80 mt-2 max-w-md">
            Our concept is simple: expert web and mobile app development to take your idea to the next level.
          </p>
        </div>


        <div className="relative mt-12">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 25}%)` }}
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className="min-w-[25%] pr-10 flex flex-col items-start gap-4"
                >

                  <div
                    className="h-12 w-12 flex items-center justify-center"
                    style={{
                      background: "#FFE97F",
                      clipPath:
                        "polygon(25% 4%, 75% 4%, 96% 50%, 75% 96%, 25% 96%, 4% 50%)",
                    }}
                  >
                    <span className="text-2xl text-black">{service.icon}</span>
                  </div>


                  <div className="tracking-wide">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="absolute right-0 top-0 flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`h-9 w-9 flex items-center justify-center rounded-full border border-white/40
              ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10"}`}
            >
              ‹
            </button>

            <button
              onClick={next}
              disabled={index === services.length - 1}
              className={`h-9 w-9 flex items-center justify-center rounded-full border border-white/40
              ${index === services.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10"}`}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
