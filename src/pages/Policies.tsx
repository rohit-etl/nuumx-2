import { useState, useCallback } from "react";
import HeroSection from "../components/policies/HeroSection"
import Navbar from "../components/header/Navbar";
import PolicyContent from "../components/policies/PolicyContent";
import Sidebar from "../components/policies/Sidebar";
import TermsOfUse from "../components/policies/TermsOfUseContent";
import PrivacyPolicyContent from "../components/policies/PrivacyPolicyContent";
import TermsOfUseContent from "../components/policies/TermsOfUseContent";

const policies = [
    {
        section: "Privacy Policy",
        title: "We Turn AI From Buzzword\n to Business Impact",
        heading: "Privacy Policy",
        description: [
            "Welcome to nuumx.ai, a platform dedicated to providing secure and innovative cryptocurrency trading and investment solutions. At nuumx.ai (hereinafter referred to as \"nuumx.ai,\" \"we,\" \"our,\" or \"us\") we are fully committed to ensuring the privacy and security of the personal data entrusted to us by users (\"you\" or \"your\") through the use of our services. As part of our core business operations, we recognize and respect the importance of your privacy, and are dedicated to ensuring that your personal data is handled with the utmost care, in full compliance and consonance with Digital Personal Data Protection Act (DPDP Act), 2023, Information Technology Act, 2000 and General Data Protection Regulation (GDPR) along with other relevant privacy laws and regulations that govern data protection within the jurisdictions in which we operate.",
            "This Privacy Policy provides a comprehensive overview of how we collect, process, use, store, disclose, and safeguard your personal information when you access or interact with ParaaCrypto's platform and related services, including mobile applications, websites, and any other services provided by us. By registering, accessing, or using ParaaCrypto, you explicitly consent to the data collection and processing practices outlined in this document. It is essential that you read and understand the terms of this Privacy Policy before engaging with our services.",
            "We are fully committed to upholding your rights as an individual under applicable privacy laws. This includes, but is not limited to, the right to access, correct, update, delete, and restrict the processing of your personal data. We implement a range of security measures designed to protect your information from unauthorized access, disclosure, alteration, or destruction. Additionally, we regularly review our data protection practices to ensure compliance with evolving legal requirements, technological advancements, and best industry practices. In the event of any material changes to this Privacy Policy, we will notify you accordingly, ensuring that you are informed of such changes and have the opportunity to review the revised terms. We encourage you to periodically review this Privacy Policy to stay informed about how your data is being processed and the protective measures we have in place to safeguard your privacy. Your continued use of ParaaCrypto services following the publication of any changes constitutes your acceptance of those changes."
        ],
        content : <PrivacyPolicyContent />
    },
    {
        section: "Terms of Service",
        title: "We Turn AI From Buzzword\n to Business Impact",
        heading: "Terms of Service",
        description: [
            "Welcome to nuumx.ai. These Terms of Service (\"Terms\") govern your access to and use of nuumx.ai's website, services, and applications (collectively, the \"Services\"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Services.",
            "1. Account Registration and Security\n\nTo use our Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
            "2. Trading and Investment Risks\n\nCryptocurrency trading involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. You should carefully consider whether trading cryptocurrencies is appropriate for you in light of your financial condition, investment objectives, and risk tolerance. Past performance is not indicative of future results.",
            "3. Platform Rules and Restrictions\n\nYou agree not to:\n- Use the Services for any illegal purpose\n- Attempt to gain unauthorized access to any part of the Services\n- Interfere with or disrupt the Services or servers\n- Use automated systems or software to extract data from the Services\n- Engage in any form of market manipulation\n- Violate any applicable laws or regulations",
            "4. Fees and Charges\n\nWe may charge fees for certain Services. All fees are non-refundable unless otherwise specified. We reserve the right to modify our fee structure at any time by posting the changes on our website. Your continued use of the Services after such changes constitutes your acceptance of the new fee structure.",
            "5. Intellectual Property\n\nAll content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of nuumx.ai and are protected by international copyright, trademark, and other intellectual property laws.",
            "6. Limitation of Liability\n\nTo the maximum extent permitted by law, nuumx.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
            "7. Termination\n\nWe may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.",
            "8. Changes to Terms\n\nWe reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Services after such modifications constitutes your acceptance of the new Terms.",
            "9. Governing Law\n\nThese Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which nuumx.ai is registered, without regard to its conflict of law provisions.",
            "10. Contact Information\n\nIf you have any questions about these Terms, please contact us at support@nuumx.ai."
        ],
        content : <TermsOfUseContent />
    },
];

const Policies = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(policies[0]);

    const handlePolicyChange = useCallback((policyTitle: string) => {
        const policy = policies.find(p => p.section === policyTitle);
        if (policy) {
            setSelectedPolicy(policy);
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className='container-fluid contact-us-bg'>
                <div className="container-wrapper py-20 flex flex-col gap-[113px]">
                    <Navbar />
                    <HeroSection />
                </div>
            </div>
            <div className="container-wrapper px-15 py-30 flex justify-between">
                <div className="w-[315px] h-full">
                    <Sidebar 
                        policies={policies} 
                        onPolicyChange={handlePolicyChange}
                    />
                </div>
                <div className="w-[800px] h-full max-h-[775px] overflow-y-scroll no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
                    <PolicyContent policy={selectedPolicy} />
                </div>
            </div>
        </div>
    );
};

export default Policies;    