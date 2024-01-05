export default function Languages () {
    return(
        <div className='hidden lg:flex mt-10 items-center justify-center float-right right-10 absolute'>
                <ul className='nav-links right-52 absolute inline-flex items-center text-sm space-x-2 text-mainOrange font-medium'>
                    <li><a className='hover:underline text-white hover:underline-offset-4' href="./">EN</a></li>
                    <span className='cursor-default text-lighterGray'>/</span>
                    <li><a className='text-lighterGray hover:underline hover:underline-offset-4' href="./">LT</a></li>
                </ul>
            <button className='right-0 text-sm absolute basic-button text-white  bg-orange hover:bg-mainOrange duration-300 hover:text-white'>Volunteer</button>
        </div>
    )
}