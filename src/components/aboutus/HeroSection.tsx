const HeroSection = () => {
    return (
        <>
            <div className="px-4 sm:px-8 md:px-15 text-white flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-clash)] leading-tight">
                    Pioneering the Intelligent <br className="hidden sm:block" />Future of Business
                </h1>
                <h6 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-[var(--font-inter)] leading-relaxed">
                    Architecting intelligent ecosystems that empower businesses to 
                    <br className="hidden sm:block" />
                    evolve, adapt, and lead in an increasingly digital and 
                    <br className="hidden sm:block" />
                    data-driven world.
                </h6>
            </div>
        </>
    )
}

export default HeroSection;