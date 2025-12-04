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
    <section className="relative w-full bg-[#F3FFFA] py-24 md:py-32 overflow-hidden">

      {/* Decorative Wave Lines */}
      <img
        src="/images/waves-green.png"
        alt="waves"
        className="absolute left-0 top-0 w-[480px] opacity-30 pointer-events-none"
      />

      <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row 
     md:items-center md:justify-between gap-20 px-6 lg:px-10">
        {/* LEFT SIDE */}
        <div className="flex-1 max-w-[600px]">
          {/* Badge */}
          <div>
            <span className="rounded-full bg-[#FFF5B8] px-6 py-1 text-[12px] font-medium tracking-wide text-[#3A3A3A]">
              MARVELLEX
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-[36px] md:text-[44px] font-semibold leading-[1.15] text-[#111]">
            Yup, That’s <br /> What They Said
          </h2>

          {/* Avatar Row */}
          <div className="mt-10 flex items-center gap-6">
            {avatarList.map((src, i) => (
              <div
                key={i}
                className="h-14 w-14 overflow-hidden shadow-sm 
                [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
              >
                <img src={src} alt="avatar" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="mt-6 h-[2px] w-full max-w-[180px] bg-[#0FAF7B]"></div>

          {/* Testimonial Card */}
          <div className="mt-10 rounded-[35px] bg-[#007853] px-10 py-12 text-white shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <p className="text-[16px] leading-relaxed opacity-90">
              “Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
              dolorem queaay antium totam aperiam eaque quae abillosa inventore
              veritatis etuarchite beatae vitaeac voluptas sit aspernatur autodit.”
            </p>

            <div className="mt-8">
              <p className="text-[16px] font-semibold">ANDREW D. BRICKER</p>
              <p className="text-[12px] tracking-wide opacity-80">CEO & FOUNDER</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 flex justify-center">

          {/* Client Image */}
          <div className="overflow-hidden rounded-[30px] shadow-lg w-[420px] md:w-[520px]">
            <img
              src="/images/testimonial-man.jpg"
              alt="client"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Overlay Review Count */}
          <div className="absolute bottom-10 -right-6 rounded-[10px] bg-[#007853] px-8 py-5 
            text-white shadow-lg w-[260px] md:w-[300px]">
            <p className="text-[16px] md:text-[17px] font-semibold leading-snug">
              WE HAVE MORE 3248+ <br />
              REVIEWS FROM GLOBAL <br />
              CLIENTS
            </p>
          </div>

          {/* Dot Grid */}
          <div className="absolute -bottom-5 right-0 grid grid-cols-6 gap-3 text-[#0FAF7B]/40">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="h-[6px] w-[6px] rounded-full bg-current"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;