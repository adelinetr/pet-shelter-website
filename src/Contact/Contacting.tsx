export default function Contacting() {
    return(
        <section className="flex-col flex w-full items-center justify-center mt-20">
            <div className="bg-lightGray w-screen max-w-6xl mx-auto rounded-lg h-fit mb-6 pb-20">
                <div className="mx-10 mt-12"> 
                    <h3 className="text-center mb-6">Contact us</h3>
                    <p className="text-sm mx-auto text-center w-96 text-black leading-6  md:w-1/2">Whether you're seeking information about our adoption process, volunteering opportunities, or have general inquiries about pet care, don't hesitate to contact us. </p>
                </div>

                <div className="mx-10 mt-20">
                    <div className="flex flex-col items-center space-y-10 mb-14 w-full">
                        <input className="input md:w-1/2" type="text" placeholder="Name, Surname" />
                        <input className="input md:w-1/2" type="text" placeholder="Your Email" />
                        <input className="input md:w-1/2" type="text" placeholder="Phone Number" />
                        <input className=" border-lighterGray text-clip input md:w-1/2 rounded-lg  bg-white border px-4 pb-20 pt-4" type="text" placeholder="Your question..." />
                    </div>

                    <div className="button-hover relative flex justify-center items-center">
                        <button className="basic-button float-none absolute md:px-20 bg-mainOrange text-white hover:bg-[#C25E25] duration-300 border-none md:float-left">Submit</button>
                    </div>
                </div>

            </div>
        </section>
    )
}