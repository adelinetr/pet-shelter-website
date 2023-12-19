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

            <div className='group-hover:flex absolute items-center justify-center mx-auto hidden bg-white rounded-b-lg ease-in-out h-48 w-44'>
                <div>
                    <ul className=' mx-4 mt-4 space-y-4 text-gray'>
                        <li><Link to='/services/adoption' className='hover:text-mainOrange duration-200'>Adoption</Link></li>
                        <li><Link to='/services/volunteer-today' className='hover:text-mainOrange duration-200'>Volunteer Today</Link></li>
                        <li><Link to='/services/donate' className='hover:text-mainOrange duration-200'>Donate & Help</Link></li>
                        <li><Link to='/services/foster-program' className='hover:text-mainOrange duration-200'>Foster Program</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}