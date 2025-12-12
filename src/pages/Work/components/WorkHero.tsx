import type { FC } from "react";

import HeroImage from "../../../assets/images/heroimage.png";

const WorkHero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3FFFA]">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 lg:max-w-7xl lg:flex-row lg:items-center lg:pb-28 lg:pt-20">
        
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center rounded-full bg-[#F4DA68] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[#7C6B00]">
            MARVELLEX
          </div>

          <div className="space-y-4">
            <h1 className="font-faroSad text-[38px] leading-[1.05] text-[#1E1E1E] sm:text-[44px] lg:text-[52px]">
              Let&apos;s build your idea
              <br />
              into an{" "}
              <span className="relative inline-block">
                amazing
                <span className="absolute -bottom-3 left-0 h-2.5 w-full rounded-full bg-[#6ECF9B]" />
              </span>
              <br />
              Product
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-[#4D4D4D]">
              Our designers make complex applications simple for users. We are a full-service
              design agency, with teams of talented specialists ready to help you build your
              product.
            </p>
          </div>

          <button className="inline-flex h-11 items-center justify-center rounded-full bg-[#0EAF66] px-7 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/20 transition hover:bg-[#0c8d53]">
            LetsTalk
          </button>
        </div>

        
        <div className="relative flex-1">
          <div
            className="relative mx-auto h-[430px] w-[320px] overflow-hidden shadow-xl shadow-slate-900/10 sm:h-[480px] sm:w-[360px] md:w-[400px]"
            style={{
              clipPath:
                "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
              borderRadius: "36px",
            }}
          >
            <img
              src={HeroImage}
              alt="Team collaborating"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-3.5 top-6 flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0EAF66]/10 text-[#0EAF66]">
              <span className="text-lg">❤</span>
            </div>
            <div className="leading-tight text-[#1E1E1E]">
              <p className="text-sm font-semibold">320+</p>
              <p className="text-[11px] text-[#5C5C5C]">Completed Projects</p>
            </div>
          </div>

          {/* Doodles */}
          <svg
            aria-hidden
            className="absolute -left-20 top-6 h-32 w-32 text-[#98C9B8]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M10 100C80 50 120 150 190 100"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M50 90C90 70 110 130 150 110"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <svg
            aria-hidden
            className="absolute -right-10 bottom-0 h-40 w-40 text-[#98C9B8]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M10 160C80 100 120 220 190 160"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M30 130C70 120 130 180 170 150"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <svg
            aria-hidden
            className="absolute -right-8 top-0 h-14 w-14 text-[#6ECF9B]"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M14 36C14 28 22 28 22 36C22 44 30 44 30 36C30 28 38 28 38 36C38 44 46 44 46 36"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Background lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-10 top-10 h-[320px] w-[360px] text-[#D6F2E5]"
        viewBox="0 0 400 360"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${60 + i * 28}C140 ${40 + i * 26} 260 ${100 + i * 30} 400 ${
              70 + i * 24
            }`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[360px] text-[#D6F2E5]"
        viewBox="0 0 400 360"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${70 + i * 24}C140 ${100 + i * 30} 260 ${40 + i * 26} 400 ${
              60 + i * 28
            }`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </section>
  );
};

export default WorkHero;
