import whyWeDoItBg from "../../assets/images/graph-line.png"
const WhyWeDoIt = () => {
    const cardData = [
        {
            title: "80%",
            description: "of executives say AI is \n a strategic priority."
        },
        {
            title: "35%",
            description: "cost reduction is achieved\nthrough the use of AI."
        },
        {
            title: "2.2x",
            description: "revenue growth is achieved by AI-enabled\n companies compared to their peers"
        },
        {
            title: "63%",
            description: "enterprises are still without an actionable\n AI roadmap."
        }
    ]
    return (
        <div className="container-fluid flex flex-col gap-20 bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${whyWeDoItBg})` }}>
            <div className="container-wrapper px-4 sm:px-8 md:px-15 py-10 md:py-20 lg:py-20 text-center flex flex-col gap-6 md:gap-10">
                <p className="text-[var(--text-secondary)] font-light">why we do</p>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Because Waiting <br /> is the Real Risk</h2>
                    {/* <h6 className="text-sm md:text-base max-w-[1200px] mx-auto text-[var(--text-secondary)]">
                        By 2026, over 50% of companies will be unable to compete without AI-led innovation. Yet, 7 out of 10 businesses are still unsure how to implement AI.  <br />
                        We're here to bridge that gap by helping businesses make AI real, measurable, and scalable.
                    </h6> */}
                    <h6 className="text-sm md:text-base max-w-[1200px] mx-auto text-[var(--text-secondary)]">We're here to bridge that gap by helping businesses make AI real, measurable, and scalable.</h6>
                </div>
            </div>
            <div className="container-wrapper px-4 sm:px-8 md:px-15 py-10 md:py-20 lg:py-30">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} />
                    ))}
                </div>      
            </div>
        </div>
    )
}

const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="flex flex-col gap-2 md:gap-3 w-full text-center items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{title}</h2>
            <p className="whitespace-pre-line text-sm md:text-base text-[var(--text-secondary)]">{description}</p>
        </div>
    )
}

export default WhyWeDoIt;