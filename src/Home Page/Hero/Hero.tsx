import Button from '../../Button'
import './Hero.css'

export default function Hero () {
    return(
        <section>
        <div className='flex flex-col items-center justify-center mt-2 mx-auto '>
            <div className="hero-img absolute md:hidden"></div>
            <div className='hidden md:flex hero-desktop relative'></div>

            <div className='absolute z-0 flex mx-6 flex-col items-center justify-center lg:mt-10 lg:items-start lg:justify-start top-28'>
                <div className=" text-center flex flex-col items-center justify-center lg:text-left lg:mt-12 lg:items-start lg:flex-row lg:justify-between lg:mx-20">
                    <h1 className='text-white mt-10  text-5xl lg:w-1/2 lg:text-6xl'>Our fluffy friends look for a loving home!</h1>
                    <p className='text-white text-sm leading-6 w-80 lg:w-96 font-light font-text mt-10 lg:mt-3'>
                    Your support makes a difference. Whether through adoption, volunteering, or donations, every contribution helps us continue our mission of providing care, love, and hope to animals in need.
                    </p>
                </div>   

                <div className="button w-full  text-center mx-auto text-white lg:mx-20 mt-7 lg:mt-10">
                    <Button
                    name='Adopt a Pet' />
                </div>
            </div>
        </div>
        </section>
    )
}