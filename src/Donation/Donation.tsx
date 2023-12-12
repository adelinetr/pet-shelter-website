import DonationPoints from './DonationPoints'
import DonationImg from '../images/donation-img1.png'

export default function Donation() {
    return(
        <section className='flex-col flex items-center mt-4 h-fit mb-20'>
        <div className='justify-center items-center flex flex-col md:flex-row'>
            <div className="flex flex-col mx-10 space-x-20 text-left h-screen md:flex-row 
            md:h-screen md:justify-center md:items-center">
                <div className='flex flex-col '>
                    <div>
                        <h3 className='leading-tight'>Help Our fluffy Friends Today</h3>
                        <h5 className='mb-8'>How Your Donation Helps:</h5>
                    </div>

                    <div className='flex flex-col'>
                        <DonationPoints
                        description="25€ can provide a week's worth of nutritious meals for a pet"
                        />

                        <DonationPoints
                        description="50€ can cover the cost of vaccinations for a newly rescued animal"
                        />

                        <DonationPoints
                        description="100€ can contribute to neutering"
                        />
                    </div>
                    
                    <div className='group relative mt-14 mb-10'>
                        <button className='absolute group-hover:bg-[#3CA767] duration-300 font-medium group-hover:text-white text-[#3CA767] uppercase px-14 py-2 rounded-full border border-[#3CA767]'>Donate</button>
                    </div>
                </div>

                <div className='mt-16 md:mt-0 md:mx-auto md:justify-center md:flex'>
                    <img className='rounded-lg md:w-fit object-cover md:h-96' src={DonationImg} alt="" />
                </div>

            </div>
        </div>
        </section>
    )
}