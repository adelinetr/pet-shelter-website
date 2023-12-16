export default function Contacts() {
    return(
        <section className="flex-col flex w-full items-center justify-center mt-20 ">
            <div className="bg-lightGray w-screen max-w-7xl mx-auto rounded-lg h-fit mb-20">
                <div className="mx-10 mt-12"> 
                    <h3 className="text-center mb-6">Contact us</h3>
                    <p className="text-sm mx-auto text-center w-96 text-black">Whether you're seeking information about our adoption process, volunteering opportunities, or have general inquiries about pet care, don't hesitate to contact us. </p>
                </div>

                <div className="mx-10 mt-20">
                    <div className="flex flex-col items-center space-y-10 mb-14 w-full">
                        <input className="input md:w-1/2" type="text" placeholder="Name, Surname" />
                        <input className="input md:w-1/2" type="text" placeholder="Your Email" />
                        <input className="input md:w-1/2" type="text" placeholder="Phone Number" />
                        <input className=" border-lighterGray text-clip input md:w-1/2 rounded-lg  bg-white border px-4 pb-20 pt-4" type="text" placeholder="Your question..." />
                    </div>

                    <div className="button-hover flex items-center justify-center pb-12">
                        <button className="basic-button float-none px-32 py-3">Submit</button>
                    </div>
                </div>

            </div>
        </section>
    )
}