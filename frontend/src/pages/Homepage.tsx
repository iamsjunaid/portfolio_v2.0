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
        <section className={` mx-6 sm:mx-16 self-center py-12 sm:py-24 flex flex-col gap-16 duration-1000 ease-in-out h-3/4  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`} id='home'>
            <p className="text-md text-left">
                Home
                <span className='mx-4'>
                    ·
                </span>
                Summary
            </p>
            <h1 className="text-4xl sm:text-6xl">I'm Junaid. Glad to see you!
                <span className="text-gray-400">
                    &nbsp;Ready to bring ideas to life from conception to deployment.
                </span>
            </h1>
            <div>
                <Button asChild className='bg-gray-900 text-white text-lg rounded-full px-12 py-6 hover:text-gray-950 group'>
                    <a href="#contact" className='flex items-center gap-2'>
                        <span>Connect</span>
                        <ArrowUpRight className='w-12 h-12 transition-transform duration-300 ease-in-out group-hover:rotate-45' />
                    </a>
                </Button>

            </div>
        </section>
    )
}

export default Homepage