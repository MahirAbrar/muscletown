import React, { useState } from "react";
import GlowingButton from "./GlowingButton";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  function handleClick(): void {
    console.log("Button clicked");
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background-primary dark:bg-background-secondary fixed w-full z-20 top-0 start-0 border-b-4 border-brand-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MuscleTown
          </span>
        </Link>

        <div className="flex items-center md:order-2">
          {/* Start Workout button - visible only on md screens and up */}
          <div className="hidden md:block">
            <GlowingButton onClick={handleClick} variant="primary">
              Start workout
            </GlowingButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brand-primary rounded-lg md:hidden hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-none">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200
                  ${
                    isActive("/")
                      ? "text-brand-primary border-b-2 border-brand-primary font-bold"
                      : "dark:text-text-secondary text-text-primary hover:text-brand-primary"
                  }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200
                  ${
                    isActive("/about")
                      ? "text-brand-primary border-b-2 border-brand-primary font-bold"
                      : "dark:text-text-secondary text-text-primary hover:text-brand-primary"
                  }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:hidden absolute top-full left-0 bg-brand-primary-primary dark:bg-background-secondary border-b border-brand-primary`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-background-primary dark:bg-background-secondary">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200
                ${
                  isActive("/")
                    ? "text-white bg-brand-primary"
                    : "text-text-primary dark:text-text-secondary hover:bg-brand-primary hover:text-white"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200
                ${
                  isActive("/about")
                    ? "text-white bg-brand-primary"
                    : "dark:text-text-secondary  hover:bg-brand-primary hover:text-white"
                }`}
            >
              About
            </Link>
            <div className="">
              <GlowingButton onClick={handleClick} variant="primary">
                Start workout
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
