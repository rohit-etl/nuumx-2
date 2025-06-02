import possibility1 from "../../assets/homecards/possibilities-card 1.svg"
import possibility2 from "../../assets/homecards/possibilities-card 2.svg"
import possibility3 from "../../assets/homecards/possibilities-card 3.svg"
import possibility4 from "../../assets/homecards/possibilities-card 4.svg"


const WhoWeCanbe = () => {
    const cards = [
        possibility1,
        possibility2,
        possibility3,
        possibility4
    ]
    return (
        <div className="container-fluid">
            <div className="container-wrapper px-4 md:px-15 py-8 md:py-20 text-white flex flex-col gap-6 md:gap-10">
                <p className="text-right text-[var(--text-secondary)] font-light">who we can be</p>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-right">One Partner. Infinite Possibilities.</h2>
                    <h6 className="text-sm md:text-base text-right text-[var(--text-secondary)]">Unlock the true potential of your business through intelligent transformation.</h6>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
                    {cards.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Card = ({ item }: { item: string }) => {
    return (
        <div className="w-full  sm:max-w-[315px] h-[360px]">
            <img src={item} alt="" className="w-full h-full object-contain" />
        </div>
    )
}   

export default WhoWeCanbe;