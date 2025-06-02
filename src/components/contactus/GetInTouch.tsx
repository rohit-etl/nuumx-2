import WriteToUs from "./WriteToUs";

const GetInTouch = () => {
    return (
        <div className="container-wrapper py-10 sm:py-20 md:py-30 px-4 sm:px-8 md:px-15">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-col gap-3 sm:gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-clash)] text-white">Ready to transform your business with AI?</h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)]">
                        Get In Touch
                    </h3>
                </div>
                <div className="flex py-8 sm:py-12 md:py-15">
                    <div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-15">
                        <div className="max-w-full lg:max-w-[538px] h-auto lg:h-[636px] flex-[1] flex flex-col justify-between gap-8 sm:gap-10">
                            <div className="flex flex-col gap-1 text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">Headquarter</h3>
                                <h6 className="text-sm sm:text-base text-[var(--text-secondary)]">
                                    Nuum X Ventures Pvt. Ltd.<br /> DLF Forum, Cybercity, Phase 3, Sector 24, <br />Gurugram, Haryana, India – 2121003
                                </h6>
                            </div>
                            <div className="flex flex-col gap-1 text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">General Inquiries</h3>
                                <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                                    <div className="">
                                        <h6 className="inline mr-2">Write to us at: </h6>
                                        <a href="mailto:connect@nuumx.ai" className="text-white inline mr-2">connect@nuumx.ai</a>
                                        <h6 className="inline mr-2">or call us on</h6>
                                        <a href="tel:+918808102108" className="text-white inline mr-2">+91 8808-102-108</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">Media & Partnerships</h3>
                                <div className="text-sm sm:text-base text-[var(--text-secondary)] gap-2">
                                    <h6 className="inline mr-2">Want to collaborate or feature us? Write to us at: </h6>
                                    <a href="mailto:media@nuumx.ai" className="text-white inline mr-2">media@nuumx.ai</a>
                                    <h6 className="inline mr-2">or </h6>
                                    <a href="mailto:partners@nuumx.ai" className="text-white inline mr-2">partners@nuumx.ai</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">Careers & Internships</h3>
                                    <div className="text-sm sm:text-base text-[var(--text-secondary)] gap-2">
                                    <h6 className="inline mr-2">Interested in joining our AI mission? Write to us at: </h6>
                                        <a href="mailto:careers@nuumx.ai" className="text-white inline mr-2">careers@nuumx.ai</a>
                                    <h6 className="inline mr-2">or visit the</h6>
                                    <a href="#" className="text-white inline mr-2">Careers</a>
                                    <h6 className="inline mr-2">page to view openings.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-full lg:max-w-[538px] h-auto lg:h-[636px] flex-[1]">
                            <WriteToUs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;