"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaWalking } from "react-icons/fa"; 
import { ImEvil } from "react-icons/im"; 
import { GiEvilMoon } from "react-icons/gi"; 
import { TiHome } from "react-icons/ti"; 
import { BiExpandHorizontal, BiCollapseHorizontal } from "react-icons/bi"; 

const Sidebar = () => {
    const [openSidebar,setOpenSidebar] = useState(false);
    const router = useRouter();

    const toggleOpen = () => {
        setOpenSidebar(!openSidebar);
    }

    return (
        <div className={`h-screen bg-neutral-950 px-2
            ${ openSidebar ? 'w-60' : 'width-20'}
            `}>
            <div className={`flex flex-col gap-y-3 mt-1
                ${openSidebar ? 'items-start' : 'items-center'}
                ${openSidebar ? 'ml-1' : ''}
                `}>
                <div 
                    onClick={() => toggleOpen()}
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
                        drop-shadow-md
                        transition
                        hover:scale-105
                        hover:bg-neutral-700
                        hover:text-neutral-400 
                        hover:rounded-3xl
                        "
                        >
                        {!openSidebar ? (
                            <div>
                                <BiExpandHorizontal 
                                size={22}
                            /> 
                            </div>
                        ) : (
                            <div>
                                <BiCollapseHorizontal 
                                size={22}
                            /> 
                            </div>
                        )}
                    </div>


                    {/* OLD SIDEBAR */}
                <div
                    onClick={() => router.push('/')}  
                    className={`
                        flex 
                        items-center
                        justify-center
                        bg-neutral-800 
                        text-neutral-500
                        transition
                        h-14
                        cursor-pointer
                        drop-shadow-md
                        ${ openSidebar ? 'gap-3' : ''} 
                        ${ openSidebar ? 'w-40' : 'w-14'} 
                        ${ openSidebar ? 'rounded-xl' : 'rounded-full'}

                        hover:scale-105
                        hover:bg-neutral-700
                        hover:text-neutral-300
                        ${ openSidebar ? '' : 'hover:rounded-3xl'}

                    `}
                    >
                    <TiHome 
                        size={36}
                    />
                    { openSidebar && ( 
                        <div className="">
                            Home
                        </div>
                    )}
                </div>
                <div
                    onClick={() => router.push('/survivorPage')} 
                    className={`
                        flex 
                        items-center
                        justify-center
                        bg-neutral-800 
                        text-neutral-500
                        transition
                        h-14
                        cursor-pointer
                        drop-shadow-md
                        ${ openSidebar ? 'gap-3' : ''} 
                        ${ openSidebar ? 'w-40' : 'w-14'} 
                        ${ openSidebar ? 'rounded-xl' : 'rounded-full'} 

                        hover:scale-105
                        hover:bg-neutral-700
                        hover:text-neutral-300
                        ${ openSidebar ? '' : 'hover:rounded-3xl'}

                    `}
                    >
                    <FaWalking 
                        size={36}
                        className="hover:scale-110"
                    />
                </div>
                <div 
                    onClick={() => router.push('/killerPage')}
                    className={`
                    flex 
                    items-center
                    justify-center
                    bg-neutral-800 
                    text-neutral-500
                    transition
                    h-14
                    cursor-pointer
                    drop-shadow-md
                    ${ openSidebar ? 'gap-3' : ''} 
                    ${ openSidebar ? 'w-40' : 'w-14'} 
                    ${ openSidebar ? 'rounded-xl' : 'rounded-full'} 

                    hover:scale-105
                    hover:bg-neutral-700
                    hover:text-neutral-300
                    ${ openSidebar ? '' : 'hover:rounded-3xl'}

                `}
                >
                    <ImEvil 
                        size={34}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;