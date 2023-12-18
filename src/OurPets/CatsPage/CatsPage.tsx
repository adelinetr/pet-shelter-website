import Header from "../../Header/Header";
import CatsHero from './CatsHero/CatsHero' 
import Search from "./Search/Search";

export default function CatsPage() {
    return(
        <section>
            <Header />
            <CatsHero />
            <Search />
        </section>
    )
}