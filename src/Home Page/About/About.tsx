import Card from "./Card";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function About() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="flex flex-col w-fit mb-8 h-fit mx-auto lg:flex-col lg:justify-center lg:items-center lg:mb-32 xl:mb-2">
      <div className="h-fit md:h-fit w-[90vw] mx-6 md:mx-10 mb-10 mt-14 md:mb-16 lg:max-w-5xl xl:max-w-7xl xl:mb-2">
        <div className="md:flex md:flex-col md:gap-3 md:max-w-6xl">
          <div className="text-left mt-14 md:mt-6">
            <h3>About us</h3>
            <h5>Our mission:</h5>
          </div>

          <div className="mt-8 md:max-w-2xl xl:max-w-6xl">
            <p className="text-base md:text-base">
              Founded in 2007, we have grown into a thriving community of animal
              lovers. It all started with a group of dedicated individuals who
              shared a common goal – to rescue, rehabilitate. Today, we continue
              to build on that foundation, fueled by the support of our
              incredible volunteers, donors, and adoptive families.
              <br />
              <br />
              We believe that every pet deserves a chance for a joyful life, and
              we work tirelessly to make that vision a reality.
            </p>
          </div>
        </div>

        <motion.div
          className="flex mt-12 h-fit overflow-hidden "
          ref={carousel}
        >
          <motion.div
            className="flex w-86 xl:w-100"
            drag="x"
            dragConstraints={{ right: 0, left: -width ?? 0 }}
          >
            {Card.map((image, index) => {
              return (
                <motion.div
                  className="w-64 mx-1 object-cover md:pointer-events-none md:w-72 xl:h-100 xl:w-96"
                  key={index}
                >
                  <img
                    src={image}
                    className="w-fit object-cover h-80 md:h-90 xl:h-max"
                    alt=""
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
