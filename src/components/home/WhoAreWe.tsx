import pattern1 from "../../assets/icons/1.svg"
import pattern3 from "../../assets/icons/3.svg"
import orb from "../../assets/images/orb.png"
import whoarewe from "../../assets/images/whoarewe.png"

const WhoAreWe = () => {
    return (
        <div className="container-fluid min-h-screen flex items-center">
            <div className="container-wrapper px-4 md:px-15 py-8 md:py-20 w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
                    <div className="flex flex-col text-white gap-6 md:gap-10 w-full lg:w-[538px] flex-shrink-0">
                        <p className="text-[var(--text-secondary)] font-light">who we are</p>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl">
                                A New Age AI Partner for Next-Gen Enterprises Body
                            </h2>
                            <p className="text-sm md:text-base text-[var(--text-secondary)]">
                                nuumx.ai is your end-to-end AI transformation ally. Whether you're a startup with bold ideas or an enterprise seeking to stay ahead of disruption, we partner with you to reimagine what's possible —with AI at the core.
                            </p>
                        </div>
                        <div className="h-[24px] md:h-[32px] flex">
                            <img src={pattern1} alt="" className="h-full w-auto" />
                            <img src={pattern1} alt="" className="h-full w-auto" />
                            <img src={pattern3} alt="" className="h-full w-auto" />
                            <img src={pattern1} alt="" className="h-full w-auto" />
                            <img src={pattern1} alt="" className="h-full w-auto" />
                        </div>
                    </div>
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[699px] h-[286px] md:h-[364px] lg:h-[416px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={orb}
                                    alt="orb"
                                    className="w-[286px] h-[286px] md:w-[364px] md:h-[364px] lg:w-[416px] lg:h-[416px] animate-[breathe_4s_ease-in-out_infinite]"
                                />
                            </div>
                            <img
                                src={whoarewe}
                                alt="who are we"
                                className="w-full h-full relative z-10 object-contain lg:object-fill"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.5); }
                }
            `}</style>
        </div>
    )
}

export default WhoAreWe;