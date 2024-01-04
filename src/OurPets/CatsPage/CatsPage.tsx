import Header from "../../Header/Header";
import SearchSection from "../SearchSection";
import CatsAPI from "./CatsAPI/CatsAPI";
import CatsHero from './CatsHero/CatsHero' 

export default function CatsPage() {
    return(
        <section>
            <Header />
            <CatsHero />
            <SearchSection />
            <CatsAPI />
        </section>
    )
}