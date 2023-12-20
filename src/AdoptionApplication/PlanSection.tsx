export default function PlanSection () {
    return(
        <section className="h-fit pt-12 pb-12 mt-16 flex flex-col items-center justify-center bg-[#FFF4EA]">
            <div className="w-full md:w-1/2">
                <h3 className="text-center mb-10 mx-16 md:mx-0">Planning to adopt a pet?</h3>
                
                <p className="mx-12 md:mx-0">
                    Visit our shelter during adoption hours to meet our adorable pets and spend time interacting with different animals to find the perfect match for your lifestyle. Consult with our knowledgeable staff members who are here to assist you. Share your preferences, lifestyle, and expectations, and we'll help you find a pet that suits your needs.
                    <br /><br />
                    Once you've found a potential match, our staff will provide you with an adoption application form. Complete the form, providing accurate information about your living situation, experience with pets, and preferences. Our team will then review your application to ensure that the pet you've chosen is a good fit for your home and lifestyle. We may contact you for additional information or clarification if needed.
                    <br /><br />
                    If your application is approved, you'll have the opportunity for a meet-and-greet with the pet. Spend time getting to know each other to ensure a strong connection. 
                </p>

                <div className="flex items-center justify-center mt-12">
                    <span className="px-6 py-2 bg-mainOrange rounded-full text-white font-medium">Adoption fee: 35€</span>
                </div>
            </div>

        </section>
    )
}