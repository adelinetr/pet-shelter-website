import  './Contacts.css'
import Header from "../Header/Header";
import HeroSection from "../HeroSection";
import Contacting from '../Contact/Contacting';
import Footer from '../Footer/Footer';

export default function Contacts() {
    return(
        <div>
            <Header />
            <HeroSection 
            mobileHeroClass="contacts-hero bg-img"
            heroClass="contacts-hero relative"
            heading="Our Contacts"
            text="For after-hours emergencies or to report a lost or found pet, please call our emergency line: (123) 789-0123."
            btnClass='hidden'
            adoptionText='hidden'
            />
            <Contacting />
            <Footer />

        </div>
    )
}