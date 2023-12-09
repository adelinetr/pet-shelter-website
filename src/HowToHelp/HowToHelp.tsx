import ServicesComponent from "./ServicesComponent";
import AdoptionIcon from '../images/adoption.svg'
import DonationIcon from '../images/donation.svg'
import VolunteerIcon from '../images/volunteer.svg'

export default function HowToHelp () {
    return(
        <section className="flex flex-col text-center items-center bg-lightGray h-full max-w-full mt-14 pb-28
        md:h-screen">

            <div className="text-container text-center mt-12 ">
                <h3 className="text-4xl font-heading text-blue font-medium mb-10 md:mb-6">How to help?</h3>
                <p className="leading-7 w-90 text-lg md:text-sm md:w-96">Every homeless animal deserves a second opportunity, so we provide care, nursing, and make every effort to secure their ideal homes.
                 <br /><br />If you'd like to contribute, you can support us by:</p>
            </div>

            <div className="md:flex-row flex flex-col">

            <ServicesComponent
            image= {AdoptionIcon}
            title="Adoption"
            description="Every adoption creates a forever home filled with joy and wagging tails!"
            />

            <ServicesComponent
            image= {DonationIcon}
            title="Donation"
            description="Help us provide shelter, medical care, and love to animals in need."
            />

            <ServicesComponent
            image= {VolunteerIcon}
            title="Volunteer"
            description="Your time and dedication can create a brighter future for our pets."
            />

            </div>

        </section>
    )
}