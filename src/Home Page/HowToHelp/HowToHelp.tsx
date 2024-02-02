import ServicesComponent from "./ServicesComponent";
import AdoptionIcon from "../images/adoption.svg";
import DonationIcon from "../images/donation.svg";
import VolunteerIcon from "../images/volunteer.svg";

export default function HowToHelp() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="flex flex-col text-center mx-auto items-center h-full max-w-full mt-14 pb-28
        md:h-fit xl:max-w-7xl"
    >
      <div className="text-container items-center justify-center flex flex-col text-center mt-12">
        <h3 className="text-4xl font-heading mb-10 md:mb-6">How to help?</h3>
        <p className="leading-7 text-lg w-1/2 md:w-fit lg:mx-90 md:text-base">
          Every homeless animal deserves a second opportunity, so we provide
          care, nursing, and make every effort to secure their ideal homes.
          <br />
          <br />
          If you'd like to contribute, you can support us by:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:mx-16 xl:mx-6">
        <ServicesComponent
          image={AdoptionIcon}
          title="Adoption"
          description="Every adoption creates a forever home filled with joy and wagging tails!"
          border="border border-[#DBDBDB]"
          titleColor="text-[#D4753A] group-hover:text-white"
          groupClass="group-hover:bg-[#DF8D5A] group-hover:text-white group-hover:rounded-lg duration-500 group-hover:cursor-pointer"
          link="/services/adoption"
        />

        <ServicesComponent
          image={DonationIcon}
          title="Donation"
          description="Help us provide shelter, medical care, and love to animals in need."
          border="border border-[#DBDBDB]"
          titleColor="text-[#18994B] group-hover:text-white"
          groupClass="group-hover:bg-[#3BBE6F] group-hover:text-white group-hover:rounded-lg duration-500 group-hover:cursor-pointer "
          link="/services/donation"
        />

        <ServicesComponent
          image={VolunteerIcon}
          title="Volunteer"
          description="Your time and dedication can create a brighter future for our pets."
          border="border border-[#DBDBDB]"
          titleColor="text-[#2060BE] group-hover:text-white"
          groupClass="group-hover:bg-[#417ACF] group-hover:text-white group-hover:rounded-lg duration-500 group-hover:cursor-pointer"
          link="/services/volunteer"
        />
      </div>
    </section>
  );
}
