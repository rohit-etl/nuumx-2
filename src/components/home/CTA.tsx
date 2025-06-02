import glowingorb from "../../assets/images/front.png"
import ctaBg from "../../assets/images/ctabg.png"

const CTA = () => {
    return (
        <div className="container-fluid bg-cover sm:bg-contain bg-center bg-no-repeat my-10 lg:my-15" style={{backgroundImage: `url(${ctaBg})`}}>
            <div className="container-wrapper px-4 sm:px-8 md:px-15 py-15 md:py-20 lg:py-20 text-white">
                <div className="flex flex-col gap-3 md:gap-5 items-center justify-center text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        AI isn't the Future. It's the Present.
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                        Don't wait to be disrupted. Start leading the transformation with Nuum X.
                    </p>
                    <a href="https://cal.com/nuumxv/30min" 
                       target="_blank" 
                       className="relative w-fit h-fit mt-2 md:mt-4">
                        <button className="relative rounded-sm border-0 w-fit overflow-hidden group transition-colors px-4 py-3 bg-[var(--hover-bg-color)] text-sm sm:text-base">
                            <img src={glowingorb} 
                                 alt="glowingorb" 
                                 className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <span className="relative z-10">Book A Call Today</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CTA;