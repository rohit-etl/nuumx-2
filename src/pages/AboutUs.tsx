import FoundersWord from "../components/aboutus/FoundersWord";
import HeroSection from "../components/aboutus/HeroSection";
import OurIdentity from "../components/aboutus/OurIdentity";
import OurValues from "../components/aboutus/OurValues";
import OurAIStack from "../components/aboutus/OurAIStack";
import WhatSetsApart from "../components/aboutus/WhatSetsApart";
import Navbar from "../components/header/Navbar";
import aboutusVideo from '../assets/images/about-us.webm';


const AboutUs = () => {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-[1080px]">

                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={aboutusVideo}
                    autoPlay
                    // loop
                    muted
                    playsInline
                />
                <div className="relative z-10 container-fluid">
                    <div className="container-wrapper pt-10 md:pt-15 lg:pt-20 flex flex-col gap-10 md:gap-15 lg:gap-48">
                        <Navbar />
                        <HeroSection />
                    </div>
                </div>
            </div>
            <OurIdentity />
            <OurValues />
            <WhatSetsApart />
            <FoundersWord />
            <OurAIStack />
        </div>
    )
}

export default AboutUs;