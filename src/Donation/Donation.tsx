import DonationPoints from './DonationPoints'
import DonationImg from '../images/donation-img1.png'

export default function Donation() {
    return(
        <div className='md:flex md:justify-between'>
            <div className="flex flex-col mx-10 text-left md:mx-16 h-screen md:flex-row 
            md:h-fit mb-24">
                <div>
                    <div>
                        <h3 className='leading-tight'>Help Our fluffy Friends Today</h3>
                        <h5>How Your Donation Helps:</h5>
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
                </div>

                <div className='mt-16 md:mt-0 md:mx-auto md:justify-center md:flex'>
                    <img className='rounded-lg md:w-fit md:h-90' src={DonationImg} alt="" />
                </div>

            </div>
        </div>
    )
}