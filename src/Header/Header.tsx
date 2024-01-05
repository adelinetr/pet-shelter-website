import './Header.css'
import HomeLink from './nav-links/HomeLink'
import OurPetsLink from './nav-links/OurPetsLink'
import ServicesLink from './nav-links/ServicesLink'
import Contacts from './nav-links/Contacts'
import AboutUs from './nav-links/AboutUs'
import Languages from './nav-links/Languages'
import { useState } from 'react'


export default function Header() {
    const [isOpen, setisOpen] = useState(false);
    const[showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setisOpen(!isOpen);
        setShowMenu(!showMenu)
    }

    
    return(
        <header className='relative flex flex-col justify-center items-center'>
        <div className='absolute w-full lg:z-10 lg:mt-32'>
            <div 
            className="flex relative md:my-2 lg:mx-16"
            > 
                <div className='absolute flex-col z-20 justify-center items-center h-auto lg:relative flex mt-8'>
                    <div className='flex flex-row w-80 mx-6 justify-between items-center'>
                        <div className='sticky'>
                            <h3 className='text-3xl relative font-medium font-logo md:mt-8 text-white lg:items-center'>PetShelter</h3>
                        </div>
                            
                        <div onClick={toggleMenu} id='menu' className={`${isOpen ? 'open' : ''} absolute float-left right-2`}>
                            <button type="button" id="menu-btn"
                            className="z-10 hamburger lg:hidden focus:outline-none">
                                <span className="top-line"></span>
                                <span className="middle-line"></span>
                                <span className="bottom-line"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div id='nav-links' className={`${showMenu ? 'flex' : 'hidden'}  absolute h-screen lg:flex flex-col lg:flew-row items-center justify-between bg-[#1A1A1A] text-white w-full lg:bg-opacity-0 mx-0 px-0 z-10`}>
                    <nav className='h-screen lg:space-x-24 z-30 flex flex-col space-y-12 text-4xl md:space-y-0 md:text-lg justify-center items-start lg:flex-row lg:mt-20'> 
                            <HomeLink />
                            <AboutUs />
                            <OurPetsLink />
                            <ServicesLink />
                            <Contacts />
                    </nav>
                    <div className='absolute z-30 h-fit w-full lg:mt-16'>
                        <Languages />
                    </div>
                </div>

            </div>

                <div>
                    <nav className='nav-links lg:hidden'> 
                        <HomeLink />
                        <AboutUs />
                        <OurPetsLink />
                        <ServicesLink />
                        <Contacts />
                    </nav>

                    <div className='lg:hidden'>
                        <Languages />
                    </div>
                </div>
        </div>
        </header>
    )
} 