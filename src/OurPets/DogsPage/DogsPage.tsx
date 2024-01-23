import Contacting from "../../Contact/Contacting";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import DonationSection from "../../Home Page/Donation/Donation";
import DogsApiList from "./DogAPIList";
import DogsHero from "./DogsHero/DogsHero";

export default function DogsPage() {
    return(
        <div>
            <Header />
            <DogsHero />
            <DogsApiList />
            <DonationSection />
            <Contacting />
            <Footer />
        </div>
    )
}