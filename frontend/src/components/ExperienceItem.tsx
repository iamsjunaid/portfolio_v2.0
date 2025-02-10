import { Experience } from '@/lib/types';


const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {

    return (
        <div className='flex items-center justify-around hover:bg-gray-700 rounded-xl sm:px-4 group py-2 w-full'>

            <div key={index} className='flex flex-col gap-4 w-11/12'>
                <div className='flex justify-between'>
                    <p className='text-sm'>{exp.role}</p>
                    <p className='text-sm'>{exp.duration}</p>
                </div>

                <div>
                    <p className='text-sm'>{exp.company}</p>
                    <span className='text-sm'>{exp.location}</span>
                </div>

                <p className='mb-4 text-sm'>{exp.description}</p>
            
                <div className='flex flex-wrap gap-2'>
                    {exp.skills.map((skill, i) => (
                        <div key={i} className='text-xs rounded-full border border-white px-2 py-1 text-white'>
                            <p>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem
