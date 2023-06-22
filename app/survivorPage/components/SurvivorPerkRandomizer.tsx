"use client"

import { getRandomSet } from "@/app/components/RandomizerConstants";
import SurvivorPerk from "./SurvivorPerk";
import data from '@/data.json';

const SurvivorPerkRandomizer = () => {
    const survivorPerks = getRandomSet(data.survivorPerks, 4);
    return (
        <div>
            {survivorPerks.map((survivorPerk) => (
                <SurvivorPerk 
                    key={survivorPerk.name}
                    name={survivorPerk.name}
                    image={survivorPerk.image}
                />
            ))}
        </div>
    )
}

export default SurvivorPerkRandomizer;