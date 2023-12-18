import './Header.css'
import HomeLink from './nav-links/HomeLink'
import OurPetsLink from './nav-links/OurPetsLink'
import ServicesLink from './nav-links/ServicesLink'
import Contacts from './nav-links/Contacts'


export default function Header() {
    return(
        <div>
            <div className="mx-6 my-6 flex flex-row items-center justify-between
            md:my-2 lg:mx-16">
                <h3 className="text-3xl font-medium font-logo mx-auto text-mainOrange md:my-3 md:items-center">PetShelter</h3>
                    
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
                        <ul className='right-52 absolute inline-flex items-center text-sm space-x-2 text-mainOrange font-medium '>
                            <li><a className='hover:underline hover:underline-offset-4' href="./">EN</a></li>
                            <span className='cursor-default'>/</span>
                            <li><a className='text-[#DFB198] hover:underline hover:underline-offset-4' href="./">LT</a></li>
                        </ul>
                    <button className='right-0 text-sm absolute basic-button text-[#447DD1] border hover:bg-[#447DD1] duration-300 hover:text-white'>Volunteer</button>
                </div>
            </div>

                <div className="bg-white/50">
                    <nav className='nav-links'> 
                        <HomeLink />
                        <OurPetsLink />
                        <ServicesLink />
                        <Contacts />
                    </nav>
                </div>
        </div>
    )
} 