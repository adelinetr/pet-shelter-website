import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Selector() {

    return(
        <div className="mx-4 w-52 text-lg h-80 ">
            <button id="chooseCity" className="w-full border border-lighterGray p-2 flex items-center justify-between rounded-t-lg">
                <h6>Select city</h6>
                <SlArrowDown id="arrow" />
            </button>

            <ul className="space-y-1 mt-0 border border-lighterGray cursor-default  border-t-0 rounded-bl-lg rounded-br-lg">
                <li className="px-2 hover:bg-[#E2E2E2] duration-300 ease-in-out ">
                    <input id="allCities" className=" text-mainOrange focus:text-mainOrange  w-4 h-4 rounded mr-2 border border-mainOrange" type="checkbox" /> 
                    <label htmlFor="allCities">All cities</label>
                </li>
                <li className="px-2 hover:bg-[#E2E2E2] duration-300 ease-in-out">
                        <input className="text-mainOrange focus:text-mainOrange  w-4 h-4 rounded mr-2 border border-mainOrange" type="checkbox" id="vilnius" /> 
                        <label htmlFor="vilnius">Vilnius</label>
                </li>
                <li className="px-2 hover:bg-[#E2E2E2] duration-300 ease-in-out">
                        <input className="text-mainOrange focus:text-mainOrange  w-4 h-4 rounded mr-2 border border-mainOrange" type="checkbox" id="checkbox"/> 
                        <label htmlFor="kaunas">Kaunas</label>
                </li>
                <li className="px-2 hover:bg-[#E2E2E2] duration-300 ease-in-out">
                    <label>
                        <input className="text-mainOrange focus:text-mainOrange  w-4 h-4 rounded mr-2 border border-mainOrange" type="checkbox" id="checkbox"/> 
                        Palanga
                    </label>
                </li>
            </ul>
        </div>
    )
}