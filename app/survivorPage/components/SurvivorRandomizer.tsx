import data from '@/data.json';
import Survivor from './Survivor';
import { getRandomItem } from "@/app/components/RandomizerConstants";


const SurvivorRandomizer = () => {
    const { item } = getRandomItem(data.survivors);

    return (
        <Survivor 
            name={item.name}
            image={item.image}
        />
    )
}

export default SurvivorRandomizer;
