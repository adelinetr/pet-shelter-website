export default function TrainingPoints(points: {heading: string, text: string}) {
    return(
        <div className="mt-6 space-y-2">
            <h6 className="text-xl">{points.heading}</h6>
            <p className="md:w-1/2 text-[#D4D4D4] font-text text-sm xl:text-base leading-relaxed font-light">{points.text}</p>
        </div>
    )
}