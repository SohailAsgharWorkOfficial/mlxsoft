import type { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3FFFA] pb-16 pt-12 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6">
        <h1 className="font-faroSad text-[38px] font-semibold text-[#1E1E1E] md:text-[44px]">
          Contact Us
        </h1>
        <p className="text-[14px] text-[#4D4D4D]">
          Get in touch with us by completing the below form or call us now
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
