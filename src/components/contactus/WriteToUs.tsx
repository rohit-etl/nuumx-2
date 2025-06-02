import { useState, useRef } from "react";
import countryCodes from '../../assets/countrycodes.json';

declare global {
    interface Window {
        grecaptcha: {
            render: (element: HTMLElement, options: any) => number;
            getResponse: (widgetId: number) => string;
            reset: (widgetId: number) => void;
        };
    }
}

const WriteToUs = () => {
    const [status, setStatus] = useState("");
    //@ts-ignore    
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const captchaRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);
    const [isHuman, setIsHuman] = useState(false);
    const [mobileError, setMobileError] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        mobile: "",
        company: "",
        role: "",
        help: "",
        message: ""
    });

    const contactFormURL = import.meta.env.VITE_CONTACT_US_FORM;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === "mobile") setMobileError("");
    };

    const handleCaptchaChange = (token: string) => {
        setCaptchaVerified(!!token);
    };

    const validateMobile = (number: string) => {
        // Remove spaces, dashes, etc.
        const cleaned = number.replace(/\D/g, "");
        // Basic check: 7-15 digits
        return /^\d{7,15}$/.test(cleaned);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!isHuman) {
            setStatus("error");
            return;
        }

        if (!validateMobile(formData.mobile)) {
            setMobileError("Please enter a valid mobile number.");
            setStatus("");
            return;
        }

        setStatus("loading");

        try {
            const form = new FormData();
            for (const key in formData) {
                form.append(key, formData[key as keyof typeof formData]);
            }

            const response = await fetch(contactFormURL, {
                method: "POST",
                body: form,
                redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (response.redirected) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "+91",
                    mobile: "",
                    company: "",
                    role: "",
                    help: "",
                    message: ""
                });
                setIsHuman(false);
                return;
            }

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "+91",
                    mobile: "",
                    company: "",
                    role: "",
                    help: "",
                    message: ""
                });
                setIsHuman(false);
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    // Initialize reCAPTCHA when component mounts
    useState(() => {
        if (captchaRef.current && !widgetIdRef.current) {
            widgetIdRef.current = window.grecaptcha.render(captchaRef.current, {
                sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
                callback: handleCaptchaChange,
                'expired-callback': () => setCaptchaVerified(false)
            });
        }
    });

    return (
        <div className="flex flex-col gap-4 sm:gap-5 text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-clash)]">Write to Us</h3>
            <h6 className="text-sm sm:text-base text-[var(--text-secondary)]">Our team will reach out to you within 24 hours.</h6>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base"
                        required
                    />
                    
                </div>
                <div className="flex flex-row justify-center flex-[1] gap-3 items-center border-b border-b-[var(--text-secondary)]">
                    <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="p-2 sm:p-3 outline-0 bg-transparent text-sm sm:text-[var(--text-secondary)] w-[150px]"
                        required
                    >
                        {countryCodes.map((c: any) => (
                            <option key={c.code} value={`+${c.code}`}>{c.country} (+{c.code})</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile*"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-1 outline-0 bg-transparent text-sm sm:text-base"
                        required
                    />
                </div>
                {mobileError && <p className="text-red-400 text-xs mt-1 ml-1">{mobileError}</p>}
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base"
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Your Role/ Designation"
                        value={formData.role}
                        onChange={handleChange}
                        className="p-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base"
                    />
                </div>
                <div className="flex gap-3">
                    <select
                        name="help"
                        value={formData.help}
                        onChange={handleChange}
                        className="-ml-1 py-2 sm:p-3 flex-[1] border-b border-b-[var(--text-secondary)] outline-0 bg-transparent text-sm sm:text-base [&:not(:focus):not(:valid)]:text-[var(--text-secondary)]"
                        required
                    >
                        <option value="" disabled className="text-[var(--text-secondary)] bg-[#020617]">
                            How can we help you?*
                        </option>
                        <option value="ai_business" className="text-black bg-white">
                            I want to explore AI for my business
                        </option>
                        <option value="ai_partner" className="text-black bg-white">
                            I'm looking for an AI development partner
                        </option>
                        <option value="ai_support" className="text-black bg-white">
                            I need help with AI integration or support
                        </option>
                        <option value="partnership" className="text-black bg-white">
                            I'd like to discuss a potential partnership
                        </option>
                        <option value="career" className="text-black bg-white">
                            I'm looking for career opportunities
                        </option>
                        <option value="media" className="text-black bg-white">
                            I'm from the media/press
                        </option>
                        <option value="general_question" className="text-black bg-white">
                            I just have a general question
                        </option>
                    </select>
                </div>
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 sm:p-3 w-full min-h-[120px] sm:min-h-[168px] border-b border-[var(--text-secondary)] bg-transparent outline-none placeholder:text-[var(--text-secondary)] resize-none text-sm sm:text-base"
                        placeholder="Message*"
                        required
                    />
                </div>
                {/* <div className="flex items-center gap-3">
                    <div 
                        onClick={() => setIsHuman(!isHuman)}
                        className={`flex items-center gap-2 px-3 py-2 border rounded cursor-pointer transition-all duration-200 ${
                            isHuman 
                                ? 'border-[#00799E] ' 
                                : 'border-[var(--text-secondary)] hover:border-white'
                        }`}
                    >
                        <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                            isHuman 
                                ? 'border-[#00799E]' 
                                : 'border-[var(--text-secondary)]'
                        }`}>
                            {isHuman && (
                                <svg 
                                    className="w-4 h-4 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M5 13l4 4L19 7" 
                                    />
                                </svg>
                            )}
                        </div>
                        <span className={`text-sm sm:text-base transition-colors duration-200 ${
                            isHuman ? '#00799E' : 'text-[var(--text-secondary)]'
                        }`}>
                            I am not a robot
                        </span>
                    </div>
                </div> */}
                <div>
                    <input
                        type="submit"
                        value={status === "loading" ? "Submitting..." : "Submit"}
                        className="border border-white rounded-sm px-3 sm:px-4 py-2 text-sm sm:text-base text-white cursor-pointer outline-0 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={status === "loading" || !isHuman}
                    />
                </div>
            </form>

            {status === "success" && (
                <p className="text-green-400 text-xs sm:text-sm mt-2">Thanks for reaching out! We'll get back to you soon.</p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-xs sm:text-sm mt-2">Something went wrong. Please try again.</p>
            )}
        </div>
    );
};

export default WriteToUs;
