import { Link } from 'react-router-dom';
import Navbar from '../components/header/Navbar';

const DevelopmentInProgress = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-white px-4">
                <div className="text-center max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-clash)] mb-4">
                        Coming Soon
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="animate-bounce">
                            <svg className="w-8 h-8 text-[#00799E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8">
                        We're working hard to bring you something amazing. This page is under development.
                    </p>
                    <Link
                        to="/"
                        className="inline-block border border-white rounded-sm px-6 py-3 text-white hover:bg-white hover:text-black transition-colors duration-200"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DevelopmentInProgress; 