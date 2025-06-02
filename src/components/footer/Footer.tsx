import { footerItems } from "../../helpers/footerItems";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import octogramLogo from "../../assets/logos/octogram.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

const newsLetterForm = import.meta.env.VITE_NEWSLETTER_FORM;

const Footer = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData();
        formData.append("email", email);

        try {
            const response = await fetch(newsLetterForm, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
        finally{
            setTimeout(() => setStatus(""), 3000)
        }
    };

    const socialIcons = [
        {
            icon: <FaWhatsapp />,
            link: "https://api.whatsapp.com/send/?phone=%2B919899970004&text=Welcome+to+Nuum+X&type=phone_number&app_absent=0"
        },
        {
            icon: <FaDiscord />,
            link: "https://discord.gg/nuumx"
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/company/nuumxai"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/nuumx.ai/#"
        },
        {
            icon: <RiTwitterXFill />,
            link: "https://www.twitter.com/nuumxventures"
        },
        {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/nuumxai"
        }, {
            icon: <FaYoutube />,
            link: "https://www.youtube.com/channel/UCT_QJM9Mw8PQoiaxli4OpVQ"
        }

    ]
    return (
        <footer className="w-full text-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5 text-center sm:text-left">
                    {footerItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 items-center sm:items-start">
                            <h5 className="text-xl font-medium mb-2">{item.title}</h5>
                            <div className="flex flex-col gap-2 items-center sm:items-start">
                                {item.items.map((subItem, subIndex) => (
                                    <a
                                        key={subIndex}
                                        href={subItem.link || "#"}
                                        className="text-[var(--text-secondary)] hover:text-white transition-colors duration-200 text-sm lg:text-base py-2"
                                    >
                                        {subItem.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-4 lg:col-span-2 items-center sm:items-start">
                        <h5 className="text-xl font-medium mb-2 text-center sm:text-left">Stay Ahead. Stay Informed. <br />
                            Stay Inspired.
                        </h5>
                        <p className="text-[var(--text-secondary)] text-center sm:text-left">Subscribe to our newsletter for leading insights in <br/> AI strategy & innovation
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-8 flex-col w-full max-w-[400px] sm:max-w-none">
                            <div className="flex flex-col gap-2">
                                <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email*"
                                required
                                className="p-3 text-white border-b-2 border-[var(--text-secondary)] focus:outline-none flex-1 min-w-0"
                            />
                            <p className="text-[var(--text-secondary)] fs-small text-center sm:text-left">* By subscribing you agree to our Privacy Policy.
                        </p>
                            </div>
                            <input
                                type="submit"
                                value="Subscribe"
                                className="text-[var(--text-secondary)] text-sm border-1 border-[var(--text-secondary)] hover:text-black hover:bg-white py-2 px-4 rounded-sm cursor-pointer"
                            />
                        </form>
                         
                        {status === "success" && (
                            <p className="text-green-400 opacity-50 text-sm mt-3 text-center sm:text-left">Thanks for subscribing!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 opacity-50 text-sm mt-3 text-center sm:text-left">Something went wrong. Please try again.</p>
                        )}
                    </div>
                </div>

                {/* Divider and Social Links */}
                <div className="my-5 py-5 border-y border-white">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6">
                        <p className="text-[var(--text-secondary)] text-sm lg:text-base text-center sm:text-left">
                            © 2025 Nuum X Ventures Pvt. Ltd. All Rights Reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {socialIcons.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors duration-200 text-2xl lg:text-[32px]"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Credits
                <div className="mt-8 pt-4 flex flex-col sm:flex-row justify-end items-center gap-2">
                    <span className="text-[var(--text-secondary)] fs-small text-center sm:text-left">Designed & Maintained by</span>
                    <a href="https://octogram.io" target="_blank" rel="noopener noreferrer">
                        <img
                            src={octogramLogo}
                            alt="Octogram"
                            className="h-2 sm:h-4 w-auto"
                        />
                    </a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;