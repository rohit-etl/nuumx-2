// import foundersImage from '../../assets/images/founder-pic.png';

const FoundersWord = () => {
    return (
        <div className="container-fluid px-4 sm:px-8 md:px-15 py-10 sm:py-20 md:py-30">
            <div className="container-wrapper flex flex-col items-center gap-10 sm:gap-15 md:gap-20 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-clash)] text-center">Message from the Leadership</h2>
                <div className="flex items-center px-4 sm:px-8 md:px-25 gap-6 sm:gap-8 md:gap-10">
                    {/* <div className='flex-[1]'>
                        <img src={foundersImage} alt="founder's pic" className='w-full h-full object-contain' />
                    </div> */}
                    <div className='flex-[1] flex flex-col gap-3 sm:gap-4 max-w-[538px]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl">"</h2>
                            <h6 className="text-sm sm:text-base md:text-lg leading-relaxed">
                                At nuumx.ai, we believe the future belongs to those who build with AI — not just talk about it.
                                <br />
                                <br />
                                I started Nuum X to help CXOs and business leaders move from complexity to clarity using intelligent, AI-powered transformation. We don't just consult — we co-create.
                                <br /><br />
                                If you're ready to lead tomorrow, we're ready to build it with you.
                            </h6>
                            <h2 className='text-right text-4xl sm:text-5xl md:text-6xl'>"</h2>
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">Anup Pande</h3>
                            <h6 className="text-sm sm:text-base text-[var(--text-secondary)]">Founder & CEO</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundersWord;