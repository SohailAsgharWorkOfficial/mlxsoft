"use client";

import React from "react";

const avatarList = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3FFFA] py-24 md:py-32">

      {/* top-left waves */}
      <img
        src="/images/waves-green.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-[520px] opacity-30"
      />

      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-24 px-6 md:flex-row md:items-center md:justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px]">

          <span className="inline-flex rounded-full bg-[#FFF5B8] px-6 py-1 text-[12px] font-medium tracking-wide text-[#3A3A3A]">
            MARVELLEX
          </span>

          <h2 className="mt-6 text-[40px] font-semibold leading-[1.15] text-[#111]">
            Yup, That’s <br /> What They Said
          </h2>

          {/* Avatars */}
          <div className="mt-10 flex items-center gap-5">
            {avatarList.map((src, i) => (
              <div
                key={i}
                className="h-14 w-14 overflow-hidden shadow-sm
                [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* underline */}
          <div className="mt-6 h-[2px] w-[160px] bg-[#0FAF7B]" />

          {/* Testimonial Card */}
          <div className="mt-10 rounded-[36px] bg-[#007853] px-10 py-12 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <p className="text-[16px] leading-relaxed opacity-90">
              “Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
              dolorem queaay antium totam aperiam eaque quae abillosa inventore
              veritatis etuarchite beatae vitaeac voluptas sit aspernatur autodit.”
            </p>

            <div className="mt-8">
              <p className="text-[16px] font-semibold">
                ANDREW D. BRICKER
              </p>
              <p className="text-[12px] tracking-wide opacity-80">
                CEO & FOUNDER
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          <div className="w-[520px] overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="/images/testimonial-man.jpg"
              alt="client"
              className="h-[540px] w-full object-cover"
            />
          </div>

          {/* green stats card */}
          <div className="absolute bottom-12 -right-8 w-[300px] rounded-[14px] bg-[#007853] px-8 py-5 text-white shadow-xl">
            <p className="text-[17px] font-semibold leading-snug">
              WE HAVE MORE 3248+ <br />
              REVIEWS FROM GLOBAL <br />
              CLIENTS
            </p>
          </div>

          {/* dotted pattern */}
          <div className="absolute -bottom-6 right-0 grid grid-cols-6 gap-3 text-[#0FAF7B]/40">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-current"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
