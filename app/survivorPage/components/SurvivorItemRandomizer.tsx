"use client"

import data from "@/data.json";
import { getRandomItem } from "@/app/components/RandomizerConstants";
import SurvivorItem from "./SurvivorItem";
import SurvivorItemAddonRandomizer from "./SurvivorItemAddonRandomizer";

const SurvivorItemRandomizer = () => {
    const { item } = getRandomItem(data.survivorItems);
    return (
        <div>
            <SurvivorItem 
                name={item.name}
                image={item.image}
            />
            <SurvivorItemAddonRandomizer 
                item={item}
            />
        </div>
    )
}

export default SurvivorItemRandomizer;