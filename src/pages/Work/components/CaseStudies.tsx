import type { FC } from "react";

import ProjectDesktop from "../../../assets/images/projectswebapp.jpg";
import ProjectPos from "../../../assets/images/projectsapp2.jpg";
import ProjectTablet from "../../../assets/images/projectsapp3.jpg";
import ProjectMobile from "../../../assets/images/projectsapp1.jpg";

type Study = {
  id: number;
  category: string;
  title: string;
  description: string;
  services: string;
  platform: string;
  technologies: string;
  industry: string;
  image: string;
};

const studies: Study[] = [
  {
    id: 1,
    category: "UI/UX",
    title: "E-Commerce Grand Store",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    services: "App Development, Software As A Service",
    platform: "Mobile App",
    technologies: "React Native, Node Js",
    industry: "Food & Health",
    image: ProjectDesktop,
  },
  {
    id: 2,
    category: "Web App, Business",
    title: "Business",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    services: "Web Development, Software As A Service",
    platform: "Web App",
    technologies: "Next Js, React Js",
    industry: "Food & Health",
    image: ProjectPos,
  },
  {
    id: 3,
    category: "UI/UX",
    title: "E-Commerce Grand Store",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    services: "App Development, Software As A Service",
    platform: "Mobile App",
    technologies: "React Native, Node Js",
    industry: "Food & Health",
    image: ProjectMobile,
  },
  {
    id: 4,
    category: "Web App, Business",
    title: "Business",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    services: "Web Development, Software As A Service",
    platform: "Web App",
    technologies: "Next Js, React Js",
    industry: "Food & Health",
    image: ProjectTablet,
  },
];

const CaseStudies: FC = () => {
  return (
    <section className="relative bg-white py-20 md:py-24 lg:py-28">
     
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-10 top-12 h-[220px] w-[280px] text-[#D6F2E5]"
        viewBox="0 0 320 220"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 18}C120 ${20 + i * 20} 200 ${70 + i * 18} 320 ${
              50 + i * 16
            }`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-0 h-[220px] w-[280px] text-[#D6F2E5]"
        viewBox="0 0 320 220"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${50 + i * 16}C120 ${70 + i * 18} 200 ${20 + i * 20} 320 ${
              40 + i * 18
            }`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 lg:max-w-7xl">
        <div className="text-center space-y-4">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-4 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#7C6B00]">
            MARVELLEX
          </span>
          <h2 className="font-faroSad text-[32px] font-semibold text-[#1E1E1E] sm:text-[38px]">
            Case Studies
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {studies.map((study, index) => {
            const imageBlock = (
              <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
              </div>
            );

            const textBlock = (
              <div className="flex flex-col gap-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#00946E]">
                  {study.category}
                </p>
                <h3 className="text-[26px] font-semibold text-[#1E1E1E]">
                  {study.title}
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#4D4D4D]">
                  {study.description}
                </p>

                <ul className="space-y-2 text-[15px] text-[#1E1E1E]">
                  <li>
                    <span className="font-semibold">Services:</span>{" "}
                    <span className="text-[#4D4D4D]">{study.services}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Platform:</span>{" "}
                    <span className="text-[#4D4D4D]">{study.platform}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Technologies:</span>{" "}
                    <span className="text-[#4D4D4D]">{study.technologies}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Industry:</span>{" "}
                    <span className="text-[#4D4D4D]">{study.industry}</span>
                  </li>
                </ul>

                <button className="mt-2 inline-flex h-10 w-fit items-center justify-center rounded-full bg-[#009C6E] px-5 text-sm font-semibold text-white shadow-md shadow-[#009C6E]/20 transition hover:bg-[#00b17c]">
                  Visit Site
                </button>
              </div>
            );

            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={study.id}
                className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"
              >
                {isImageLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
