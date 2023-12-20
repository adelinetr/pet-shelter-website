import MobileImg  from './images/hero-img.png'

export default function AdoptionHero () {
    return(
        <section className="flex flex-col items-center justify-center md:mx-16 md:flex-row md:mt-0">
                <div className="mt-mx-8">
                    <div className="mb-6 text-center md:text-left md:mt-10">
                        <h3>Adopting a Pet</h3>
                        <h5>Everything you need to know</h5>
                    </div>
                    <img className='mt-7 my-6 md:my-0 h-60 w-full object-cover rounded-lg md:hidden' src={MobileImg} alt="" />
                    <p>
                    Your journey towards companionship begins here, and we're excited to guide you through the rewarding process of welcoming a new member into your home. 
                    </p>

                    <div className='mt-8'>
                        <p>If you can give your pet:</p>
                        <div className='mt-6 flex flex-col items-center justify-center md:justify-start lg:flex-row'>
                            <div className='space-x-3'>
                                <span className='points'>Good Nutrition</span>
                                <span className='points'>Love & Care</span>
                            </div>
                            <span className='points mt-4 mx-auto lg:mt-0 lg:mx-3'>Safe Environment</span>
                        </div>

                    </div>

                    <div className='flex mt-16 space-x-8 items-center justify-center md:justify-start'>
                        <p className='font-medium font-heading'>View our adoption process</p>
                        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29289 29.7071C7.68342 30.0976 8.31658 30.0976 8.70711 29.7071L15.0711 23.3431C15.4616 22.9526 15.4616 22.3195 15.0711 21.9289C14.6805 21.5384 14.0474 21.5384 13.6569 21.9289L8 27.5858L2.34315 21.9289C1.95262 21.5384 1.31946 21.5384 0.928933 21.9289C0.538409 22.3195 0.538409 22.9526 0.928933 23.3431L7.29289 29.7071ZM7 4.37114e-08L7 29L9 29L9 -4.37114e-08L7 4.37114e-08Z" fill="black"/>
                        </svg>

                    </div>
                </div>
                <div className='hidden md:block w-full'>
                    <img src={MobileImg} 
                    className='w-full h-96 object-cover rounded-lg' alt="" />
                </div>
        </section>
    )
}