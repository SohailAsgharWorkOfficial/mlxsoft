import React from "react";
import connectMain from "../../../assets/images/group.png";
// import connectSmall from "../../../assets/images/connect-small.png";
const ConnectAudience: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#ffffff]  py-28">
      {/* Decorative background */}
      <img
        src="/images/curves.svg"
        alt=""
        className="pointer-events-none absolute left-0 top-10 w-[320px] opacity-60"
      />

      <img
        src="/images/dots.svg"
        alt=""
        className="pointer-events-none absolute right-24 top-16 w-[140px] opacity-70"
      />

      <div className="mx-auto max-w-[1280px] px-16">
        <div className="grid items-center gap-24  lg:grid-cols-2">

          {/* LEFT – IMAGE STACK */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Arrow doodle */}
            <img
              src="/images/arrow-doodle.svg"
              alt=""
              className="pointer-events-none absolute -top-14 left-1/2 w-28 -translate-x-1/2"
            />

            {/* Main image */}
            <div className=" relative  h-[360px] w-[500px]  rounded-[48px] ">
              <img
                src={connectMain}
                alt="Team working together"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Overlay image */}
            {/* <div className="absolute -bottom-12 right-8 h-[200px] w-[260px]  rounded-[36px] border-[10px] border-white bg-white ">

              <img
                src={connectSmall}
                alt="Developer at work"
                className="h-full w-full object-cover"
              />
            </div> */}
          </div>

          {/* RIGHT – CONTENT */}
          <div className="max-w-lg space-y-6">
            {/* Label */}
            <span className="inline-block rounded-full bg-[#FDF3B4] px-4 py-1 text-[11px] font-semibold tracking-widest text-[#7A6A00]">
              MARVELLEX
            </span>

            {/* Heading */}
            <h2 className="text-[38px] font-semibold leading-tight text-[#121714]">
              Connect with your <br /> audience online
            </h2>

            {/* Text */}
            <p className="text-[15px] leading-relaxed text-[#3B3E3D]">
              Whether you're a new business looking to establish your digital
              presence or an established organization looking to connect with
              your customers in a new way, we can help. Our methods are rooted in
              an audience-first approach to help you meet your business goals.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="rounded-full bg-[#0EAF66] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/30 transition hover:bg-[#0C8D53]">
                More About
              </button>

              <div className="flex items-center gap-3 font-semibold text-[#121714]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F9F1] text-[#0EAF66]">
                  👤
                </div>
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectAudience;
