import VolunteerImg1 from "../images/volunteer-1.png";

export default function Volunteer() {
  return (
    <section className="xl:max-w-6xl flex flex-col mx-auto">
      <div className="mx-6 flex flex-col justify-center mb-10 md:flex-row xl:items-center mt-36 md:mt-10 lg:space-x-20">
        <div>
          <img
            className="rounded-lg h-72 object-cover w-96 md:h-auto"
            src={VolunteerImg1}
            alt=""
          />
        </div>

        <div className="text-center flex flex-col md:text-left md:w-1/2 md:mx-10">
          <h3 className="text-4xl mt-6 lg:text-5xl">
            Try volunteering & spend more time with our animals!
          </h3>
          <p
            data-aos-duration="2000"
            data-aos="fade-up"
            className="mt-6 leading-7"
          >
            Our goal is finding home for all sheltered animals, thus they stay
            in the shelter until they find new owners or die of old age. The
            organization is based on people who volunteer at the shelter.
          </p>

          <div className="relative items-center justify-center flex flex-col mt-20 mb-20 md:justify-start md:items-start">
            <div className="absolute group items-center justify-center ">
              <button
                className="basic-button group-hover:bg-[#D5E3F9] duration-500 border bg-[#EAF2FF] text-[#447DD1] border-none text-2xl 
                            md:px-14 md:text-base"
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
