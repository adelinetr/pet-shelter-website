export default function AdoptionComponent() {
    return(
        <div className="text-white hidden md:block">
            <div className='mt-8 text-center md:text-left'>
                <p>If you can give your pet:</p>
                <div className='mt-6 flex flex-col items-center justify-center md:justify-start lg:flex-row'>
                    <div className='space-x-3'>
                        <span className='points'>Good Nutrition</span>
                        <span className='points'>Love & Care</span>
                    </div>
                    <span className='points mt-4 mx-auto lg:mt-0 lg:mx-3'>Safe Environment</span>
                </div>

            </div>

            <div className='flex mt-16 space-x-8 items-center justify-center md:justify-start'>
                <p className='font-medium font-heading'>View our adoption process</p>
            </div>
        </div>
    )
}