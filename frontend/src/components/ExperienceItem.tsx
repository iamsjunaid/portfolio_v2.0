
import { Experience } from '@/lib/types';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const arrow = '/images/arrow.png';

const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {
    return (
        <div className=''>
            <Timeline>
                <TimelineItem sx={{
                    '&::before': {
                        display: 'none',
                    },
                }}>
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            backgroundColor: 'transparent', color: 'white', boxShadow: 'none', width: '3rem', height: '3rem'
                        }}>
                            <img src={exp.logo} alt="AWS" className='w-8 h-8 object-contain' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontFamily: 'Manrope, sans-serif' }}>
                        <div className='arrow w-4 h-4 absolute left-12 top-4 '>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <div className='flex items-center justify-around rounded-xl sm:px-4 group py-2 w-full border-2 border-primaryColor shadow-md'>

                            <div key={index} className='flex flex-col gap-2 w-11/12'>
                                <div className='flex flex-col sm:flex-row justify-between'>
                                    <p className='text-md font-semibold'>{exp.role}</p>
                                    <p className='text-sm'>{exp.duration}</p>
                                </div>

                                <div>
                                    <p className='text-md'>{exp.company} ({exp.location})</p>
                                </div>

                                <p className='mb-4 text-sm'>{exp.description}</p>

                                <div className='flex flex-wrap gap-2'>
                                    {exp.skills.map((skill, i) => (
                                        <div key={i} className='text-xs rounded-full border border-primaryColor bg-secondaryColor px-2 py-1'>
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div >
    )
}

export default ExperienceItem
