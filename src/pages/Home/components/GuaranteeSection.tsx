"use client";

import React, { useState } from "react";
import g1 from "../../../assets/images/guarantee-1.png";

const guarantees = [
  {
    number: "01",
    title: "Attention To Detail",
    text: "Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.",
  },
  {
    number: "02",
    title: "Quality Driven Process",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  },
];

const GuaranteeSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? guarantees.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === guarantees.length - 1 ? 0 : i + 1));

  const item = guarantees[index];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32">

      {/* Right background curve */}
      <div className="pointer-events-none absolute right-0 top-40 hidden md:block">
        <svg
          width="450"
          height="450"
          viewBox="0 0 600 600"
          fill="none"
          className="opacity-20"
        >
          <path
            d="M50 100C200 150 250 300 450 350C650 400 700 550 900 600"
            stroke="#98C9B8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-[#FFF5B8] px-6 py-1 text-[12px] font-medium tracking-wide text-[#3A3A3A]">
          MARVELLEX
        </span>

        <h2 className="text-[34px] font-semibold leading-[1.2] text-[#111] md:text-[40px]">
          Things We <br /> Always Guarantee
        </h2>
      </div>

      {/* Content */}
      <div className="mx-auto mt-20 flex w-full max-w-[1350px] flex-col items-center gap-16 px-6 md:flex-row md:items-start md:gap-20">

        {/* LEFT — IMAGE (UNCHANGED) */}
        <div className="relative w-full max-w-[840px] ml-40">
          <div className="overflow-hidden rounded-[48px]">
            <img
              src={g1}
              alt="Team"
              className="h-[440px] w-[440px] object-fit"
            />
          </div>
        </div>

        {/* RIGHT — CAROUSEL CONTENT */}
        <div className="max-w-[500px] -ml-30">
          <span className="block text-[26px] font-semibold text-[#00A478] mb-4">
            {item.number}
          </span>

          <h3 className="mb-4 text-[28px] font-semibold text-[#111]">
            {item.title}
          </h3>

          <p className="mb-10 text-[15px] leading-relaxed text-[#4F4F4F]">
            {item.text}
          </p>

          {/* Navigation buttons (NOW FUNCTIONAL) */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00A478] text-[#00A478] transition hover:bg-[#00A478]/10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 4L6 10L12 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00A478] text-[#00A478] transition hover:bg-[#00A478]/10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 4L14 10L8 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
