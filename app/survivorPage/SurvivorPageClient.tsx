"use client"

import data from '@/data.json';

import { getRandomItem, getRandomSet } from "@/app/components/RandomizerConstants";

import Survivor from './components/Survivor';
import SurvivorPerk from './components/SurvivorPerk';
import SurvivorItem from "./components/SurvivorItem";
import SurvivorItemAddonRandomizer from "./components/SurvivorItemAddonRandomizer";
import Map from "../components/Map";

const SurvivorPageClient = () => {
    const getRandomSurvivor = () => {
        let { item } = getRandomItem(data.survivors);  
        const name = item.name
        const image = item.image
        return { name, image }
    }
    
    const getRandomSurvivorItem = () => {
        let { item } = getRandomItem(data.survivorItems);
        const name = item.name
        const image = item.image
        //addons
        const addOns = SurvivorItemAddonRandomizer(item);
        const firstAddOnName = addOns.props.children[0].props.name
        const firstAddOnImage= addOns.props.children[0].props.image
        const secondAddOnName = addOns.props.children[1].props.name
        const secondAddOnImage = addOns.props.children[1].props.image

        return { 
            name, 
            image, 
            firstAddOnName, 
            firstAddOnImage, 
            secondAddOnName, 
            secondAddOnImage
        }
    }

    const getRandomMapInfo = () => {
        let { item } = getRandomItem(data.maps);
        const name = item.name;
        const image = item.image;
        return { name, image}
    }

    const map = getRandomMapInfo();
    const survivorItem = getRandomSurvivorItem();
    const survivor = getRandomSurvivor();
    const survivorPerks = getRandomSet(data.survivorPerks, 4);

    return (
        <div className='cursor-default pr-4'>
            <div className="flex flex-col gap-y-4 bg-gradient-to-br from-red-950 to-neutral-950 rounded-xl py-4 pl-4 cursor-default">
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="text-xl py-3 font-semibold">
                        <Survivor name={survivor.name}/>
                    </div>
                    {/* survivor and items section */}
                    <div className="flex justify-center items-center gap-x-3">
                        <div className="flex items-center justify-center bg-gradient-to-br from-red-800 to-neutral-950 rounded-md h-fit w-1/2">
                            <Survivor   
                                image={survivor.image}
                            /> 
                        </div>
                        {/* item section */}
                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="text-sm text-neutral-400 p-1">
                                    Item:
                                </div>
                                <SurvivorItem 
                                    name={survivorItem.name}
                                />
                            </div>
                            <SurvivorItem 
                                image={survivorItem.image}
                            />
                            <div className="flex flex-col justify-center text-sm">
                                <div className="flex items-center gap-1">
                                    <SurvivorItem 
                                        image={survivorItem.firstAddOnImage}
                                        />
                                    <SurvivorItem 
                                        name={survivorItem.firstAddOnName}
                                        />
                                </div>
                                <div className="flex items-center gap-1">
                                    <SurvivorItem 
                                        image={survivorItem.secondAddOnImage}
                                        />
                                    <SurvivorItem 
                                        name={survivorItem.secondAddOnName}
                                        />
                                </div>
                            </div>   
                        </div>
                    </div> 
                    {/* Perk section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 bg-neutral-950/60 shadow:md rounded-l-xl w-full">
                        {survivorPerks.map((survivorPerk) => (
                            <div className="flex flex-col items-center p-3">
                                <SurvivorPerk 
                                    key={survivorPerk.name}
                                    image={survivorPerk.image}
                                />     
                                <div className="text-lg text-center">
                                    <SurvivorPerk 
                                        key={survivorPerk.name}
                                        name={survivorPerk.name}
                                    />
                                </div>     
                            </div>
                        ))}
                    </div>
                    {/* Map save to move later*/}
                    <div className="flex flex-col items-center">
                        <div className='text-neutral-300 flex justify-center p-2'>
                            Map
                        </div>
                        <div>
                            <Map image={map.image}/> 
                            <Map name={map.name}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurvivorPageClient;