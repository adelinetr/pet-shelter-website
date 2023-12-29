import { useState } from "react"

type Points = {
    icon: React.FC<{ class: string}>;
    heading: string
}

export default function ResponsibilitiesPoints({icon: IconComponent, heading}: Points  ) {
    const [btnState, setBtnState] = useState(false)
    let textColor: string;
    let bgColor: string;
    let svgColor: string;

    if (btnState === true) {
        textColor = 'white';
        bgColor = 'mainOrange'
        svgColor = 'white'
    } else{
        textColor = 'mainOrange'
        bgColor = 'white'
        svgColor = 'mainOrange'
    }

    function switchBtnState() {
        setBtnState(!btnState)
    }

    return(
        <div className="group ">
            <div onClick={switchBtnState} id="point" className={`flex bg-${bgColor} cursor-default duration-300  group-hover:drop-shadow-xl  flex-row items-center justify-center space-x-3 border border-mainOrange w-90 md:w-64 py-1 rounded-full`}>
                <div>
                    <IconComponent class={svgColor} />
                </div>
                <span className={`font-medium text-${textColor}`}>{heading}</span>
            </div>
        </div>
    )
}