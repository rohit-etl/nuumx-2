import glowingorb from "../../assets/images/front.png"
const HeroSection = () => {
    return (
        <>
            <div className="px-4 sm:px-8 md:px-15 text-white flex flex-col gap-4 md:gap-5 lg:gap-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
                    AI is Reshaping <br className="hidden sm:block" /> The Future
                </h1>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Will You Lead or Lag Behind?
                </h3>
                <a href= "https://cal.com/nuumxv/30min" target="_blank" className="relative w-fit h-fit">
                    <button className="relative rounded-sm border-0 w-fit mt-2 md:mt-4 overflow-hidden group transition-colors px-4 py-3 bg-[var(--hover-bg-color)]">
                        <img src={glowingorb} alt="glowingorb" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 " />
                        <span className="relative z-10">Book A Free Consultation Call</span>
                    </button>
                </a>

            </div>
        </>
    )
}

export default HeroSection;