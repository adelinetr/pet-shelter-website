import Contacting from "../Contact/Contacting";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BecomeAVolunteer from "./BecomeAVolunteer/Become";
import HeroVolunteer from "./HeroVolunteer/HeroVolunteer";
import Responsibilities from "./Responsibilities/Responsibilities";
import Training from "./Training/Training";

export default function Volunteer() {
    return(
        <div>
            <Header />
            <HeroVolunteer />
            <Responsibilities />
            <BecomeAVolunteer />
            <Training />
            <Contacting />
            <Footer />
        </div>
    )
}