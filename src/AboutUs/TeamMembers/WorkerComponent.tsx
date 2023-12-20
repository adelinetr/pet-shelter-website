export default function WorkerComponent(props : {image: string , name: string, job: string}) {
    return(
        <section>
            <div className="my-2">
                <div className="w-full h-40 items-center justify-center flex flex-col">
                    <img className="w-32 h-40 object-cover rounded-lg lg:w-40" src={props.image} alt="" />
                </div>

                <div className="text-center">
                    <h4 className="font-heading font-medium">{props.name}</h4>
                    <p className="uppercase font-text text-xs text-lighterGray">{props.job}</p>
                </div>
            </div>
        </section>
    )
}