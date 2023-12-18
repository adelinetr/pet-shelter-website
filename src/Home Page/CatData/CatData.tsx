export default function CatData() {
    
    return(
        <section className="flex flex-col md:mx-16 lg:mb-32 xl:mb-2 xl:max-w-7xl mx-auto">
            <div className=" max-w-xl mx-10 md:mx-0 lg:max-w-5xl xl:max-w-7xl">
                <div className="flex items-center justify-between max-w-2xl md:max-5xl lg:max-w-7xl">
                    <div>
                        <h3 className="text-mainOrange">Meet Our Friends</h3>
                    </div>

                    <div className="button-hover float-right hidden md:flex">
                        <button className="basic-button hover:bg-[#DA7339] hover:text-white duration-300 font-medium text-mainOrange uppercase px-14 py-2 rounded-full bg-[#FFF3ED]">See our pets</button>
                    </div>
                </div>
            </div>
        </section>
    )
}