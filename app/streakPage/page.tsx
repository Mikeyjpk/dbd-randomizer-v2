"use client"

import { FaWalking } from "react-icons/fa"; 
import { ImEvil } from "react-icons/im"; 

import { useEffect, useState } from "react";
import KillerRole from "./components/KillerRole";
import SurvivorRole from "./components/SurvivorRole";

const StreakPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleRole = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <div className="flex flex-col w-full h-screen bg-neutral-700 rounded-tl-xl">
            { isOpen ? (<KillerRole />) : (<SurvivorRole/>)}
            <button onClick={toggleRole} className="w-fit bg-red-600/30 p-2 rounded-md text-xs font-semibold">
                CHANGE ROLE
            </button>
        </div>
     );
}
 
export default StreakPage;