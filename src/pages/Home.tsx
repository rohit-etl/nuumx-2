import Navbar from "../components/header/Navbar";
import HeroSection from "../components/home/HeroSection";
import WhoAreWe from "../components/home/WhoAreWe";
import WhoWeCanbe from "../components/home/WhoWeCanbe";
import WhatWeDo from "../components/home/WhatWeDo";
// import CollectData from "../components/home/CollectData";
import WhyWeDoIt from "../components/home/WhyWeDoIt";
import CTA from "../components/home/CTA";
import HowWeDoIt from "../components/home/HowWeDoIt";
import timelineVideo from '../assets/images/Timeline 3.webm';

const Home = () => {
    return (
        <div className="relative flex flex-col">
            <div className="relative w-full h-screen">

                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={timelineVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="relative z-10 container-fluid">
                    <div className="container-wrapper pt-8 md:pt-10 lg:pt-10 flex flex-col gap-10 md:gap-15 lg:gap-48">
                        <Navbar />
                        <HeroSection />
                    </div>
                </div>
            </div>
            <WhoAreWe />
            <WhoWeCanbe />
            <WhyWeDoIt />
            <WhatWeDo />
            {/* <CollectData /> */}
            <HowWeDoIt />
            <CTA />
        </div >
    )
}

export default Home;