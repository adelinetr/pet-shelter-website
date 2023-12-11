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
        <div className="h-screen max-w-5xl mx-10 md:mx-16 mb-10 mt-14 md:mb-24">
            <div className='md:flex md:justify-between md:items-center md:gap-10'>
                <div className="text-left mt-14 md:mt-6">
                    <h3>About us</h3>
                    <h5>Our mission:</h5>
                </div>

                <div className="mt-8 md:max-w-2xl">
                    <p className="text-base text-gray">
                    Founded in 2007, we have grown into a thriving community of animal lovers. It all started with a group of dedicated individuals who shared a common goal – to rescue, rehabilitate. Today, we continue to build on that foundation, fueled by the support of our incredible volunteers, donors, and adoptive families.
                    <br /><br />
                    We believe that every pet deserves a chance for a joyful life, and we work tirelessly to make that vision a reality.
                    </p>
                </div>
            </div>

            <motion.div className='flex mt-12 h-fit overflow-hidden' ref={carousel}>
                <motion.div className='flex w-86' 
                drag = 'x' 
                dragConstraints={{right:0, left: -width ?? 0 }}>
                    {Card.map((image, index) => {
                        return(
                            <motion.div className='w-64 object-cover md:pointer-events-none md:w-80'  key={index}>
                                <img src={image} className='w-100 object-cover h-80 md:h-90' alt='' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}