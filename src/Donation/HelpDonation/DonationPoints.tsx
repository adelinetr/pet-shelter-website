export default function DonationPoints(points: {
  img: string;
  heading: string;
  text: string;
}) {
  return (
    <div className="flex flex-col justify-center mx-auto items-center">
      <div className="w-72 lg:w-60 h-auto object-cover">
        <img className="rounded-lg h-40 w-full object-cover" src={points.img} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h6 className="font-text mt-5 text-xl h-8 text-center font-medium text-orange">
          {points.heading}
        </h6>
        <p className="w-fit leading-relaxed text-center text-gray mt-2 sm:w-2/3 lg:w-fit text-sm font-light">
          {points.text}
        </p>
      </div>
    </div>
  );
}
