import Image from "../HeroAbout/about-team.png";

export default function ShelterTeam() {
  return (
    <section className="h-fit w-fit my-16">
      <div className="flex flex-col mx-auto justify-center items-center space-y-10 md:space-y-0 md:space-x-14 md:flex-row">
        <div className="flex flex-col items-center justify-center w-80 mt-6 md:w-80">
          <img
            src={Image}
            className="w-[96vw] rounded-lg object-cover h-72 lg:w-90 lg:h-90"
            alt=""
          />
        </div>

        <div className="md:w-1/2 mx-6 h-fit">
          <h3 className="text-center md:text-left">PetShelter Team</h3>
          <p data-aos-duration="2000" data-aos="fade-up" className="md:w-full">
            At the heart of PetShelter is a passionate and dedicated team of
            individuals who share a deep love for animals and a profound
            commitment to making a difference. We are not just colleagues; we
            are a family bound together by a shared mission and a common
            purpose: to provide love, care, and hope to animals in need.
            <br />
            <br />
            Every day, we strive to make a meaningful difference in the lives of
            animals by providing them with the care, support, and love they need
            to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
