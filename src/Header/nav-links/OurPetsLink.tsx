import { useState } from "react";
import { Link } from "react-router-dom";

export default function OurPetsLink() {
  const [showLinks, setShowLinks] = useState(true);
  const [rotateArrow, setRotateArrow] = useState(true);

  const toggleLinks = () => {
    if (window.innerWidth < 800) {
      const arrow = document.getElementById("arrow")! as HTMLElement;
      arrow.classList.toggle("rotate-90");
      setRotateArrow(!rotateArrow);
      setShowLinks(!showLinks);
    }
  };

  return (
    <div
      onClick={toggleLinks}
      className="group relative overflow-visible ease-in-out"
    >
      <Link
        to="#"
        className="flex lg:justify-center overflow-hidden items-center group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200"
      >
        Our Pets
        <div className="mx-8 lg:mx-8 lg:mt-1">
          <svg
            className="overflow-visible"
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow"
              className="group-hover:stroke-mainOrange origin-center stroke-white lg:rotate-90 duration-200"
              d="M1.5 15.5L6.5 8.81818L1.5 1.5"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </Link>

      <div
        className={`${
          showLinks ? "hidden" : "flex"
        } relative lg:group-hover:flex lg:text-sm lg:text-center justify-center items-center lg:h-8 text-left mt-6 lg:mt-2 space-y-4 text-lighterGray lg:text-white text-2xl font-light h-28 lg:w-26`}
      >
        <div>
          <ul className="lg:bg-[#BCBCBC] absolute lg:px-12 lg:w-max py-2 lg:py-5 lg:bg-opacity-10 lg:backdrop-blur-md rounded-lg right-0 top-0 left-0 space-y-8">
            <li>
              <Link
                to="/our-pets/cats"
                className="hover:text-lighterGray duration-200"
              >
                Our Cats
              </Link>
            </li>
            <li>
              <Link
                to="/our-pets/dogs"
                className="hover:text-lighterGray duration-200"
              >
                Our Dogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
