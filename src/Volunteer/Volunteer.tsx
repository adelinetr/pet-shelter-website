import VolunteerImg1 from '../images/volunteer-1.png'
import VolunteerImg2 from '../images/volunteer-2.png'


export default function Volunteer () {
    return(
        <section className='xl:max-w-7xl flex flex-col mx-auto'>
            <div  className='mx-6 flex flex-col justify-center mb-10 md:flex-row xl:items-center'>

            <div>
                <img className='rounded-lg h-80 object-cover w-full md:h-fit md:w-fit' src={VolunteerImg1} alt="" />
            </div>

            <div className='text-center flex flex-col lg:mx-10'>
                <h3 className='text-4xl mt-6'>Try volunteering & spend more time with our animals!</h3>
                <p className='mt-3'>Our goal is finding home for all sheltered animals, thus they stay in the shelter until they find new owners or die of old age. The organization is based on people who volunteer at the shelter.</p>

                <div className='relative  items-center justify-center flex flex-col mt-20 mb-20'>
                    <div className='absolute group items-center justify-center '>
                        <button className=' group-hover:bg-[#306DC6] duration-300 border bg-[#447DD1] text-white px-28 text-2xl rounded-full py-2
                        md:px-14 md:text-base'>Volunteer</button>
                    </div>
                </div>
            </div>

            <div>
                <img className='rounded-lg h-80 object-cover w-full md:h-fit md:w-fit' src={VolunteerImg2} alt="" />
            </div>

            </div>
        </section>
    )
}