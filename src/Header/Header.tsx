import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return(
        <div>
            <div className="mx-6 my-6 flex flex-row items-center justify-between
            md:my-2 lg:mx-16">
                <h3 className="text-3xl font-medium font-heading text-mainOrange md:my-3 md:items-center">PetShelter</h3>
                    
                <div className="menu">
                    <button type="button" id="menu-btn"
                    className="z-40 block hamburger md:hidden focus:outline-none
                    ">
                        <span className="top-line"></span>
                        <span className="middle-line"></span>
                        <span className="bottom-line"></span>
                    </button>
                </div>

                <div className='hidden md:flex items-center justify-center relative'>
                    <div className='mr-6'>
                        <ul className='inline-flex items-center text-sm space-x-2 text-mainOrange font-medium '>
                            <li><a className='hover:underline hover:underline-offset-4' href="./">EN</a></li>
                            <span className='cursor-default'>/</span>
                            <li><a className='text-[#DFB198] hover:underline hover:underline-offset-4' href="./">LT</a></li>
                        </ul>
                    </div>
                    <button className='basic-button text-[#447DD1] border hover:bg-[#447DD1] duration-300 hover:text-white'>Volunteer</button>
                </div>
            </div>

                <div className="bg-white/50">
                    <nav className='hidden z-10 font-heading pt-6 text-2xl bg-white/50 pb-10 space-y-5 
                    flex-col items-center justify-between mt-6 lg:flex lg:mt-2 lg:flex-row lg:text-base
                     lg:space-y-0 lg:pt-0 lg:pb-0 lg:mb-4 lg:justify-center lg:space-x-44 lg:items-center'>
                        
                        <Link to='/' className='hover:text-mainOrange duration-200'>Home</Link>

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

                        <div className='group relative ease-in-out'>
                            <a className='flex justify-center items-center gap-4 group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200' href="./">
                                Services 
                                <svg id='arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:stroke-mainOrange duration-200' d="M13 1L7 7L1 1" stroke="#161616"/>
                                </svg>
                            </a>

                            <div className='group-hover:flex absolute z-10 items-center justify-center mx-auto hidden bg-white rounded-b-lg ease-in-out h-48 w-52'>
                                <div>
                                    <ul className=' mx-4 mt-4 space-y-4'>
                                        <li><Link to='/services/adoption' className='hover:text-mainOrange duration-200'>Adoption</Link></li>
                                        <li><Link to='/services/volunteer-today' className='hover:text-mainOrange duration-200'>Volunteer Today</Link></li>
                                        <li><Link to='/services/donate' className='hover:text-mainOrange duration-200'>Donate & Help</Link></li>
                                        <li><Link to='/services/foster-program' className='hover:text-mainOrange duration-200'>Foster Program</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a className='hover:text-mainOrange duration-200' href="./">Contacts</a>
                    </nav>
                </div>
        </div>
    )
} 