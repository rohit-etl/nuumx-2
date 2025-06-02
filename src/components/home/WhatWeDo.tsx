import cardBg1 from "../../assets/homecards/what-we-do-card (1).png"
import cardBg2 from "../../assets/homecards/what-we-do-card (2).png"
import cardBg3 from "../../assets/homecards/what-we-do-card (3).png"
import cardBg4 from "../../assets/homecards/what-we-do-card (4).png"
import glowingorb from "../../assets/images/front.png"



const WhatWeDo = () => {

    const cards = [
        {
            title: "Business    Transformation",
            description: "Reimagine your business model, operations, and strategy—powered by AI at the core.",
            image: cardBg1
        },
        {
            title: "Digital    Transformation",
            description: "Accelerate your digital journey with intelligent automation, data-driven systems, and smart platforms.",
            image: cardBg2
        },
        {
            title: "Experience Transformation",
            description: "Enhance customer, employee, and brand experiences with hyper-personalization and intelligent engagement.",
            image: cardBg3
        },
       /* {
            title: "Function-Wise Enablement",
            description: "Enhance every function with AI—from marketing to operations and beyond.",
            image: cardBg4
        },*/
    ]
    return (
        <div className="container-fluid">
            <div className="container-wrapper px-4 sm:px-8 md:px-15 py-8 md:py-20 lg:py-20 text-white">
                <div className="flex flex-col gap-6 md:gap-10">
                    <p className="text-[var(--text-secondary)] font-light">what we do</p>
                    <div className="flex flex-col gap-4 max-w-[538px]">
                        {/* <h2 className="bg-gradient-to-r from-[#7B7DBA] to-[#9DE079] text-transparent bg-clip-text"> */}
                        <h2>
                            We Turn AI From Buzzword to Business Impact
                        </h2>
                        <h6 className="text-sm md:text-base text-[var(--text-secondary)]">We deliver end-to-end AI solutions designed to solve real business challenges.</h6>
                    </div>
                    {/* <div className="relative w-fit h-fit">
                        <button className="relative rounded-sm border-0 w-fit mt-2 md:mt-4 overflow-hidden group transition-colors px-4 py-3 bg-[var(--hover-bg-color)]">
                            <img src={glowingorb} alt="glowingorb" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 " />
                            <span className="relative z-10">Explore Our Solutions</span>
                        </button>
                    </div> */}
                    <div className="grid grid-cols-3 gap-5 w-full">
                        {cards.map((card, index) => (
                            <Card key={index} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ card, index }: { card: any, index: number }) => {
    return (
        <div
            className="h-[480px] w-full relative overflow-hidden rounded-lg group min-w-full"
        >
            <img
                src={card.image}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="flex flex-col h-full relative z-10 text-white p-6 sm:p-8 md:p-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">0{index + 1}</h2>
                <div className="flex flex-col mt-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl transition-all duration-1000 ease-in-out group-hover:-translate-y-20">
                        {card.title.split(' ').map((word: string, i: number) => (
                            <span key={i}>
                                {word}
                                {i === 0 && <br />}
                            </span>
                        ))}
                    </h3>
                </div>
                <p className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-6 sm:left-8 md:left-10 right-6 sm:right-8 md:right-10 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out text-base sm:text-lg text-[var(--text-secondary)]">
                    {card.description}
                </p>
            </div>
        </div>
    )
}

export default WhatWeDo;