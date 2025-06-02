import lotusIcon from '../../assets/icons/3.svg'
import roundPattern from '../../assets/icons/5.svg'
import identityBg from '../../assets/images/ourIdentitybg.png'

const OurIdentity = () => {
    const cardData = [
        {
            title: 'Our Mission',
            description: 'To unlock exponential value for businesses through AI-driven transformation, helping them scale faster, operate smarter, and deliver extraordinary human-centric experiences.',
            image: lotusIcon,
            pattern: roundPattern
        },
        {
            title: 'Our Vision',
            description: 'To be the most trusted and innovative AI transformation partner for organizations worldwide — enabling a new era of intelligent, ethical, and experience-driven growth',
            image: lotusIcon,
            pattern: roundPattern
        },
    ]

    return (
        <div
            className="container-fluid"
            style={{
                backgroundImage: `url(${identityBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
            }}
        >
            <div className="container-wrapper py-10 sm:py-15 md:py-30 px-4 sm:px-8 md:px-15">
                <div className="flex flex-col text-center text-white gap-5 sm:gap-8 md:gap-10">
                    <p className=" text-[var(--text-tertiary)]">our identity</p>
                    <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-[800px] mx-auto">
                        A future-forward conglomerate focused on building transformative ventures across industries.
                        <br className="hidden sm:block" />
                        nuumx.ai specializes in end-to-end AI services, offering strategic consulting, custom development, seamless integration, and ongoing AI support — all under one roof.
                    </p>
                </div>
                <div className="flex py-8 sm:py-12 md:py-15 gap-6 sm:gap-10 md:gap-20 justify-center flex-wrap">
                    {cardData.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    title: string;
    description: string;
    image: string;
    pattern: string;
}

const Card = (item: CardProps) => {
    return (
        <div className="flex flex-col gap-3 sm:gap-[10px] w-full sm:max-w-[538px] min-w-[280px] sm:min-w-[360px] rounded-2xl border-[0.5px] backdrop-blur-sm px-4 sm:px-5 py-8 sm:py-12 md:py-15 bg-[var(--bg-tint)] text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-[var(--font-clash)]">{item.title}</h3>
            <p className='text-[var(--text-secondary)] text-sm sm:text-base md:text-lg'>{item.description}</p>
            <div className='flex gap-2 h-8 w-8 sm:h-10 sm:w-10'>
                <img src={item.pattern} alt="roundPattern" className='h-full w-full' />
                <img src={item.image} alt="lotus" className='h-full w-full' />
                <img src={item.pattern} alt="roundPattern" className='h-full w-full' />
            </div>
        </div>
    )
}

export default OurIdentity;