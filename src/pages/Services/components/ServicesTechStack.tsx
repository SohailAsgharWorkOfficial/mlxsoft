import type { FC } from "react";

const ServicesTechStack: FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center space-y-3">
          <span className="inline-flex rounded-full bg-[#F4DA68] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C6B00]">
            Marvellex
          </span>
          <h3 className="font-faroSad text-[28px] font-semibold text-[#1E1E1E]">Technology Stack</h3>
          <p className="text-[14px] text-[#4D4D4D]">
            We pick reliable, modern tools to build scalable products with faster delivery.
          </p>
        </div>

        <div className="mt-10 rounded-[20px] bg-[#0E8D60] px-6 py-8 text-white shadow-[0_18px_36px_rgba(0,0,0,0.12)]">
          <div className="grid gap-4 text-[14px] sm:grid-cols-2">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#F4DA68]">Frontend</p>
              <p className="mt-2">React, Next.js, TypeScript, Tailwind CSS, React Native</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#F4DA68]">Backend</p>
              <p className="mt-2">Node.js, NestJS, Express, GraphQL, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#F4DA68]">Cloud & DevOps</p>
              <p className="mt-2">AWS, Docker, CI/CD, Cloudflare, Vercel</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#F4DA68]">QA & Tools</p>
              <p className="mt-2">Cypress, Playwright, Jest, Testing Library, Postman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTechStack;
