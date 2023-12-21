import './Header.css'
import HomeLink from './nav-links/HomeLink'
import OurPetsLink from './nav-links/OurPetsLink'
import ServicesLink from './nav-links/ServicesLink'
import Contacts from './nav-links/Contacts'
import AboutUs from './nav-links/AboutUs'
import { useLocation } from 'react-router-dom'


export default function Header() {
    const location = useLocation();
    let headerColor; 

    if (location.pathname === '/services/adoption') {
        headerColor = 'text-black';
    } 

    return(
        <header className='relative flex flex-col justify-center items-center'>
        <div className='absolute w-full lg:z-10 mt-32'>
            <div className="mx-10 my-6 flex flex-row items-center justify-between
            md:my-2 lg:mx-16"> 
                <h3 className={`text-3xl z-10 font-medium font-logo md:mx-auto text-white ${headerColor} md:my-3 lg:items-center`}>PetShelter</h3>
                    
                <div className="menu">
                    <button type="button" id="menu-btn"
                    className="z-40 block hamburger lg:hidden focus:outline-none
                    ">
                        <span className="top-line"></span>
                        <span className="middle-line"></span>
                        <span className="bottom-line"></span>
                    </button>
                </div>

                <div className='hidden lg:flex items-center justify-center float-right right-10 absolute'>
                        <ul className='nav-links right-52 absolute inline-flex items-center text-sm space-x-2 text-mainOrange font-medium'>
                            <li><a className='hover:underline text-white hover:underline-offset-4' href="./">EN</a></li>
                            <span className='cursor-default text-lighterGray'>/</span>
                            <li><a className='text-lighterGray hover:underline hover:underline-offset-4' href="./">LT</a></li>
                        </ul>
                    <button className='right-0 text-sm absolute basic-button text-white  bg-orange hover:bg-mainOrange duration-300 hover:text-white'>Volunteer</button>
                </div>
            </div>

                <div>
                    <nav className='nav-links'> 
                        <HomeLink />
                        <AboutUs />
                        <OurPetsLink />
                        <ServicesLink />
                        <Contacts />
                    </nav>
                </div>
        </div>
        </header>
    )
} 