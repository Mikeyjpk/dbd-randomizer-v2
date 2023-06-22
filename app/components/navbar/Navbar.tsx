"use client"

import { useRouter } from "next/navigation"
import { GiPowerGenerator } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-neutral-950 flex flex-row justify-between">
                <div className="px-2 py-1 ml-3.5">
                    <GiPowerGenerator
                        className="text-white/80 hover:text-white cursor-pointer" 
                        size={30}
                        onClick={() => {}} // add modal pop up to show an About Me
                    />
                </div>
                <div className="p-2 text-white/70 hover:text-white/100 cursor-pointer">
                    <RxCross1 size={24}
                        onClick={() => router.push('/')} // move this inside the modal
                    />
                </div>
        </div>
    )
}

export default Navbar;