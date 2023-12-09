import Card from './Card'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState } from 'react'

export default function About() {
    const [width, setWidth] = useState<number>(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
    }, [])

    return(
        <div className="h-screen max-w-5xl mx-6 mt-14 mb-5">
            <div className='md:flex md:justify-between md:items-center md:gap-10'>
                <div className="text-left mt-14 md:mt-6">
                    <h3 className="font-heading text-5xl mb-3">About us</h3>
                    <h5 className="uppercase tracking-widest text-gray text-sm ">Our mission:</h5>
                </div>

                <div className="mt-8 md:max-w-2xl">
                    <p className="text-base text-gray">We sincerely believe that all animals left without home deserve a second chance, so we take care of them, heal them and do everything we can to find their dream home. Animal rescue organisation “Lese” was found in 2007. Currently, we have two subunits – in Vilnius and Kaunas.
                        <br /><br />
                        Our goal is finding home for all sheltered animals, thus they stay in the shelter until they find new owners or die of old age. The organization is based on people who volunteer at the shelter.
                    </p>
                </div>
            </div>

            <motion.div className='flex mt-12 h-fit overflow-hidden' ref={carousel}>
                <motion.div className='flex w-86 gap-5 md:w-86' 
                drag = 'x' 
                dragConstraints={{right:0, left: -width ?? 0 }}>
                    {Card.map((image, index) => {
                        return(
                            <motion.div className='w-64 object-cover md:pointer-events-none md:w-70'  key={index}>
                                <img src={image} className='w-100 object-cover h-80 md:h-72' alt='' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}