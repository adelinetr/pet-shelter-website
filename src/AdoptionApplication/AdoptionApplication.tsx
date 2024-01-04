import Contacting from "../Contact/Contacting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Donation from "../Home Page/Donation/Donation";
import AdoptionHero from "./AdoptionHero";
import FamilyPhotos from "./FamilyPhotos";
import PlanSection from "./PlanSection";

export default function AdoptionApplication() {
    return(
        <section>
            <Header />
            <AdoptionHero />
            <PlanSection />
            <FamilyPhotos />
            <Donation />
            <Contacting />
            <Footer />
        </section>
    )
}