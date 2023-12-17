

export default function ServicesComponent (props: {image: string, title: string, description: string, border: string, titleColor: string, groupClass: string }) {
    const cardClass = 'group mt-16 rounded-lg duration-150 flex flex-row ease-in-out lg:mx-4';
    const titleClass = 'text-3xl font-semibold mb-2 md:text-xl'
    const divClass = 'w-90 h-90 flex flex-col justify-center items-center lg:w-fit lg:flex-row lg:h-32'

    return(
        <section>
            <div className={`${props.border} ${cardClass}`} >

                <div className={`${divClass} ${props.groupClass}`}>

                    <div>
                        <img 
                        className="mb-6 mt-8 lg:w-32 lg:h-20 lg:mx-1" 
                        src={props.image} 
                        alt="" />
                    </div>

                    <div className="text-left mx-6 flex flex-col items-center lg:items-baseline lg:w-60 ">
                        <h4 className={`${props.titleColor} ${titleClass}`}>{props.title}</h4>
                        <p className=" w-80 text-lg text-center text-gray md:text-sm group-hover:text-white lg:w-fit lg:text-left">{props.description}</p>
                    </div>
                </div>

                </div>

        </section>
    )
}