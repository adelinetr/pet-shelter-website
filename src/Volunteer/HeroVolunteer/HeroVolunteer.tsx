import HeroSection from '../../HeroSection'
import './HeroVolunteer.css'

export default function HeroVolunteer() {
    return(
        <section>
            <HeroSection
            mobileHeroClass='mobile-hero-volunteer bg-img'
            heroClass='relative bg-img hero-volunteer'
            heading='Volunteer today'
            text="Whether you're an animal lover, a skilled organizer, or have a knack for photography, there's a role tailored for your unique talents and interests."
            btnClass='hidden'
            />
        </section>
    )
} 