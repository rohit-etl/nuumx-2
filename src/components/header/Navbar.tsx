import logo from '../../assets/logos/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        {
            label: "About Us",
            link: "/about"
        },
        {
            label: "Services",
            link: "/services"
        },
        {
            label: "Solutions",
            link: "/solutions"
        },
        {
            label: "Products",
            link: "/products"
        },
        {
            label: "Contact Us",
            link: "/contact"
        }
    ]

    return (
        <>
            <div className="container-fluid">
                <div className="container-wrapper px-4 sm:px-8 md:px-15 py-3 sm:py-4 flex justify-between items-center">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" className='p-2 sm:px-[13px] sm:py-[17px]' />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex navbar-menu">
                        <div className="flex items-center gap-2 md:gap-3 text-white">
                            {navItems.map((item, index) => (
                                <Link className='px-3 py-2 md:px-4 hover:bg-[var(--hover-bg-color)] rounded-sm' to={item.link} key={index}>{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    <a href="https://cal.com/nuumxv/30min" target="_blank" className="hidden md:block">
                        <button className='py-2 px-3 md:px-4 border-[0.5px] border-white rounded-sm text-white hover:bg-[var(--btn-hover-bg-color)] '>
                            <p>Book A Call</p>
                        </button>
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none relative z-[60]"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu and Overlay */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    
                    {/* Mobile Menu */}
                    <div className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-black/80 backdrop-blur-md z-[55] transform transition-transform duration-300 ease-in-out md:hidden">
                        <div className="px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-start h-full">
                            {navItems.map((item, index) => (
                                <Link
                                    className='block px-3 sm:px-4 py-3 hover:bg-white/10 w-full text-left text-white transition-colors duration-200'
                                    to={item.link}
                                    key={index}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a href="https://cal.com/nuumxv/30min" target="_blank" className='mt-4 w-full px-3 sm:px-4'>
                                <button 
                                    className='py-3 px-3 sm:px-4 border-[0.5px] border-white rounded-sm text-white w-full hover:bg-white hover:text-black transition-all duration-200'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <p>Book A Call</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar;