import Contacting from "../Contact/Contacting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "./About/About";
import CatData from "./CatData/CatData";
import Donation from "./Donation/Donation";
import Hero from "./Hero/Hero";
import HowToHelp from "./HowToHelp/HowToHelp";
import Volunteer from "./Volunteer/Volunteer";

export default function Home() {
    return(
        <div className="Home">
            <Header />
            <Hero />
            <HowToHelp />
            <CatData />
            <About />
            <Donation />
            <Volunteer />
            <Contacting />
            <Footer />
        </div>
    )
}