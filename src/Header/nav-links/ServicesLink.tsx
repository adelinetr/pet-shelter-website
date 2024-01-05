import { Link } from 'react-router-dom'

export default function ServicesLink() {
    
    return(
        <div className='group relative ease-in-out'>
            <a className='flex justify-center items-center gap-4 group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200' href="./">
                Services 
                <svg id='arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-mainOrange stroke-white duration-200' d="M13 1L7 7L1 1" stroke="#161616"/>
                </svg>
            </a>

            <div className='hidden relative lg:group-hover:flex lg:text-base lg:text-center justify-center items-center lg:h-8 text-right mt-10 lg:mt-2 space-y-4 text-lighterGray lg:text-white text-2xl font-light h-28 lg:w-26'>
                <div>
                    <ul className='mr-8 lg:bg-lightGray lg:absolute px-12 w-max py-4 lg:bg-opacity-10 lg:backdrop-blur-md rounded-lg right-0 top-0 left-0 space-y-8'>
                        <li><Link to='/services/adoption' className='hover:text-lighterGray duration-200'>Adoption</Link></li>
                        <li><Link to='/services/volunteer' className='hover:text-lighterGray duration-200'>Volunteer Today</Link></li>
                        <li><Link to='/services/donation' className='hover:text-lighterGray duration-200'>Donate & Help</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}