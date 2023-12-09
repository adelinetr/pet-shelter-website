import './Hero.css'

export default function Hero () {
    return(
        <div className='flex flex-col items-center justify-center mx-auto'>
            <div className="hero-img relative md:hidden"></div>
            <div className='hidden md:block hero-desktop relative'></div>

            <div className='flex items-center justify-center'>
                <div className="absolute bottom-52 text-center flex flex-col items-center
                md:bottom-45">
                    <h2 className='font-heading text-4xl text-center w-96 bg-mainOrange rounded-full mb-2 text-white'>Our fluffy friends</h2>
                    <h2 className='font-heading text-4xl text-center w-80 bg-mainOrange rounded-full mb-2 text-white'> look for a loving</h2>
                    <h2 className='font-heading text-4xl text-center w-36 bg-mainOrange rounded-full mb-2 text-white'> home!</h2>
                </div>
            </div>

                <div className="button bottom-7 text-center flex mx-auto mt-6
                md:absolute md:bottom-16">
                    <button className='text-xl items-center text-mainOrange border-2 font-semibold border-mainOrange uppercase w-80 rounded-full py-4 hover:bg-mainOrange
                     ease-in-out duration-300 hover:text-white md:bg-white md:w-60 md:hover:bg-mainOrange md:text-sm md:py-4 md:px-3'>Adopt a Pet</button>
                </div>
        </div>
    )
}