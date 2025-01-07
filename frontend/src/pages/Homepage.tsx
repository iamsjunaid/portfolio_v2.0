import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Homepage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setIsLoaded(true);
    }, []);
    return (
        <div className={` self-center border border-blue-500 py-20 sm:py-24 flex flex-col gap-24 duration-1000 ease-in-out h-3/4 sm:h-screen ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <h1 className="text-4xl sm:text-6xl">Discover the essence of Pearl, a free Framer template.<span className="text-gray-400"> Let's shape your brand into a masterpiece together.</span></h1>

            <div>
                <Button asChild className='bg-gray-900 text-white text-lg rounded-full px-12 py-6 hover:text-gray-950 group'>
                    <a href="#Contact" className='flex items-center gap-2'>
                        <span>Connect</span>
                        <ArrowUpRight className='w-12 h-12 transition-transform duration-300 ease-in-out group-hover:rotate-45' />
                    </a>
                </Button>

            </div>
        </div>
    )
}

export default Homepage
