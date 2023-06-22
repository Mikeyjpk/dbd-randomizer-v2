import data from '@/data.json';
import { getRandomItem } from "./RandomizerConstants";
import Map from './Map';

const MapRandomizer = () => {
    const { item } = getRandomItem(data.maps);
    return (
        <>
            <Map 
                name={item.name}
                image={item.image}
            />
        </>
    )
}

export default MapRandomizer;