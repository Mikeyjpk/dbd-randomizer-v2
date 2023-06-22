interface KillerProps {
    name?: string,
    image?: string,
}

const Killer: React.FC<KillerProps> = ({
    name,
    image
}) => {
    return (
        <div>
            <div>
                {name}
            </div>
            <img src={image} />
        </div>
    )
}

export default Killer;