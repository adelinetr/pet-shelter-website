import './DogsHero.css'
import HeroSection from '../../../HeroSection'
 
export default function DogsHero() {
    return(
        <section>
            <HeroSection
            mobileHeroClass='dogs-mobile-hero bg-img md:hidden'
            heroClass='relative hidden md:block bg-img dogs-hero'
            heading='Our Dogs'
            text='At our shelter, we prioritize the perfect pairing of dogs with loving homes. Embark on your journey to discover the ideal companion that resonates with your heart and lifestyle.'
            adoptionText='hidden'
            />
        </section>
    )
}