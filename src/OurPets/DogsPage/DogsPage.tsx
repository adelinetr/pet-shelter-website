import Header from "../../Header/Header";
import SearchSection from "../SearchSection";
import DogsHero from "./DogsHero/DogsHero";

export default function DogsPage() {
    return(
        <div>
            <Header />
            <DogsHero />
            <SearchSection />
        </div>
    )
}