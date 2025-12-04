import React from "react";
import LogoUrl from "@/assets/icons/Vector.svg";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-0 bg-[#1E1E1E] text-white pt-50">
      <div className="max-w-7xl  mx-auto px-4 py-16 flex flex-col md:flex-row">

        
        <div className="space-y-4 mr-[250px]">
          <img src={LogoUrl} alt="Logo" className="h-8 w-auto" />
          <p className="text-sm font-faroSad text-white w-[260px] leading-relaxed">
            Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

      
        <div className="flex gap-[123px]">
          
          <div>
            <h4 className="font-faroSad font-semibold mb-4 text-white">COMPANY</h4>
            <ul className="space-y-2 text-white font-faroLucky text-sm">
              <li><a href="#home" className="hover:text-brand-primary transition">Home</a></li>
              <li><a href="#work" className="hover:text-brand-primary transition">Work</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition">Services</a></li>
              <li><a href="#company" className="hover:text-brand-primary transition">Company</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-faroSad font-semibold mb-4 text-white">OTHERS</h4>
            <ul className="space-y-2 text-white font-faroLucky text-sm">
              <li><a href="#about" className="hover:text-brand-primary transition">About Us</a></li>
              <li><a href="#blog" className="hover:text-brand-primary transition">Blog</a></li>
              <li><a href="#privacy" className="hover:text-brand-primary transition">Privacy Policy</a></li>
              <li><a href="#cookies" className="hover:text-brand-primary transition">Cookies Policy</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-faroSad font-semibold mb-4 text-white">CONTACT US</h4>
            <ul className="space-y-2 text-white font-faroLucky text-sm">
              <li><a href="#location" className="mr-2 hover:text-brand-primary transition "> Islamabad, Pakistan</a> </li>
              <li><a href="#phone" className="mr-2 hover:text-brand-primary transition "> (333) 223-5084</a></li>
              <li><a href="#email" className="mr-2 hover:text-brand-primary transition "> info@marvellex.com</a></li>
            </ul>
          </div>

        </div>

      </div>

     
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-white  text-sm font-faroLucky">
        ©2022 BY MARVELLEX CONCEPTS LLC.
      </div>
    </footer>
  );
};

export default Footer;
