import { useState } from 'react'
import Administrative from '../images/Administrative'
import Feeding from '../images/Feeding'
import Playing from '../images/Playing'
import CatImg from '../images/cat.png'

import ResponsibilitiesPoints from './Points'

export default function Responsibilities () {
    const [selectedBtn, selectBtn] = useState("")

    function buttonCallback(heading:string){
        selectBtn(heading)
    }

    return(
        <section className='mx-6 max-w-max'>
        <div className="h-fit flex flex-col mb-40 md:flex-row md:space-x-20 md:mx-44 md:mt-20">
            <div className='flex flex-col w-fit md:w-1/3'>
                <img 
                src={CatImg} 
                alt='Img by "https://www.freepik.com/free-psd/beautiful-cute-cat-isolated_87156276.htm#query=cats%20png&position=44&from_view=search&track=ais&uuid=93131bb6-be3b-4738-ad88-de178425318c"'
                />   
            </div>

            <div className='md:w-1/2'>
                <div>
                    <h3 className='mt-12 text-center md:text-6xl md:w-max'>Responsibilities and Benefits</h3>
                    <p className='mt-8 md:w-fit md:text-lg text-gray font-text font-light'>
                        As a volunteer, you'll play a vital role in providing care, support, and love to our furry residents, making a tangible difference in their lives. Responsibilities may include feeding, grooming, socializing with animals, assisting with administrative tasks, or helping with events.
                    </p>
                </div>

                <div className='mt-14 md:mt-24 flex flex-col items-center md:flex-row md:space-y-0 space-y-6 md:space-x-5'>
                    
                    <ResponsibilitiesPoints
                    icon={Administrative}
                    heading='Administrative Tasks'
                    callback={buttonCallback}
                    isSelected={selectedBtn === 'Administrative Tasks'}
                    />
                    <ResponsibilitiesPoints 
                    icon={Feeding}
                    heading='Feeding'
                    callback={buttonCallback}
                    isSelected={selectedBtn === 'Feeding'}
                    />
                    <ResponsibilitiesPoints
                    icon={Playing}
                    heading='Playing & Socialising'
                    callback={buttonCallback}
                    isSelected={selectedBtn === 'Playing & Socialising'}
                    />

                </div>
            </div>
        </div>
        </section>
    )
}