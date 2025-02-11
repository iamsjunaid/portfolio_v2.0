import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button'

import { ArrowUpRight } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';

import landingPortfolio from '@/assets/landing-portfolio.png';

const Homepage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setIsLoaded(true);
    }, []);

    return (
        <section className={`mx-6 sm:mx-16 py-8 sm:flex items-center justify-between duration-1000 ease-in-out my-4 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`} id='home'>
            <div className='text-center w-full'>
                <img src={landingPortfolio} alt="Hero" className="size-4/5 mx-auto" />
            </div>
            <div className='flex flex-col gap-4 sm:gap-24 w-full text-left'>
                <p className="text-md text-left">
                    Home
                    <span className='mx-4'>
                        ·
                    </span>
                    Summary
                </p>


                <div className='flex flex-col gap-4'>
                    <div className='flex justify-around items-center text-xs rounded-full border border-green-800 px-2 py-2 text-green-800 bg-green-100 w-40'>
                        <iframe src="https://lottie.host/embed/f189c3e9-94d5-4741-9893-47ff684a6d10/7jTXtG7qAs.lottie" className='size-4'></iframe>
                        <BriefcaseBusiness className='w-4 h-4' />
                        <p>Available for hire</p>
                    </div>

                    <h1 className="text-2xl sm:text-4xl">Hi, I'm Junaid. Glad to see you!<br />
                        <span className="text-gray-400">
                            Ready to bring ideas to life from conception to deployment.
                        </span>
                    </h1>
                </div>
                <div>
                    <Button asChild className='bg-gray-900 text-white text-sm sm:text-lg rounded px-8 py-2 sm:px-12 sm:py-6 hover:text-gray-950 group'>
                        <a href="#contact" className='flex items-center gap-2'>
                            <span>Connect</span>
                            <ArrowUpRight className='w-12 h-12 transition-transform duration-300 ease-in-out group-hover:rotate-45' />
                        </a>
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default Homepage