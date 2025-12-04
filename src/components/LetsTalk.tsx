import React from 'react'

const LetsTalk: React.FC = () => {
  return (
    <section className="relative mx-6 md:mx-12 lg:mx-24 lg:pl-30 mt-40 -mb-20 md:-mb-32 lg:-mb-30 z-20 left-24  ">
      <div className="relative overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] ">
        <div className="bg-[#067a58] px-8 md:px-16 lg:px-24 py-16 md:py-20 lg:py-24 rounded-3xl text-white">
          <div className="max-w-7xl mx-auto flex pl-60 items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="font-faroSad font-extrabold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.02] md:leading-[1.04]">
                Get Help For Your Unique
                <br />
                Business
              </h1>
            </div>

            <div className="shrink-0 pr-50">
              <button
                className="bg-[#F4DA68] text-[#1E1E1E] font-faroLucky font-semibold px-6  md:px-8 py-3 md:py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:brightness-95 transition"
                aria-label="Let's Talk"
              >
                Let’s Talk
              </button>
            </div>
          </div>
        </div>

        
        <svg
          className="pointer-events-none absolute right-6 top-0 bottom-0 my-auto h-full max-h-[220px] opacity-20"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.08">
            <path d="M10 220 C70 180, 130 180, 190 220" />
            <path d="M20 200 C80 160, 140 160, 200 200" />
            <path d="M30 180 C90 140, 150 140, 210 180" />
          </g>
        </svg>
      </div>
    </section>
  )
}

export default LetsTalk
