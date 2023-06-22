export const getRandomNumber = (max: any) => {
    const myRandomNumber = Math.random();
    const myRandomNumberWithinTheCorrectRange = myRandomNumber * max;
    return Math.floor(myRandomNumberWithinTheCorrectRange)
}

export const getRandomItem = (arrayOfItems: any) => {
    const index = getRandomNumber(arrayOfItems.length)
    const item = arrayOfItems[index];
    return { item, index};
}

export const getRandomSet = (array: any, maxItemsToTake: any) => {
	const randomItems = [];
	const arrayCopy = [...array];
	for(let x = 0; x < maxItemsToTake && arrayCopy.length > 0; x++){
		const randomIndex = getRandomNumber(arrayCopy.length);
		const randomItem = arrayCopy[randomIndex];
		randomItems.push(randomItem);
		arrayCopy.splice(randomIndex, 1);
	}

	return randomItems;
}

export const survivorItemType = {
	toolbox: 'toolbox',
	medkit: 'medkit',
	flashlight: 'flashlight',
	map: 'map',
	key: 'key'
}