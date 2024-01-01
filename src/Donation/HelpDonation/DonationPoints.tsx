export default function DonationPoints(points: {img: string, heading : string, text: string}) {
    return(
        <div className="flex flex-col justify-center items-center">
            <div>
                <img className="rounded-lg w-max h-72 object-cover" src={points.img} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h6 className="font-text mt-5 text-xl font-medium text-orange">{points.heading}</h6>
                <p className="font-text leading-relaxed text-center text-gray mt-2 font-normal">{points.text}</p>
            </div>
        </div>
    )
}