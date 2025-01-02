import { useState } from 'react';
import { AlignRight, X } from 'lucide-react';

const Navbar = () => {
    const [navbarVisibility, setNavbarVisibility] = useState(false);

    const handleMenuClick = () => {
        setNavbarVisibility(!navbarVisibility);
    };

    return (
        <nav className="flex justify-between items-center h-[64px] py-4 bg-white">
            {/* Logo Section */}
            <div className="text-2xl font-bold">Logo</div>

            {/* Navbar Links (Desktop View) */}
            <ul className="hidden sm:flex space-x-8">
                <li>
                    <a href="#projects" className="hover:text-blue-500">Projects</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-blue-500">About</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </li>
            </ul>

            {/* Menu Toggle Icon (Mobile Only) */}
            <div className="sm:hidden">
                {navbarVisibility ? (
                    <X onClick={handleMenuClick} className="cursor-pointer w-6 h-6" />
                ) : (
                    <AlignRight onClick={handleMenuClick} className="cursor-pointer w-6 h-6" />
                )}
            </div>

            {/* Mobile Navbar (Full Screen) */}
            <div
                className={`fixed top-0 left-0 w-full h-1/3 bg-white flex flex-col items-center justify-center gap-6 py-4
                    text-lg font-semibold z-50 transition-transform duration-400 sm:hidden
                    ${navbarVisibility ? 'translate-y-16' : '-translate-y-full'}`}
            >
                <a href="#projects" onClick={handleMenuClick} className="hover:text-blue-500">Projects</a>
                <a href="#about" onClick={handleMenuClick} className="hover:text-blue-500">About</a>
                <a href="#contact" onClick={handleMenuClick} className="hover:text-blue-500">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
