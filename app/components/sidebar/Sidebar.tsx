"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaWalking } from "react-icons/fa"; 
import { ImEvil } from "react-icons/im"; 
import { GiSplashyStream } from "react-icons/gi"; 
import { TiHome } from "react-icons/ti"; 
import { BiExpandHorizontal, BiCollapseHorizontal } from "react-icons/bi";

import NavButton from "./components/NavButton";

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const router = useRouter();

    const toggleOpen = () => {
        setOpenSidebar(!openSidebar);
    }

    return (
        <div className={`h-screen bg-neutral-950 px-2 ${ openSidebar ? 'w-60' : 'width-20'}`}>
            <div className={`flex flex-col gap-y-3 mt-1 ${openSidebar ? 'items-start' : 'items-center'} ${openSidebar ? 'ml-1' : ''} `}>
                <div 
                    onClick={toggleOpen}
                    className="
                        flex 
                        items-center 
                        justify-center
                        bg-neutral-800 
                        text-neutral-500
                        rounded-full 
                        w-10 
                        h-6
                        cursor-pointer
                        transition
                        hover:scale-105
                        hover:bg-neutral-700
                        hover:text-neutral-400 
                        hover:rounded-3xl
                        "
                    >
                    {!openSidebar ? (<BiExpandHorizontal size={22}/>) : (<BiCollapseHorizontal size={22}/>)}
                </div>
                <NavButton 
                    onClick={() => router.push('/')}
                    isOpen={openSidebar} 
                    icon={TiHome}
                    name="Home" 
                />
                <NavButton 
                    onClick={() => router.push('/survivorPage')}
                    isOpen={openSidebar} 
                    icon={FaWalking}
                    name="Survivor" 
                />
                <NavButton 
                    onClick={() => router.push('/killerPage')}
                    isOpen={openSidebar} 
                    icon={ImEvil}
                    name="Killer" 
                />
                <NavButton 
                    onClick={() => router.push('/streakPage')}
                    isOpen={openSidebar} 
                    icon={GiSplashyStream}
                    name="Streak" 
                />
            </div>
        </div>
    )
}

export default Sidebar;