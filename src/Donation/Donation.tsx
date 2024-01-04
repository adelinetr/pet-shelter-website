import Contacting from "../Contact/Contacting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DonationSection from "../Home Page/Donation/Donation";
import AboutDonation from "./AboutDonation/AboutDonation";
import HelpDonation from "./HelpDonation/HelpDonation";
import DonationHero from "./HeroDonation/DonationHero";

export default function DonationPage() {
    return(
        <div>
            <Header />
            <DonationHero />
            <AboutDonation />
            <HelpDonation />
            <DonationSection />
            <Contacting />
            <Footer />
        </div>
    )
}