import data from '@/data.json';
import { getRandomSet, survivorItemType } from "@/app/components/RandomizerConstants";
import SurvivorItemAddon from '@/app/survivorPage/components/SurvivorItemAddon';


const SurvivorItemAddonRandomizer= ( 
    item: any 
) => {
	let possibleAddons = [];

	switch (item.itemType) {
		case survivorItemType.toolbox:
			possibleAddons = data.toolBoxAddOns;
			break;
		case survivorItemType.flashlight:
			possibleAddons = data.flashlightAddOns;
			break;
		case survivorItemType.key:
			possibleAddons = data.keyAddOns;
			break;
		case survivorItemType.medkit:
			possibleAddons = data.medKitAddOns;
			break;
		case survivorItemType.map:
			possibleAddons = data.mapAddOns;
			break;
		default:
			return <div>unknown survivor item type {item.itemType}</div>;
	}

	const selectedAddons = getRandomSet(possibleAddons, 2);

	return (
		<div>
			{selectedAddons.map((itemAddon) => (
				<SurvivorItemAddon
					key={itemAddon.name}
					name={itemAddon.name}
					image={itemAddon.image}
				/>
			))}
		</div>
	);
};

export default SurvivorItemAddonRandomizer;
