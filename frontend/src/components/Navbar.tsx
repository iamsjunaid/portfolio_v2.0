import { useState } from 'react';
import { AlignRight } from 'lucide-react';

const Navbar = () => {
    const [navbarVisibility, setNavbarVisibility] = useState(false);

    const handleMenuClick = () => {
        setNavbarVisibility(!navbarVisibility);
    };

    return (
        <nav className='flex justify-between items-center h-[64px] py-4 bg-white'>
            {/* Logo Section */}
            <div className="text-2xl font-bold">Logo</div>

            {/* Navbar Links */}
            <ul
                className={`border-2 border-yellow-500
                    absolute top-[64px] left-0 w-full bg-white sm:static sm:flex sm:space-x-8 sm:bg-transparent sm:w-auto 
                    ${navbarVisibility ? 'flex flex-col items-center space-y-4 py-4' : 'hidden'}
                `}
            >
                <li>
                    <a href="#projects" className='hover:text-blue-500'>Projects</a>
                </li>
                <li>
                    <a href="#about" className='hover:text-blue-500'>About</a>
                </li>
                <li>
                    <a href="#contact" className='hover:text-blue-500'>Contact</a>
                </li>
            </ul>

            {/* Menu Toggle Icon (Visible on Mobile Only) */}
            <div className='sm:hidden'>
                <AlignRight onClick={handleMenuClick} className='cursor-pointer' />
            </div>

            {/* Dark Mode Toggle */}
            {/* <div>
                <Sun onClick={() => toggleMode()} />
            </div> */}
        </nav>
    );
};

export default Navbar;
