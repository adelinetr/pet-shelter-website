import DonationPoints from "./DonationPoints";
import DonationImg from "../images/donation-img1.png";

export default function DonationSection() {
  return (
    <section className="flex-col flex items-center mx-auto md:mt-32 h-fit mb-20 xl:mb-40 xl:max-w-7xl">
      <div className="justify-center items-center flex flex-col md:flex-row">
        <div
          className="flex flex-col mx-10 md:space-x-20 xl:space-x-60 text-left h-screen md:flex-row 
            md:h-fit md:mb-24 md:justify-center md:items-center xl:h-fit"
        >
          <div className="flex flex-col ">
            <div>
              <h3 className="leading-tight lg:text-5xl">
                Help Our fluffy Friends Today
              </h3>
              <h5 data-aos-duration="1000" data-aos="fade-up" className="mb-8">How Your Donation Helps:</h5>
            </div>

            <div className="flex flex-col">
              <DonationPoints description="25€ can provide a week's worth of nutritious meals for a pet" />

              <DonationPoints description="50€ can cover the cost of vaccinations for a newly rescued animal" />

              <DonationPoints description="100€ can contribute to neutering" />
            </div>

            <div className="group relative mt-14 mb-10">
              <button className="rounded-lg absolute group-hover:bg-[#FFE4D6] duration-300 font-medium text-mainOrange uppercase px-14 py-2 bg-[#FFF3ED]">
                Donate
              </button>
            </div>
          </div>

          <div className="mt-16 md:mt-0 md:mx-auto md:justify-center md:flex">
            <img
              className="rounded-lg md:w-fit object-cover md:h-96"
              src={DonationImg}
              alt="Img by 'https://www.freepik.com/free-psd/cute-dog-portrait-isolated_38312087.htm#query=dogs%20png&position=0&from_view=search&track=ais&uuid=875f1c10-eab4-42e8-981d-442e76c5df34' Freepik"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
