import Contacts from "../Contact/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Donation from "../Home Page/Donation/Donation";
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
            <Donation />
            <Contacts />
            <Footer />
        </div>
    )
}