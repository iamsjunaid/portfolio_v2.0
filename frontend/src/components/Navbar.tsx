import { useState, useEffect } from 'react';
import { House, BriefcaseBusiness, FolderGit, User, Mail } from 'lucide-react';
import Tooltip from './Tooltip';

const navItems = [
    { id: 1, name: 'Home', icon: <House className="sm:size-8" /> },
    { id: 2, name: 'Experience', icon: <BriefcaseBusiness className="sm:size-8" /> },
    { id: 3, name: 'Work', icon: <FolderGit className="sm:size-8" /> },
    { id: 4, name: 'About', icon: <User className="sm:size-8" /> },
    { id: 5, name: 'Contact', icon: <Mail className="sm:size-8" /> },
];

const Navbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <nav className={`fixed z-50 rounded-3xl backdrop-blur-sm bg-black/60 self-center w-4/5 sm:w-1/4 p-4 text-white mt-4 duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-6'}`}>
            <ul className="flex justify-around items-center gap-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Tooltip text={item.name}>
                            <a href={`#${item.name.toLowerCase()}`} className="sm:size-8" aria-describedby='tooltip-id'>
                                {item.icon}
                            </a>
                        </Tooltip>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
