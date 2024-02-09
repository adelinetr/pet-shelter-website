import DonationPoints from "./DonationPoints"; 
import NutritionImg from '../images/nutrition.png'
import ComfortImg from '../images/comfort.png'
import MedicineImg from '../images/medical-care.png'

export default function HelpDonation () {
    return(
        <section className="mx-6 w-fit max-w-7xl xl:mx-auto h-fit pb-20 my-16 flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center">How Donations Help</h3>
                <p className="font-text text-gray lg:w-2/3 text-base mt-4 leading-relaxed text-center">
                    Every donation, regardless of its size, plays a pivotal role in transforming lives and creating brighter futures for animals. Here's how your generous contributions make a difference:
                </p>
            </div>

            <div className="flex space-y-20 mt-16 flex-col mx-auto justify-start items-start lg:space-y-0 lg:flex-row lg:mx-20 lg:gap-10">
                <DonationPoints
                img={NutritionImg}
                heading="Nutrition & Feeding: "
                text="Your donations help us provide nutritious food tailored to the specific dietary needs of each animal."
                />
                <DonationPoints
                img={ComfortImg}
                heading="Shelter & Comfort: "
                text="Your support helps maintain a safe, clean, and comfortable environment for animals."
                />
                <DonationPoints
                img={MedicineImg}
                heading="Medical Care: "
                text="Contributions support veterinary care, vaccinations, spaying/neutering, and specialized treatments."
                />
            </div>
        </section>
    )
}