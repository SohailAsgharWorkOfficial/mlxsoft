import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icons/Vector.svg";
import ActiveBg from "../assets/icons/path119.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const map: Record<string, string> = {
      "/": "HOME",
      "/work": "WORK",
      "/services": "SERVICES",
      "/company": "COMPANY",
      "/career": "CAREER",
    };
    setActive(map[location.pathname] || "");
  }, [location.pathname]);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "WORK", to: "/work" },
    { label: "SERVICES", to: "/services" },
    { label: "COMPANY", to: "/company" },
    { label: "CAREER", to: "/career" },
  ];

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex h-[80px] items-center justify-between">

          {/* LOGO (bigger) */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-auto"   // ⬅️ increased
            />
          </Link>

          {/* NAV ITEMS (bigger & bolder) */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = active === item.label;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    relative
                    text-[15px]        /* ⬅️ size up */
                    font-semibold
                    tracking-widest    /* ⬅️ spacing like image */
                    text-gray-900
                    hover:text-[#007d58]
                    transition
                  "
                >
                  {/* Active background */}
                  <img
                    src={ActiveBg}
                    aria-hidden
                    className={`
                      absolute left-1/2 top-1/2
                      -translate-x-1/2 -translate-y-1/2
                      h-18 w-12
                      pointer-events-none
                      transition-opacity duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CONTACT US BUTTON (exact color) */}
          <Link
            to="/contact"
            className="
              hidden md:inline-flex
              items-center justify-center
              rounded-full
              bg-[#007d58]          /* ⬅️ exact color */
              px-8 py-2.5           /* ⬅️ bigger */
              text-[14px]
              font-semibold
              tracking-wide
              text-white
              hover:bg-[#006a4b]
              transition
            "
          >
            CONTACT US
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
