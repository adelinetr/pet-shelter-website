import Button from "../Button";

export default function OurPetsHero (props : {mobileHeroClass:string, heroClass: string, heading: string, text: string}) {
    return(
        <section className="w-full">
        <div className='mx-1 flex flex-col h-screen justify-center items-center'>
            <div className={props.mobileHeroClass}></div>
            <div className={props.heroClass}></div>
            
            <div className='absolute mx-4 md:mx-12 text-white'>
                <h3 className='mt-32'>{props.heading}</h3>
                <p className='text-lightGray md:w-1/3'>{props.text}</p>

                <div className='flex flex-col mt-64 md:mt-32 space-y-7'>
                    <Button
                    name='Adoption Application'
                    />
                    <Button
                    name='How to Take Care'
                    /> 
                </div>
            </div>
        </div>
        </section>
    )
}