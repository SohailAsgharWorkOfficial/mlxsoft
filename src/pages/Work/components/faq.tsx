"use client";

import { useState } from "react";


const faqs = [
  {
    question: "What is our team size?",
    answer:
      "We have 20 experienced specialists in the following fields: Design, Discovery, Product Development, Back-end & Front-end Development, iOS & Android Development, and QA.",
  },
  {
    question: "For how long are we in market?",
    answer:
      "We have been successfully delivering projects for years, constantly improving our skills, processes, and client experience.",
  },
  {
    question: "Do we provide some kind of after release support?",
    answer:
      "Yes, we provide ongoing support, maintenance, updates, optimizations, and enhancements after your product is released.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F3FFFA] py-20 md:py-32 overflow-hidden">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-3 text-center mb-16">
        <span className="rounded-full bg-[#FFF5B8] px-6 py-1 text-[12px] font-medium tracking-wide text-[#3A3A3A]">
          FAQ’S
        </span>

        <h2 className="text-[34px] md:text-[42px] font-semibold text-[#111] leading-tight">
          Have A Project In Mind? <br /> Let's Get To Work
        </h2>
      </div>

      {/* FAQ ITEMS */}
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col gap-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-[40px] overflow-hidden shadow-md transition-all duration-300 
                ${
                  isOpen
                    ? "bg-[#007853] text-white"
                    : "bg-white text-[#222]"
                }`}
            >
              {/* FAQ Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left text-lg font-medium"
              >
                <span>{faq.question}</span>

                <span className="text-2xl font-bold">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {/* FAQ Body */}
              {isOpen && (
                <div
                  className="bg-[#E7F7F1] text-[#444] px-8 py-6 text-sm leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
