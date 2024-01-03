import Img1 from './images/img1.png'
import Img2 from './images/img2.png'

export default function PlanSection () {
    return(
        <section className='flex flex-col justify-center items-center mx-auto max-w-7xl'>
        <div className=" mx-6 h-fit md:pt-12 pb-12 mt-16 flex flex-col items-center justify-center md:flex-row md:mx-12 md:space-x-20 md:h-screen">
            <div className='space-y-6 md:w-1/2 '>
                <img src={Img1} className='rounded-lg'  alt="" />
                <img src={Img2} className='rounded-lg' alt="" />
            </div>
            <div className='mt-16 md:w-1/2'>
                <span className="basic-button bg-[#FFF6F1] text-mainOrange cursor-default">adoption fee: 35€</span>
                <h3 className='mt-10'>Planning to adopt a pet?</h3>
                <p>
                    Visit our shelter during adoption hours to meet our adorable pets and spend time interacting with different animals to find the perfect match for your lifestyle. 
                    <br /><br />
                    Once you've found a potential match, our staff will provide you with an adoption application form. Complete the form, providing accurate information about your living situation, experience with pets, and preferences. Our team will then review your application to ensure that the pet you've chosen is a good fit for your home and lifestyle. We may contact you for additional information or clarification if needed.
                    <br /><br />
                    If your application is approved, you'll have the opportunity for a meet-and-greet with the pet. Spend time getting to know each other to ensure a strong connection. 
                </p>
            </div>
        </div>
        </section>
    )
}