import { useState, useEffect } from 'react';
import { House, BriefcaseBusiness, FolderGit, User, Mail } from 'lucide-react';

const Navbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <nav className={` fixed z-50 rounded-3xl backdrop-blur-sm bg-black/60 self-center w-4/5 sm:w-1/4 p-4 text-white mt-4 duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-6'}`}>
            <ul className="flex justify-around items-center gap-4 ">
                <li>
                    <a href="#home"><House className="sm:size-8" /></a>
                </li>
                <li>
                    <a href="#experience" ><BriefcaseBusiness className="sm:size-8" /></a>
                </li>
                <li>
                    <a href="#work" ><FolderGit className="sm:size-8" /></a>
                </li>
                <li>
                    <a href="#about" ><User className="sm:size-8" /></a>
                </li>
                <li>
                    <a href="#contact" ><Mail className="sm:size-8" /></a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
