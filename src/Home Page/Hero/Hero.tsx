import './Hero.css'

export default function Hero () {
    return(
        <div className='flex flex-col items-center justify-center mx-auto'>
            <div className="hero-img relative md:hidden"></div>
            <div className='hidden md:block hero-desktop relative'></div>

            <div className='flex items-center justify-center'>
                <div className="absolute bottom-40 text-center flex flex-col items-center xl:bottom-72">
                    <h2 className='font-heading text-4xl md:text-5xl text-center w-96 bg-mainOrange rounded-full mb-2 text-white'>Our fluffy friends</h2>
                    <h2 className='font-heading text-4xl md:text-5xl text-center w-80 md:w-90 bg-mainOrange rounded-full mb-2 text-white'> look for a loving</h2>
                    <h2 className='font-heading text-4xl md:text-5xl text-center w-36 md:w-44 bg-mainOrange rounded-full mb-2 text-white'> home!</h2>
                </div>   

                <div className="button bottom-7 text-center flex mx-auto mt-6
                md:absolute md:bottom-16 xl:bottom-40">
                    <button className='text-xl items-center text-mainOrange border-2 font-semibold border-mainOrange uppercase w-80 rounded-full py-4 hover:bg-mainOrange
                     ease-in-out duration-300 md:border-white md:text-white hover:text-mainOrange md:w-60 md:hover:bg-white md:text-sm md:py-3 md:px-2'>Adopt a Pet</button>
                </div>
            </div>

        </div>
    )
}