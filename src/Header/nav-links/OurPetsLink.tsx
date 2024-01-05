import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function OurPetsLink() {
    const [showLinks, setShowLinks] = useState(true)
    const toggleLinks = () => {
        if (window.innerWidth < 800) {
            setShowLinks(!showLinks)

        }
    }
    return(
        <div onClick={toggleLinks} className='group relative ease-in-out'>
            <Link to='#' className='flex lg:justify-center items-center gap-4 group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200'>
                Our Pets 
                <svg id='arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-mainOrange stroke-white duration-200' d="M13 1L7 7L1 1" stroke="#161616"/>
                </svg>
            </Link>

            <div className={`${showLinks ? 'hidden' : 'flex'} relative lg:group-hover:flex lg:text-base lg:text-center justify-center items-center lg:h-8 text-right mt-10 lg:mt-2 space-y-4 text-lighterGray lg:text-white text-2xl font-light h-28 lg:w-26`}>
                <div>
                    <ul className=' lg:bg-[#BCBCBC] lg:absolute px-12 w-max py-4 lg:bg-opacity-10 lg:backdrop-blur-md rounded-lg right-0 top-0 left-0 space-y-8'>
                        <li>
                            <Link to='/our-pets/cats' className='hover:text-lighterGray duration-200'>Our Cats</Link>
                        </li>
                        <li>
                            <Link to='/our-pets/dogs' className='hover:text-lighterGray duration-200' >Our Dogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}