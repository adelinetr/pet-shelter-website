import OurPetsHero from '../../OurPetsHero'
import  './CatsHero.css'

export default function CatsHero() {
    return(
        <section>
            <OurPetsHero 
            heroClass='cat-hero cat-mobile bg-img'
            heading='Our Cats'
            text= "Explore our Cats Gallery and meet the charming cats currently calling our shelter home. Each profile offers a glimpse into their personalities, preferences, and the type of home they're seeking."
            />
        </section>
    )
}