import DonationPoints from "./DonationPoints"; 
import NutritionImg from '../images/nutrition.png'
import ComfortImg from '../images/comfort.png'
import MedicineImg from '../images/medical-care.png'

export default function HelpDonation () {
    return(
        <section className="my-32 mx-6">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center">How Donations Help</h3>
                <p className="font-text text-gray md:w-1/3 mt-4 leading-relaxed text-center">
                    Every donation, regardless of its size, plays a pivotal role in transforming lives and creating brighter futures for animals. Here's how your generous contributions make a difference:
                </p>
            </div>

            <div className="flex space-y-20 mt-16 flex-col justify-center items-center md:space-y-0 md:flex-row md:mx-20 md:gap-12">
                <DonationPoints
                img={NutritionImg}
                heading="Nutrition & Feeding: "
                text="Your donations help us provide nutritious food tailored to the specific dietary needs of each animal, ensuring they receive the essential nutrients for optimal health and vitality."
                />
                <DonationPoints
                img={ComfortImg}
                heading="Shelter & Comfort: "
                text="Your support helps maintain a safe, clean, and comfortable environment for animals, providing shelter, bedding, and enrichment activities that promote physical and emotional well-being."
                />
                <DonationPoints
                img={MedicineImg}
                heading="Medical Care & Rehabilitation: "
                text="Contributions support veterinary care, vaccinations, spaying/neutering, and specialized treatments for animals with medical needs, enabling them to recover and thrive."
                />
            </div>
        </section>
    )
}