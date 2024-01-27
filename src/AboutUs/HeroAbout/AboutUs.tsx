import "./About.css";

export default function AboutUs() {
  return (
    <section className="w-full">
      <div className="flex flex-col h-screen  items-center justify-center">
        <div className="about-img-mobile absolute md:hidden rounded-lg"></div>
        <div className="about-hero hidden md:block rounded-lg"></div>

        <div className="absolute flex flex-col justify-center items-center text-white text-center">
          <h3 className="relative mt-96 lg:mt-72 lg:text-6xl w-90 lg:w-max">
            About Our Pet Shelter
          </h3>
          <p className="font-light w-80">
            Discover the faces and stories behind our compassionate team of
            caregivers, volunteers, and professionals who are the driving force
            behind our mission.
          </p>
        </div>
      </div>
    </section>
  );
}
