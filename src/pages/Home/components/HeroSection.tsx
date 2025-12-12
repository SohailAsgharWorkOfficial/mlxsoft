import React from "react";
import HeroImage from "../../../assets/images/herosectionimg.png";
const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#e9f2ef]">
      {/* Background pattern */}
      <img
        src="/images/hero-bg.svg"
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <span className="inline-block rounded-full bg-[#FDF3B4] px-5 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-[#7A6A00]">
              WELCOME TO MARVELLEX
            </span>

            {/* Heading */}
            <h1 className="max-w-xl text-[44px] font-semibold leading-[1.15] tracking-tight text-[#141717] lg:text-[52px]">
              End-to-end <br />
              <span className="relative inline-block">
                Web and Mobile
                <span className="absolute left-0 -bottom-2 h-[6px] w-full rounded-full bg-[#0EAF66]" />
              </span>
              <br />
              App Development
            </h1>

            {/* Description */}
            <p className="max-w-xl text-[15px] leading-relaxed text-slate-500">
              Our concept is simple: expert web and mobile app development to take
              your idea to the next level. We're a team of strategists and digital
              experience experts.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="rounded-full bg-[#0EAF66] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/30 transition hover:bg-[#0b8d52]">
                LetsTalk
              </button>

              <button className="flex items-center gap-2 text-sm font-semibold text-[#141717] hover:text-[#0EAF66] transition">
                View Projects
                <span className="text-lg">↗</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Main image */}
            <div className="relative h-[380px] w-[380px] overflow-hidden ">
              <img
                src={HeroImage}
                alt="Developer"
                className="h-full w-full object-cover"
              />

              {/* Top badge */}
              {/* <div className="absolute right-4 top-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0EAF66]">
                  <div className="h-3 w-3 rounded-full bg-[#0EAF66]" />
                </div>
                <div>
                  <div className="text-xs font-semibold">320+</div>
                  <div className="text-[11px] text-slate-500">
                    Completed Projects
                  </div>
                </div>
              </div> */}

              {/* Bottom floating card */}
              <div className="absolute  left-1/2 w-[75%] -translate-x-1/2 rounded-3xl bg-white px-5 py-4 shadow-2xl">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F8F0]">
                      ⏱
                    </div>
                    <div>
                      <div className="text-sm font-semibold">10+</div>
                      <div className="text-xs text-slate-500">
                        Years of Experience
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F8F0]">
                      🤝
                    </div>
                    <div>
                      <div className="text-sm font-semibold">85+</div>
                      <div className="text-xs text-slate-500">
                        Trusted Partners
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
