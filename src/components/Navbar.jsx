import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, logo1 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo2.svg"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ugochukwu &nbsp;
            <span className="sm:block hidden"> | JavaScript Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            key={"oops"}
            className={`${
              active === "cv" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("cv")}
          >
            <a href={`/cv/resume.pdf`} download="ugo's-resume" target="_blank">
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div
              style={{
                background:
                  "linear-gradient(#2396bf, #0d5b77 40%, #004961 43%, #004961)",
              }}
              className={` ${
                !toggle ? "hidden" : "flex nav-mobile-anime"
              } h-[100%] absolute bg-red-500 w-[100%] bottom-0 left-0 rounded-xl`}
            />
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                key={"oops"}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "cv" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("cv");
                }}
              >
                <a
                  href={`/cv/resume.pdf`}
                  download="ugo's-resume"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
