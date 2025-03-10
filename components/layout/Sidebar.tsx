import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from './sidebarlogo'; 
import SidebarItem from './sidebaritem'; 
import SidebarTweetButton from '../sidebarTweetButton'; 
import {signOut} from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

const Sidebar = () => {
    const {data: currentuser } = useCurrentUser();
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill,
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser,
        },
    ];

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                    {currentuser && (
                    <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />
                    )}
                    <SidebarTweetButton /> 
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
