import Header from "../../Header/Header";
import Search from "../CatsPage/Search/Search";
import DogsHero from "./DogsHero";

export default function DogsPage() {
    return(
        <div>
            <Header />
            <DogsHero />
            <Search />
        </div>
    )
}