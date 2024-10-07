import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const Navbar = ({ locoScroll }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-[90%] px-10">
      <div
        className={`fixed top-4 z-[100] left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-2xl transition-all duration-300 ease-in-out h-max`}
      >
        <div className="flex items-center justify-between p-4">
          <span
            className={`text-6xl font-obviouslyBold whitespace-nowrap dark:text-white`}
          >
            Konain Raza
          </span>
          <div className="hidden md:flex p-4">
            <ul className="flex space-x-8">
              {["Home", "Masterpieces", "Cheers", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      onClick={() => handleLinkClick(link)}
                      className={`block py-2 px-3 md:p-0 font-mona font-extra z-100 font-bold 
                      ${
                        activeLink === link
                          ? "text-blue-600"
                          : "text-black dark:text-white"
                      }
                      ${
                        darkMode
                          ? "text-white hover:bg-gray-700"
                          : "text-gray-900 hover:bg-gray-100"
                      }
                      rounded md:hover:bg-transparent dark:text-white md:hover:text-blue-700`}
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <ToggleButton onClick={handleDarkModeToggle} />
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-gray-300 shadow-lg transition-transform duration-300 z-[100] py-10 md:hidden">
            <ul className="flex flex-col font-medium p-4 place-items-end">
              {["Home", "Masterpieces", "Cheers", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      onClick={() => handleLinkClick(link)}
                      className={`block py-2 px-3 font-gilroy text-black font-extra z-100 font-bold text-5xl ${
                        activeLink === link ? "text-blue-600" : "text-black"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
