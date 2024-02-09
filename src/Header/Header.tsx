import "./Header.css";
import HomeLink from "./nav-links/HomeLink";
import OurPetsLink from "./nav-links/OurPetsLink";
import ServicesLink from "./nav-links/ServicesLink";
import Contacts from "./nav-links/Contacts";
import AboutUs from "./nav-links/AboutUs";
import { useState } from "react";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
    setShowMenu(!showMenu);
  };

  return (
    <header className="relative flex flex-col lg:justify-between lg:items-center">
      <div className="absolute flex lg:flex-col lg:justify-center lg:items-center">
        <div className="w-full relative lg:mx-16 md:w-fit">
          <div className="absolute flex-col w- z-20 justify-center items-center lg:relative flex lg:mt-0">
            <div className="flex flex-row w-screen lg:w-fit lg:mx-6 justify-between items-center">
              <div className="relative mt-8 lg:mt-0 mx-8">
                <h3 className="text-3xl relative font-medium font-logo lg:mt-8 text-white lg:items-center">
                  PetShelter
                </h3>
              </div>

              <div
                onClick={toggleMenu}
                id="menu"
                className={`${isOpen ? "open" : ""} relative top-3 right-10`}
              >
                <button
                  type="button"
                  id="menu-btn"
                  className="z-10 hamburger lg:hidden focus:outline-none"
                >
                  <span className="top-line"></span>
                  <span className="middle-line"></span>
                  <span className="bottom-line"></span>
                </button>
              </div>
            </div>
          </div>

          <div
            id="nav-links"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute w-screen h-screen lg:h-10 lg:relative lg:w-fit lg:flex flex-col lg:flew-row items-center bg-[#1A1A1A] text-white lg:bg-opacity-0 mx-0 px-0 z-10`}
          >
            <nav className="h-screen lg:space-x-20 z-20 flex flex-col space-y-12 text-4xl lg:space-y-0 lg:text-base justify-center items-start lg:flex-row lg:mt-3">
              <HomeLink />
              <AboutUs />
              <OurPetsLink />
              <ServicesLink />
              <Contacts />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
