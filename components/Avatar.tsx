import { useCallback } from "react";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import Image from 'next/image'; // Ensure Image is imported

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = (
    { userId, isLarge, hasBorder }
) => {
    const router = useRouter();
    const { data: fetchedUser } = useUser(userId);

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const url = `/users/${userId}`; // Corrected string template
        router.push(url);
    }, [router]); // Review if userId needs to be here

    return (
        <div
            className={` 
                ${hasBorder ? 'border-4 border-black' : ''} 
                ${isLarge ? 'h-32' : 'h-12'} 
                ${isLarge ? 'w-32' : 'w-12'}
                rounded-full 
                hover:opacity-90 
                transition 
                cursor-pointer 
                relative
            `}
            onClick={onClick} // Moved this to the div
        >
            <Image
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%'
                }}
                alt="Avatar"
                src={fetchedUser?.profileImage || '/images/placeholder.jpg'}
            />
        </div>
    );
}

export default Avatar;
