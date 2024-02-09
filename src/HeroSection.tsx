import Button from "./Button";

export default function HeroSection(props: {
  mobileHeroClass: string;
  heroClass: string;
  heading: string;
  text: string;
  text2?: string;
  btnClass?: string;
  adoptionText?: "hidden" | "block";
}) {
  return (
    <section className="w-full xl:max-w-[2000px] mx-auto">
      <div className="flex flex-col h-screen justify-center items-base">
        <div className={props.mobileHeroClass}></div>
        <div className={props.heroClass}></div>

        <div className="absolute mx-6 md:mx-12 text-white text-left">
          <h3 className="mt-90 md:mt-32 xl:text-7xl">{props.heading}</h3>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="flex flex-col space-y-6 xl:text-lg"
          >
            <p className=" text-lightGray text-[0.9rem] md:w-1/2">{props.text}</p>
            <p className="text-lightGray text-[0.9rem] md:w-1/2">{props.text2}</p>
          </div>

          <div
            className={`${props.btnClass} flex flex-col mt-4 md:mt-14 space-y-7`}
          >
            <Button name="Adoption Application" />
          </div>
        </div>
      </div>
    </section>
  );
}
