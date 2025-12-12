"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/Carousel";
import c1 from "../../../assets/images/recent-1.png";
import c2 from "../../../assets/images/recent-1.png";
import c3 from "../../../assets/images/recent-1.png";
import c4 from "../../../assets/images/recent-1.png";
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  { id: 1, title: "Ecommerce Mobile App", category: "UI/UX Design", image: c1 },
  { id: 2, title: "Ecommerce Web App", category: "UI/UX Design", image: c2 },
  { id: 3, title: "Ecommerce Mobile App", category: "UI/UX Design", image: c3 },
  { id: 4, title: "Ecommerce Web App", category: "UI/UX Design", image: c4 },
];

export default function RecentWorkCarousel() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // hover pe ruk jaye (screenshot style-friendly)
    })
  );

  return (
    <section className="relative pl-42 overflow-hidden bg-[#F3FFFA] py-24 ">
      {/* top-left waves */}
      <img
        src="/images/waves-green.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-[520px] opacity-35"
      />

      <div className="mx-auto max-w-[1400px] px-6">
        {/* header row */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="inline-flex rounded-full bg-[#FFF5B8] px-5 py-1 text-[11px] font-medium tracking-widest text-[#3A3A3A]">
              MARVELLEX
            </span>

            <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#111] md:text-[40px]">
              Look Our Recent Work
            </h2>
          </div>

          {/* KEEP: screenshot has this pill (remove if you truly want none) */}
          <button className="mt-8 mr-37 hidden rounded-full bg-[#0B7A4B] px-6 py-2 text-[11px] font-medium text-white shadow-sm transition hover:bg-[#09653E] md:inline-flex">
            View All Project
          </button>
        </div>

        {/* carousel */}
        <div className="mt-12">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            {/* spacing to show partial next card like screenshot */}
            <CarouselContent className="-ml-7 md:-ml-8">
              {projects.map((p) => (
                <CarouselItem
                  key={p.id}
                  className="pl-7 md:pl-8 basis-[92%] sm:basis-[70%] lg:basis-[36%]"
                >
                  {/* card */}
                  <div className="rounded-[26px]  p-5">
                    <div className="overflow-hidden rounded-[18px] bg-white">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-[250px]  object-contain md:h-[270px]"
                        draggable={false}
                      />
                    </div>

                    <div className="pt-5">
                      <div className="text-[14px] font-semibold text-[#0B7A4B]">
                        {p.title}
                      </div>
                      <div className="mt-1 text-[11px] text-[#2E2E2E]">
                        {p.category}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
