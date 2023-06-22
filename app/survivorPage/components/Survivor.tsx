"use client"

interface SurvivorProps {
    name?: string;
    image?: string;
}

const Survivor: React.FC<SurvivorProps> = ({
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
    )
}

export default Survivor;