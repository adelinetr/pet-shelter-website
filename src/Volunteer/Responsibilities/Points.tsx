type Points = {
    icon: React.FC<{ class: string}>;
    heading: string;
    callback: (heading: string) => void;
    isSelected: boolean;
}

export default function ResponsibilitiesPoints({
    icon: IconComponent,
    heading,
    callback,
    isSelected
}: Points) {
   
    let textColor: string;
    let bgColor: string;
    let svgColor: string;

    if (isSelected === true) {
        textColor = 'white';
        bgColor = 'mainOrange'
        svgColor = 'white'
    } else{
        textColor = 'mainOrange'
        bgColor = 'white'
        svgColor = 'mainOrange'
    }

    return(
        <div className="group ">
            <div onClick={() => callback(heading)} id="point" className={`flex bg-${bgColor} cursor-default duration-300  group-hover:drop-shadow-xl  flex-row items-center justify-center space-x-3 border border-mainOrange w-90 md:w-64 py-1 rounded-full`}>
                <div>
                    <IconComponent class={svgColor} />
                </div>
                <span className={`font-medium text-${textColor}`}>{heading}</span>
            </div>
        </div>
    )
}