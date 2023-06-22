"use client"

interface SurvivorPerkProps {
    name?: string;
    image?: string;
}

const SurvivorPerk: React.FC<SurvivorPerkProps> = ({
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
                // alt={name}
            />
        </div>
    )
}

export default SurvivorPerk;