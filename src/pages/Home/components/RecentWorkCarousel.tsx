"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/Carousel";


type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ecommerce Mobile App",
    category: "UI/UX Design",
    image: "/images/recent-1.png",
  },
  {
    id: 2,
    title: "Ecommerce Web App",
    category: "UI/UX Design",
    image: "/images/recent-2.png",
  },
  {
    id: 3,
    title: "Ecommerce Mobile App",
    category: "UI/UX Design",
    image: "/images/recent-1.png",
  },
];

export default function RecentWorkCarousel() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      jump: false,
    })
  );

  return (
    <section className="relative w-full bg-[#F3FFFA] py-24 md:py-32 overflow-hidden">

      {/* Decorative wave lines top-left */}
      <div className="absolute left-0 top-0 opacity-30 pointer-events-none hidden md:block">
        <img
          src="/images/waves-green.png"
          alt="decor"
          className="w-[420px]"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center mb-14">
        <span className="rounded-full bg-[#FFF5B8] px-6 py-1 text-[12px] font-medium tracking-wide text-[#3A3A3A]">
          MARVELLEX
        </span>

        <h2 className="text-[34px] md:text-[42px] font-semibold text-[#111]">
          Look Our Recent Work
        </h2>

        <button className="absolute right-20 mt-2 rounded-full bg-[#009C6E] px-8 py-2 text-white text-sm font-medium shadow-md hover:bg-[#00AF7C] transition hidden md:block">
          View All Project
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        className="w-full max-w-[1600px] mx-auto"
      >
        <CarouselContent className="-ml-6 md:-ml-10">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-6 md:pl-10 basis-[85%] md:basis-1/2 lg:basis-1/3"
            >
              <div className="rounded-[35px] bg-white shadow-[0_4px_35px_rgba(0,0,0,0.12)] p-4 md:p-5">
                <div className="overflow-hidden rounded-[30px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[350px] object-cover md:h-[390px]"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-[22px] font-semibold text-[#007853]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#777]">
                    {project.category}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-10 bg-white border border-[#009C6E] text-[#009C6E] hover:bg-[#009C6E]/10" />
        <CarouselNext className="right-4 md:right-10 bg-white border border-[#009C6E] text-[#009C6E] hover:bg-[#009C6E]/10" />
      </Carousel>
    </section>
  );
}