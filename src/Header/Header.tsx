import './Header.css'


export default function Header() {
    return(
        <div>
            <div className="mx-6 my-6 flex flex-row items-center justify-between
            md:my-2">
                    <h3 className="text-3xl font-medium font-heading text-mainOrange md:mx-auto md:text-xl md:items-center">PetShelter</h3>
                    

                <div className="menu">
                    <button type="button" id="menu-btn"
                    className="z-40 block hamburger md:hidden focus:outline-none
                    ">
                        <span className="top-line"></span>
                        <span className="middle-line"></span>
                        <span className="bottom-line"></span>
                    </button>
                </div>
            </div>

                <div className="bg-white/50">
                    <nav className='hidden z-10 font-heading pt-6 text-2xl bg-white/50 pb-10 space-y-5 
                    flex-col items-center justify-between mt-6 md:flex md:mt-2 md:flex-row md:text-base
                     md:space-y-0 md:pt-0 md:pb-0 md:mb-4 md:justify-center md:space-x-44 md:items-center'>
                        
                        <a className='hover:text-mainOrange duration-200' href="./">Home</a>

                        <div className='group relative ease-in-out'>
                            <a className='flex justify-center items-center gap-4 group-hover:text-mainOrange group-hover:stroke-mainOrange duration-200' href="./">
                                Our Pets 
                                <svg id='arrow' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:stroke-mainOrange duration-200' d="M13 1L7 7L1 1" stroke="#161616"/>
                                </svg>
                            </a>

                            <div className='group-hover:flex absolute z-10 items-center justify-center mx-auto hidden bg-white rounded-b-lg ease-in-out h-36 w-52'>
                                <div>
                                    <ul className=' mx-4 mt-4 space-y-4'>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Our Cats</a></li>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Our Dogs</a></li>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Adoption Application</a></li>
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
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Adoption</a></li>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Volunteer Today</a></li>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Donate & Help</a></li>
                                        <li><a className='hover:text-mainOrange duration-200' href="./">Foster Program</a></li>
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