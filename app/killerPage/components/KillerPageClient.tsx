"use client"

import data from '@/data.json';

import { getRandomItem, getRandomNumber, getRandomSet } from "@/app/components/RandomizerConstants";
import Killer from './Killer';
import KillerAddon from './KillerAddon';
import KillerPerk from './KillerPerk';

import { FiSettings } from "react-icons/fi"
import { BiRefresh } from "react-icons/bi"
import { useRouter } from 'next/navigation';

const KillerPageClient = () => {
    const router = useRouter();

    // gets a random killer and assigns two addons based on the selected killer
    const getRandomKiller = () => {
        let { item } = getRandomItem(data.killers)
        return item
    }
    let killer = getRandomKiller();
    let killerAddons = killer.addOns 

    const addonOne = getRandomNumber(killer.addOns.length);
    const addonTwo = getRandomNumber(killer.addOns.length);
    const killerAddonOne = killerAddons[addonOne]
    const killerAddonTwo = killerAddons[addonTwo]

    // PERKS
    const killerPerks = data.killerPerks
    const randomKillerPerks = getRandomSet(killerPerks, 4)

    return (
        <div className='cursor-default pr-4'>
            <div className='flex flex-col gap-y-4 bg-gradient-to-br from-red-950 to-neutral-950 rounded-xl py-4 pl-4'>
                <div className='flex justify-center text-2xl p-2'>
                    <Killer 
                        name={killer.name} 
                    />
                </div>
                <div className='flex justify-center gap-3'>
                    <div className='bg-gradient-to-br from-red-900 to-neutral-950 rounded-xl p-1 shadow-md mx-3 flex items-center'>
                        <Killer 
                            image={killer.image}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col items-center gap-2 text-sm text-overflow'>
                            <div className='text-xs text-neutral-300'>
                                Addons
                            </div>
                            <KillerAddon
                                image={killerAddonOne.image}
                            />
                            <KillerAddon
                                name={killerAddonOne.name}
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2 text-sm text-wrap py-2'>
                            <KillerAddon
                                image={killerAddonTwo.image}
                            />
                            <KillerAddon
                                name={killerAddonTwo.name}
                            />
                        </div>
                    </div>
                </div>
                {/* perks */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-3 bg-neutral-950/60 shadow:md rounded-l-xl py-2'>
                    {randomKillerPerks.map((killerPerk) => (
                        <>
                            <KillerPerk 
                                key={killerPerk.name}
                                name={killerPerk.name}
                                image={killerPerk.image}
                            />
                        </>
                    ))}
                </div>
            </div>

            <div className="p-2 pr-4 flex justify-end gap-x-4">
                <div 
                    onClick={() => {}}
                    className='flex justify-end gap-x-1 items-center text-neutral-700 cursor-pointer hover:text-white'
                >
                    <div>
                        <FiSettings 
                            size={18}
                        />
                    </div>
                    <div>
                        Filters
                    </div>
                </div>
                <div 
                    onClick={() => router.refresh()}
                    className='flex justify-end gap-x-1 items-center text-neutral-700 cursor-pointer hover:text-white'
                >  
                    <BiRefresh 
                        size={26}
                    />
                    <div>
                        Randomize
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KillerPageClient;