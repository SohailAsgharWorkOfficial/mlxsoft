import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4FBF7] text-slate-900">
      {/* BG image – waves / dots */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* main bg pattern */}
        <img
          src="/images/hero-bg.svg"   // <-- apna image path yahan do
          alt=""
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* Outer max-width container */}
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 lg:max-w-7xl lg:flex-col lg:pb-24 lg:pt-20">
        {/* Top hero row */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
          {/* Left column - text */}
          <div className="space-y-8">
            {/* Pill label */}
            <div className="inline-flex items-center rounded-full bg-[#FDF6C7] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[#7C6B00]">
              WELCOME TO MARVELEX
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#141717] sm:text-5xl lg:text-[3.2rem] lg:leading-[1.15]">
                End-to-end
                <br />
                <span className="relative inline-block">
                  Web and Mobile
                  {/* underline */}
                  <span className="absolute bottom-[-0.45rem] left-0 h-[6px] w-full rounded-full bg-[#0EAF66]" />
                </span>
                <br />
                App Development
              </h1>
            </div>

            {/* Sub heading */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">
              Our concept is simple: expert web and mobile app development to
              take your idea to the next level. We&apos;re a team of strategists
              and digital experience experts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#0EAF66] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/30 transition hover:translate-y-0.5 hover:bg-[#0b8d52]">
                LetsTalk
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-[#0EAF66]">
                <span>View Projects</span>
                <span className="text-lg">↗</span>
              </button>
            </div>
          </div>

          {/* Right column - image + stat cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main card shape */}
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[32px] bg-slate-900/5 shadow-xl shadow-slate-900/10 sm:h-[360px] sm:w-[360px] lg:h-[380px] lg:w-[380px]">
              <img
                src="/images/dev-hero.jpg"  // main laptop image
                alt="Developer working on code"
                className="h-full w-full object-cover"
              />

              {/* Top-right stat badge */}
              <div className="absolute right-4 top-4 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-xs font-medium text-slate-800 shadow-lg shadow-slate-900/10 backdrop-blur">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0EAF66]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#0EAF66]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-slate-900">
                    320+
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Completed Projects
                  </div>
                </div>
              </div>

              {/* Bottom stat card */}
              <div className="absolute bottom-[-12%] left-1/2 w-[72%] -translate-x-1/2 rounded-3xl bg-white/95 p-4 text-xs text-slate-900 shadow-2xl shadow-slate-900/20 backdrop-blur-sm sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {/* Years of Experience */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F9F1]">
                      <span className="text-base">⏱</span>
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] font-semibold">10+</div>
                      <div className="text-[11px] text-slate-500">
                        Years of Experience
                      </div>
                    </div>
                  </div>

                  {/* Trusted Partners */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F9F1]">
                      <span className="text-base">🤝</span>
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] font-semibold">85+</div>
                      <div className="text-[11px] text-slate-500">
                        Trusted Partners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* optional extra small doodle / curve image on top-right */}
            {/* <img
              src="/images/hero-doodle.svg"
              alt=""
              className="pointer-events-none absolute -right-10 -top-8 h-16 w-16"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
