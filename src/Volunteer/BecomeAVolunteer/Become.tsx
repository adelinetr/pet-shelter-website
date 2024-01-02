import VolunteerImg from '../images/volunteer.png'

export default function BecomeAVolunteer () {
    return(
        <section className='flex flex-col justify-center items-center md:flex-row mx-6 md:mx-20 md:space-x-20 h-fit mb-20'>
            <div className='mb-8 xl:w-1/2'>
                <h3 className='w-fit leading-tight text-center'>Become a Volunteer</h3>
                <p className='mt-4 text-gray font-light font-text leading-relaxed'>To get started, explore our volunteer opportunities, review the responsibilities, and complete our volunteer application form. Upon joining, you'll receive comprehensive training, ongoing support, and the opportunity to make a lasting difference in the lives of animals.</p>

            </div>

            <div>
                <img className='rounded-lg' src={VolunteerImg} alt="" />
            </div>
        </section>
    )
}