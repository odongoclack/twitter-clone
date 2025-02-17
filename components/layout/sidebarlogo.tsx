import { useRouter } from "next/router";
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
    const router = useRouter();

    const handleClick = () => {
        // Navigate to a specific page, you can change '/home' to your desired route
        router.push('/home');
    };

    return (
        <div
            className="
            rounded-full
            h-14
            p-4
            flex
            items-center
            justify-center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition
            "
            onClick={handleClick} // Add onClick event to handle routing
        >
            <BsTwitter size={28} color="white" />
        </div>
    );
};

export default SidebarLogo;