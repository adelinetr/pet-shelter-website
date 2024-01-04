import Selector from "./CatsPage/Search/Selector";
import { IoIosSearch } from "react-icons/io";
 
export default function Filter () {
    return(
        <section>
            <div className="flex md:flex-row h-max mb-80 justify-center items-center">
                <Selector
                label="city"
                option="All cities"
                option2="Vilnius"
                option3="Kaunas"
                option4="Klaipėda"
                option5="Palanga"
                name="City"
                value="city"
                />
                <Selector
                label="age"
                option="1-2 months"
                option2="3-6 months"
                option3="7 months - 1 year"
                option4="1-3 years"
                option5="4-8 years"
                option6="8+ years"
                name="Age"
                value="age" />
                
                <IoIosSearch className="w-12 duration-300 fill-gray h-max hover:bg-lightGray bg-white rounded-full px-2 py-2 cursor-pointer" />
            </div>
        </section>
    )
}