const OurValues = () => {
    const cardData = [
        {
            title: "Innovation First",
            description: "We believe in pushing boundaries and staying ahead of the curve by leveraging AI, automation, and emerging technologies to create groundbreaking solutions for our clients."
        },
        {
            title: "Impact Driven Execution",
            description: "We focus on real, measurable business impact—not just ideas. Every AI-powered transformation we deliver is designed to enhance efficiency, scalability, and profitability."
        },
        {
            title: "Customer Centric Approach",
            description: "Our success is defined by yours. We prioritize understanding your business challenges and tailoring AI-driven strategies that align with your goals, industry, and vision."
        },
    ]

    return (
        <div className="container-fluid bg-ourvalues">
            <div className="container-wrapper flex flex-col justify-center px-4 sm:px-8 md:px-15 py-10 sm:py-20 md:py-30 items-center text-white">
                <div className="w-full flex flex-col gap-5 sm:gap-8 md:gap-10">
                    <h2 className="text-center sm:text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-clash)]">Our Values that Guide Us</h2>
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 py-8 sm:py-12 md:py-15">
                        {cardData.map((card, index) => (
                            <Card key={index} title={card.title} description={card.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => (
    <div className="flex flex-col gap-3 sm:gap-[10px] border-[0.5px] px-4 sm:px-5 py-8 sm:py-12 md:py-15 backdrop-blur-sm rounded-2xl bg-[var(--bg-tint)] border-[rgba(255, 255, 255, 0.20)] w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-[var(--font-clash)]">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">{description}</p>
    </div>
)

export default OurValues;