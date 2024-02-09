import CatImg from "../images/cat.png";

export default function Responsibilities() {
  return (
    <section className="mx-6 w-fit flex flex-col items-center justify-center max-w-7xl lg:mx-auto">
      <div className="h-fit w-fit items-center flex flex-col mb-40 lg:flex-row lg:space-x-20 lg:mx-32 lg:mt-20">
        <div className="flex flex-col md:w-1/3  mx-8 h-fit">
          <img
            className="h-fit w-fit"
            src={CatImg}
            alt='Img by "https://www.freepik.com/free-psd/beautiful-cute-cat-isolated_87156276.htm#query=cats%20png&position=44&from_view=search&track=ais&uuid=93131bb6-be3b-4738-ad88-de178425318c"'
          />
        </div>

        <div className="md:w-1/2">
          <div>
            <h3 className="mt-12 text-center lg:text-5xl lg:w-fit md:text-left">
              Responsibilities and Benefits
            </h3>
            <p className="mt-8 md:w-fit md:text-base xl:text-lg text-gray font-text font-light">
              As a volunteer, you'll play a vital role in providing care,
              support, and love to our furry residents, making a tangible
              difference in their lives. Responsibilities may include feeding,
              grooming, socializing with animals, assisting with administrative
              tasks, or helping with events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
