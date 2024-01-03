import Header from "../Header/Header";
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
        </section>
    )
}