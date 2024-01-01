import Contacting from "../Contact/Contacting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutDonation from "./AboutDonation/AboutDonation";
import HelpDonation from "./HelpDonation/HelpDonation";
import DonationHero from "./HeroDonation/DonationHero";

export default function Donation() {
    return(
        <div>
            <Header />
            <DonationHero />
            <AboutDonation />
            <HelpDonation />
            <Contacting />
            <Footer />
        </div>
    )
}