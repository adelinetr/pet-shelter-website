export default function TrainingPoints(points: {heading: string, text: string}) {
    return(
        <div className="mt-12 space-y-3">
            <h6 className="text-xl">{points.heading}</h6>
            <p className="md:w-1/3 text-[#D4D4D4] font-text leading-relaxed font-light">{points.text}</p>
        </div>
    )
}