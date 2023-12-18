import  './CatsHero.css'

export default function CatsHero() {
    return(
        <section>
            <div className="cat-hero rounded-lg filter brightness-75"></div>
            
            <div className='mx-4 mt-6 md:mx-12'>
                <h3>Cats</h3>
                <h5>that look for home</h5>
            </div>
        </section>
    )
}