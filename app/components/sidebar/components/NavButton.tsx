import { IconType } from "react-icons";

interface NavButtonProps {
    isOpen: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon: IconType;
    name: string;
}

const NavButton: React.FC<NavButtonProps> = ({
    isOpen,
    onClick,
    name,
    icon: Icon
}) => {
    return ( 
        <button 
            onClick={onClick}
            className={`
                flex 
                items-center
                justify-center
                bg-neutral-800 
                text-neutral-400
                transition
                h-14
                cursor-pointer
                drop-shadow-md
                ${ isOpen ? 'gap-3' : ''} 
                ${ isOpen ? 'w-40' : 'w-14'} 
                ${ isOpen ? 'rounded-xl' : 'rounded-full'} 
                ${ isOpen ? '' : 'hover:rounded-3xl'}

                hover:scale-105
                hover:bg-neutral-700
                hover:text-neutral-200
            `}>

        { isOpen ? name : <Icon size={34}/> }
    </button>
     );
}
 
export default NavButton;