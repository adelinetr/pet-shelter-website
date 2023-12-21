import OurPetsHero from '../../OurPetsHero'
import  './CatsHero.css'

export default function CatsHero() {
    return(
        <section>
            <OurPetsHero 
            mobileHeroClass='cat-mobile bg-img md:hidden'
            heroClass='cat-hero hidden bg-img cat-mobile md:block'
            heading='Our Cats'
            text= "Explore our Cats Gallery and meet the charming cats currently calling our shelter home. Each profile offers a glimpse into their personalities, preferences, and the type of home they're seeking."
            />
        </section>
    )
}