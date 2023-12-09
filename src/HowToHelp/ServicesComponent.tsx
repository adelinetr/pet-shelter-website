

export default function ServicesComponent (props: {image: string, title: string, description: string }) {
    return(
        <section>
            <div className="services">

                <div className='mt-16 items-center flex flex-col space-y-3 
                md:w-72 md:mt-6 md:mx-5'>
                    <div className="flex items-center mx-auto justify-center">
                        <img 
                        className="mb-6 mt-8 md:w-16" 
                        src={props.image} 
                        alt="" />
                    </div>

                    <div className="pb-6 flex flex-col items-center">
                        <h4 className="font-medium text-3xl mb-4 md:text-lg">{props.title}</h4>
                        <p className="w-80 text-lg md:text-sm md:w-72">{props.description}</p>
                    </div>

                    <div>
                        <button className="text-xl border border-black px-20 rounded-full py-4 
                        md:py-3 md:px-12 md:text-sm">Learn more</button>
                    </div>
                </div>

                </div>

        </section>
    )
}