import collectDataBg from "../../assets/images/collect-data.png"

const CollectData = () => {
    return (
        <div className="container-fluid text-white bg-cover bg-center" style={{ backgroundImage: `url(${collectDataBg})` }}>
            <div 
                className="container-wrapper px-4 sm:px-8 md:px-15 py-10 md:py-20 lg:py-30" 
            >
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-4 md:gap-5">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">The Future Belongs to the AI-Ready</h2>
                        <h3 className="text-xl md:text-2xl lg:text-3xl">Are You One of Them?</h3>
                        <p className="text-base md:text-lg max-w-[500px] text-[var(--text-secondary)]   ">Don't wait to be disrupted. Start leading the transformation with Nuum X.</p>
                    </div>
                    <form method="post" action="" className="w-full max-w-[650px] flex flex-col gap-5 md:gap-6">
                        <h3 className="text-xl md:text-2xl">Book A Strategy Session Today.</h3>
                        <input 
                            type="text" 
                            placeholder="Name"  
                            className="py-2 md:py-3 text-base md:text-xl border-b-1 border-b-gray-400 bg-transparent outline-none placeholder:text-[var(--text-secondary)]"
                        />
                        <input 
                            type="text" 
                            placeholder="Email"  
                            className="py-2 md:py-3 text-base md:text-xl border-b-1 border-b-gray-400 bg-transparent outline-none placeholder:text-[var(--text-secondary)]"
                        />
                        <textarea 
                            name="" 
                            id="" 
                            placeholder="Message" 
                            className="py-2 md:py-3 text-base md:text-xl border-b-1 min-h-[100px] md:min-h-[150px] border-b-gray-400 bg-transparent outline-none resize-none placeholder:text-[var(--text-secondary)]"
                        />
                        <input 
                            type="submit" 
                            value="Book Now" 
                            className="border-1 border-white rounded-sm px-4 py-2 w-fit text-white cursor-pointer outline-0 hover:bg-[var(--btn-hover-bg-color)] hover:text-white transition-colors" 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CollectData;