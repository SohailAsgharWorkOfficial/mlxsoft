"use client";

import React from "react";

const GuaranteeSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Soft curve lines right side */}
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

      {/* Main Content */}
      <div className="mx-auto mt-20 flex w-full max-w-[1350px] flex-col items-center gap-16 px-6 md:flex-row md:items-start md:gap-20">
        
        {/* Left - Images */}
        <div className="relative w-full max-w-[600px]">
          {/* Top Image */}
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="/images/team-1.jpg"
              alt="Team"
              className="h-[310px] w-full object-cover"
            />
          </div>

          {/* Small inset image */}
          <div className="absolute -bottom-10 left-10 w-[230px] overflow-hidden rounded-[35px] border-[10px] border-white shadow-lg">
            <img
              src="/images/team-2.jpg"
              alt="Team Small"
              className="h-[180px] w-full object-cover"
            />
          </div>

          {/* Decorative curly arrow */}
          <svg
            width="300"
            height="120"
            viewBox="0 0 300 120"
            fill="none"
            className="absolute -bottom-20 left-24"
          >
            <path
              d="M10 80C60 120 120 20 200 70C250 100 270 100 290 60"
              stroke="#7BC6A4"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
            />
            <path
              d="M265 60L290 60L280 80"
              stroke="#7BC6A4"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Right Text Block */}
        <div className="max-w-[500px]">
          <div className="mb-4">
            <span className="text-[26px] font-semibold text-[#00A478]">
              01
            </span>
          </div>

          <h3 className="text-[28px] font-semibold text-[#111] mb-4">
            Attention To Detail
          </h3>

          <p className="text-[15px] leading-relaxed text-[#4F4F4F] mb-10">
            Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna 
            sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum 
            pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium 
            id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.
          </p>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            {/* Prev */}
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00A478] text-[#00A478] transition hover:bg-[#00A478]/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 4L6 10L12 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Next */}
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00A478] text-[#00A478] transition hover:bg-[#00A478]/10">
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