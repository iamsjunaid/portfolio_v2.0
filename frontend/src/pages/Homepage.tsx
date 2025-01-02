import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react';

const Homepage = () => {
    return (
        <div className="border-2 border-green-500 flex flex-col gap-12 py-12">
            <h1 className="text-4xl">Discover the essence of Pearl, a free Framer template.<span className="text-gray-400"> Let's shape your brand into a masterpiece together.</span></h1>

            <div>
                <Button asChild className='bg-gray-900 text-white text-lg rounded-full px-12 py-6 hover:text-gray-950'>
                    <a href="#Contact" className='flex items-center gap-2'>
                        <span>Connect</span>
                        <ArrowUpRight className='w-8 h-8' />
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Homepage
