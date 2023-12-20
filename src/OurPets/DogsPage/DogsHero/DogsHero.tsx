import OurPetsHero from '../../OurPetsHero'
import './DogsHero.css'
 
export default function DogsHero() {
    return(
        <section>
            <OurPetsHero
            heroClass='bg-img dogs-hero dogs-mobile-hero'
            heading='Our Dogs'
            text='At our shelter, we prioritize the perfect pairing of dogs with loving homes. Embark on your journey to discover the ideal companion that resonates with your heart and lifestyle.'
            />
        </section>
    )
}