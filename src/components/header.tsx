import React, { useState } from "react";
import Path119Url from "@/assets/icons/path119.svg";
import LogoUrl from "@/assets/icons/Vector.svg";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("HOME");

  const navItems = [
    { label: "HOME", href: "#home", font: "font-faroSad" },
    { label: "WORK", href: "#work", font: "font-faroLucky" },
    { label: "SERVICES", href: "#services", font: "font-faroLucky" },
    { label: "COMPANY", href: "#company", font: "font-faroLucky" },
    { label: "CAREER", href: "#career", font: "font-faroLucky" },
    { label: "BLOG", href: "#blog", font: "font-faroLucky" },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
         
          <div className="shrink-0 hover:cursor-pointer">
            <img src={LogoUrl} alt="Logo" className="h-8 w-auto" />
          </div>

        
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`
                    relative
                    group
                    ${item.font}
                    font-semibold
                    text-gray-800 
                    ${isActive ? "text-brand-dark" : ""}
                    hover:text-brand-light
                    transition-colors
                    duration-200
                    px-2
                    py-2
                  `}
                >
                 
                  <img
                    src={Path119Url}
                    alt=""
                    className={`
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-10
                      h-20
                      transition
                      duration-300
                      z-0
                      block
                      pointer-events-none
                      ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                    aria-hidden="true"
                  />

                  
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}

           
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="bg-brand-dark text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                CONTACT US
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
