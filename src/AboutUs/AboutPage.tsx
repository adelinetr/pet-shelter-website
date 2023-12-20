import Header from "../Header/Header";
import AboutUs from "./HeroAbout/AboutUs";
import ShelterTeam from "./Team/ShelterTeam";
import TeamMembers from "./TeamMembers/TeamMembers";

export default function AboutPage() {
    return(
        <div>
            <Header />
            <AboutUs />
            <ShelterTeam />
            <TeamMembers />
        </div>
    )
}