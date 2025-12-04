import React from "react";

const ConnectAudience: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#F5FCF7] overflow-hidden">
      {/* Decorative top-right dots (optional) */}
      <img
        src="/images/dots.svg"     // replace with your decorative asset
        alt=""
        className="absolute right-10 top-10 opacity-60 w-40 pointer-events-none"
      />

      {/* Decorative curved arrows */}
      <img
        src="/images/curves.svg"   // replace with your SVG green arrows
        alt=""
        className="absolute left-1/2 top-[16%] -translate-x-1/2 w-40 pointer-events-none opacity-80"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGES BLOCK */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Large Image */}
          <div className="rounded-[32px] overflow-hidden shadow-xl w-[420px] h-[320px]">
            <img
              src="/images/team.jpg"  // Replace with real image
              alt="Team discussing work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute bottom-[-40px] right-[-40px] w-[220px] h-[160px] rounded-[28px] overflow-hidden shadow-lg border-[6px] border-white">
            <img
              src="/images/dev-small.jpg"  // Replace with real image
              alt="Developer working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="space-y-6 lg:pl-10">
          {/* Tag */}
          <div className="inline-flex items-center bg-[#FDF6C7] text-[#7C6B00] text-[11px] font-semibold px-4 py-1 rounded-full tracking-wide">
            MARVELEX
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-[#121714] leading-tight">
            Connect with your <br /> audience online
          </h2>

          {/* Description */}
          <p className="text-sm text-[#3B3E3D] leading-relaxed max-w-md">
            Whether you're a new business looking to establish your digital presence 
            or an established organization looking to connect with your customers in a 
            new way, we can help. Our methods are rooted in an audience-first approach 
            to help you meet your business goals.
          </p>

          {/* Button + Stats row */}
          <div className="flex items-center gap-6 flex-wrap pt-3">
            {/* Button */}
            <button className="rounded-full bg-[#0EAF66] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EAF66]/30 hover:bg-[#0C8D53] transition">
              More About
            </button>

            {/* Experience */}
            <div className="flex items-center gap-3 text-[#0EAF66] font-semibold">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#E7F9F1]">
                <span className="text-xl">👤</span>
              </div>
              <span className="text-[#121714]">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectAudience;
