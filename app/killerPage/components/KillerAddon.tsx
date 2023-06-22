interface KillerAddonProps {
    name?: string;
    image?: string;
}

const KillerAddon: React.FC<KillerAddonProps> = ({ 
    name, 
    image 
}) => {
	return (
		<div>
			<div className="flex justify-center text-center">
				{name}
			</div>
			<img 
				src={image} 
				width={50}	
			/>
		</div>
	);
};

export default KillerAddon;
