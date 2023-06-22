"use client"

interface ItemAddonProps {
    name: string;
    image: string;
}

const ItemAddon: React.FC<ItemAddonProps> = ({
    name,
    image
}) => {
    return (
        <div>
            <div>
                {name}
            </div>
            <img 
                src={image}
            />
        </div>
    );
};

export default ItemAddon;