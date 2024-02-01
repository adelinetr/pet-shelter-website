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
    <section className="w-full">
      <div className="mx-1 flex flex-col h-screen justify-center items-base">
        <div className={props.mobileHeroClass}></div>
        <div className={props.heroClass}></div>

        <div className="absolute mx-4 md:mx-12 text-white text-center md:text-left">
          <h3 className="mt-72 md:mt-32 xl:text-7xl">{props.heading}</h3>
          <div className="flex flex-col space-y-6 xl:text-lg">
            <p className=" text-lightGray md:w-1/2">{props.text}</p>
            <p className="text-lightGray md:w-1/2">{props.text2}</p>
          </div>

          <div
            className={`${props.btnClass} flex flex-col mt-64 md:mt-14 space-y-7`}
          >
            <Button name="Adoption Application" />
            <Button name="How to Take Care" />
          </div>
        </div>
      </div>
    </section>
  );
}
