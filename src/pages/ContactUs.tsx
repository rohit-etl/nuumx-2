import HeroSection from "../components/contactus/HeroSection";
import Navbar from "../components/header/Navbar";
import GetInTouch from "../components/contactus/GetInTouch";

const ContactUs = () => {
    return (
        <div className="container-fluid">
            <div className='container-fluid contact-us-bg'>
                <div className="container-wrapper py-20 flex flex-col gap-[113px]">
                    <Navbar />
                    <HeroSection />
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default ContactUs;   