import meta from '../../assets/icons/meta.png'
import openai from '../../assets/icons/openAI.png'
import google from '../../assets/icons/google.png'
import anthropic from '../../assets/icons/Anthropic_Symbol_0 2.png'
import n8n from '../../assets/icons/n8n.png'
import crewai from '../../assets/icons/crew.svg'
import voiceflow from '../../assets/icons/voiceflow.png'
import make from '../../assets/icons/make.png'

const TechWeUse = () => {
    const techData = [
        {
            icon: openai,
            name: 'Open AI'
        },
        {
            icon: google,
            name: 'Google'
        },
        {
            icon: anthropic,
            name: 'Anthropic'
        },
        {
            icon: voiceflow,
            name: 'Voiceflow'
        },
        {
            icon: n8n,
            name: 'n8n'
        },
        {
            icon: crewai,
        },
        {
            icon: make,
            name: 'Make'
        },
        {
            icon: meta,
            name: 'Meta'
        },
    ]
    return (
        <div className="container-fluid">
            <div className="container-wrapper px-4 sm:px-8 md:px-15 py-10 md:py-20 lg:py-30">
                <div className='flex flex-col gap-10 text-white'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-clash)] text-center">From Data to Decision: Our AI Stack</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>
                        {techData.map((tech, index) => (
                            <Card key={index} icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ icon, name }: { icon: string, name: string | undefined }) => {
    return (
        <div className='py-6 sm:py-8 md:py-10 px-4 sm:px-6 border-1 border-[#0160B6] rounded-2xl w-full'>
            <div className='flex gap-3 sm:gap-4 max-h-[40px] items-center justify-center'>
                <img src={icon} alt={name || ''} className={`${name ? 'w-8 sm:w-10' : 'w-[90px] sm:w-[114px]'} h-8 sm:h-10 object-contain`} />
                <h3 className='text-sm sm:text-base text-center text-white'>{name || ''}</h3>
            </div>
        </div>
    )
}

export default TechWeUse;   