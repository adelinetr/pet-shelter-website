import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import DonationSection from "../../Home Page/Donation/Donation";
import CatsApiList from "./CatsAPI/CatsApiList";
import CatsHero from './CatsHero/CatsHero' 

export default function CatsPage() {
    return(
        <section>
            <Header />
            <CatsHero />
            <CatsApiList />
            <DonationSection />
            <Footer />
        </section>
    )
}