import HeroSection from '../HeroSection'
import './Adoption.css'

export default function AdoptionHero () {
    return(
        <section className="flex flex-col md:mt-0">
            <HeroSection
            heroClass='adoption-hero relative bg-img hidden md:block'
            mobileHeroClass='adoption-mobile-hero relative bg-img md:hidden'
            heading='Adopting a pet '
            text="Your journey towards companionship begins here, and we're excited to guide you through the rewarding process of welcoming a new member into your home."
            btnClass='hidden' />
        </section>
    )
}