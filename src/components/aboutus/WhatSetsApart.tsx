import pattern from '../../assets/icons/1.svg';
import prismLogo from '../../assets/logos/frame.png';
import cubeLogo from '../../assets/logos/5.png';
import donutLogo from '../../assets/logos/3.png';
import cylinderLogo from '../../assets/logos/11.png';
import utypeLogo from '../../assets/logos/2 copy.png';

const WhatSetsApart = () => {
    const cardData = [
        {
            logo: cubeLogo,
            title: 'Business-Centric AI Strategies',
            description: 'We align AI initiatives with your business KPIs — growth, efficiency, experience, and agility.'
        },
        {
            logo: donutLogo,
            title: 'Holistic Transformation Framework',
            description: 'Our AI transformation model covers strategy, technology, people, process, and culture.'
        },
        {
            logo: utypeLogo,
            title: 'Vertical & Functional Expertise',
            description: 'Deep domain knowledge across industries and departments ensures contextual and scalable AI solutions.'
        },
        {
            logo: cylinderLogo,
            title: 'Human + AI\n Synergy',
            description: 'We design solutions that amplify human potential, not replace it.'
        },
        {
            logo: prismLogo,
            title: 'Ethical AI First \n Approach',
            description: 'We believe in responsible, explanable, and privacy-respecting AI that builds trust and delivers long-term value.'
        }
    ]

    return (
        <div className="container-fluid px-4 sm:px-8 md:px-15 py-10 sm:py-20 md:py-30">
            <div className="container-wrapper flex flex-col gap-10 sm:gap-15 md:gap-20 text-white">
                <h2>What Sets Us Apart</h2>
                <div className='w-full'>
                    <div className='flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto pb-4 sm:pb-6 md:pb-8 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                        {cardData.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    logo: string;
    title: string;
    description: string;
}

const Card = (item: CardProps) => {
    return (
        <div className="rounded-2xl border-1 border-transparent bg-clip-padding p-[2px] relative" style={{ background: 'linear-gradient(to bottom right, #0160B6, #166861)' }}>
            <div className="rounded-2xl px-3 py-6 sm:px-6 sm:py-10 flex flex-col gap-10 min-w-[280px] sm:min-w-[394px] h-full sm:h-150 bg-[#111]">
                <div className='flex h-8 w-8'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <img src={pattern} alt="pattern" key={index} className='w-full h-full' />
                    ))}
                </div>

                <div className='flex items-center justify-center'>
                    <img src={item.logo} alt="prism" className='w-48 h-48    sm:w-64 sm:h-64' />
                </div>

                <div className='flex flex-col gap-4 items-center justify-center text-center '>
                    <h3 className='whitespace-pre-line'>{item.title}</h3>
                    <p className='text-[var(--text-secondary)]' >{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WhatSetsApart;