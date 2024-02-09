import HeroSection from '../../../HeroSection'
import  './CatsHero.css'

export default function CatsHero() {
    return(
        <section>
            <HeroSection
            mobileHeroClass='cat-mobile relative bg-img md:hidden'
            heroClass='cat-hero hidden relative bg-img md:block'
            heading='Our Cats'
            text= "Explore our Cats Gallery and meet the charming cats currently calling our shelter home."
            adoptionText='hidden'
            />
        </section>
    )
}