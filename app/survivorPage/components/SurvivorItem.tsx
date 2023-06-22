"use client"

interface SurvivorItemProps {
    name?: string;
    image?: string;
    addOn?: string;
}

const SurvivorItem: React.FC<SurvivorItemProps> = ({
    name,
    image,
    addOn
}) => {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {addOn}
            </div>
            <img
                src={image}
            />
        </div>
    )
}

export default SurvivorItem;