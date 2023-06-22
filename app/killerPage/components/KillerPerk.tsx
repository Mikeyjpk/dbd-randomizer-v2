"use client"

import Image from "next/image";

interface KillerPerkProps {
    name?: string;
    image: string;
}

const KillerPerk: React.FC<KillerPerkProps> = ({ 
    name, 
    image 
}) => {
	return (
        <>
            <div className="flex flex-col justify-center items-center gap-y-2">
                <Image
                    alt="killer perk"
                    src={image} 
                    width={105}
                    height={105}
                    className=""
                />
                <div className="text-sm text-center">
                    {name}
                </div>
            </div>
        </>
	);
};

export default KillerPerk;
