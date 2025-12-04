// src/components/Brands.tsx

import React from "react";

import AsnBankLogo from "../assets/images/asnbank.png";
import StanfordLogo from "../assets/images/stanford.png";
import SvelteLogo from "../assets/images/svelte.png";
import CrocsLogo from "../assets/images/crocs.png";

interface BrandLogo {
  name: string;
  logo: string; // image path
}

const brands: BrandLogo[] = [
  { name: "ASN Bank", logo: AsnBankLogo },
  { name: "Stanford", logo: StanfordLogo },
  { name: "Svelte", logo: SvelteLogo },
  { name: "Crocs", logo: CrocsLogo },
  { name: "ASN Bank", logo: AsnBankLogo },
  { name: "Stanford", logo: StanfordLogo },
];

const Brands: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-bg-white">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <span className="inline-block bg-[#F4DA68] text-[#1E1E1E] font-faroLucky font-semibold px-5 py-2 rounded-full text-xs sm:text-sm tracking-[0.15em]">
            MARVELLEX
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center font-faroSad font-extrabold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-tight mb-12 md:mb-16">
          People Who Trust Us
        </h2>

        {/* Brand row: fixed width, no scroll, no wrap */}
        <div className="w-[1319px] h-[94px] mx-auto flex items-center justify-between">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="
                bg-bg-light
                rounded-4xl
                w-[199px]
                h-[90px]
                flex
                items-center
                justify-center
                shadow-[0_8px_30px_rgba(0,0,0,0.03)]
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-12 lg:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
