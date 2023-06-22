"use client"

interface MapProps {
    name?: string;
    image?: string;
}

const Map: React.FC<MapProps> = ({
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

export default Map;