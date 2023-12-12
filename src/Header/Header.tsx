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
                        <a className='' href="./">Home</a>
                        <a className='' href="./">Our Pets</a>
                        <a className='' href="./">Services</a>
                        <a className='' href="./">Contacts</a>
                    </nav>
                </div>
        </div>
    )
} 