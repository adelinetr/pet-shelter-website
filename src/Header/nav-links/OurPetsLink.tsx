import { Link } from 'react-router-dom'

export default function OurPetsLink() {
    return(
        <div className='group relative ease-in-out'>
            <Link to='/our-pets' className='flex justify-center items-center gap-4 group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200'>
                Our Pets 
                <svg id='arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-mainOrange duration-200' d="M13 1L7 7L1 1" stroke="#161616"/>
                </svg>
            </Link>

            <div className='group-hover:flex absolute z-10 items-center justify-center mx-auto hidden bg-white rounded-b-lg ease-in-out h-36 w-52'>
                <div>
                    <ul className=' mx-4 mt-4 space-y-4'>
                        <li>
                            <Link to='/our-pets/cats' className='hover:text-mainOrange duration-200'>Our Cats</Link>
                        </li>
                        <li>
                            <Link to='/our-pets/dogs' className='hover:text-mainOrange duration-200' >Our Dogs</Link>
                        </li>
                        <li>
                            <Link to='/our-pets/adoption-application' className='hover:text-mainOrange duration-200'>Adoption Application</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}