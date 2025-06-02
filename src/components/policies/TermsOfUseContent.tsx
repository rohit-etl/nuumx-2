"use client";

import React from "react";

const TermsOfUseContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-[var(--text-secondary)] space-y-10">
      <h2 className="text-4xl font-bold mb-4">Terms of Use</h2>
      <p className="text-sm text-gray-500 font-medium">
        Effective Date: 23/05/2025
        <br />
        Last Updated: 23/05/2025
      </p>

      {/* Section 1 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h3>
        <p className="font-normal">
          By accessing or using the nuumx.ai website and services (the
          "Service"), you agree to be bound by these Terms of Use ("Terms"). If
          you do not agree to these Terms, please do not use our Service.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          2. Description of Service
        </h3>
        <p className="font-normal">
          nuumx.ai provides artificial intelligence and machine learning
          services, tools, and related technologies (collectively, the
          "Service"). We reserve the right to modify, suspend, or discontinue
          the Service at any time without notice.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          3. User Accounts and Registration
        </h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">
          3.1 Account Creation
        </h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>
            You must provide accurate and complete information when creating an
            account
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials
          </li>
          <li>
            You must notify us immediately of any unauthorized use of your
            account
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          3.2 Account Responsibility
        </h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>
            You are solely responsible for all activities under your account
          </li>
          <li>You must be at least 18 years old to create an account</li>
          <li>One person may not maintain multiple accounts</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          4. Acceptable Use Policy
        </h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">4.1 Permitted Uses</h4>
        <p className="font-normal">
          You may use our Service for lawful business and personal purposes in
          accordance with these Terms.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">4.2 Prohibited Uses</h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon intellectual property rights of others</li>
          <li>Transmit harmful, threatening, or offensive content</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Use automated tools to access the Service without permission</li>
          <li>
            Generate content that is discriminatory, hateful, or promotes
            violence
          </li>
          <li>
            Create deepfakes or other deceptive AI-generated content without
            proper disclosure
          </li>
          <li>Reverse engineer or attempt to extract underlying AI models</li>
          <li>Use the Service for spam or unsolicited communications</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          5. Intellectual Property Rights
        </h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">5.1 Our Rights</h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>
            nuumx.ai retains all rights, title, and interest in the Service
          </li>
          <li>
            Our trademarks, logos, and brand elements are protected intellectual
            property
          </li>
          <li>
            The underlying AI models and algorithms remain our proprietary
            technology
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2">5.2 User Content</h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>You retain ownership of content you input into our Service</li>
          <li>
            By using our Service, you grant us a limited license to process your
            content to provide the Service
          </li>
          <li>
            You represent that you have the right to use and share any content
            you provide
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          5.3 AI-Generated Content
        </h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>
            Content generated by our AI tools may be used by you in accordance
            with these Terms
          </li>
          <li>We make no claims of ownership over AI-generated outputs</li>
          <li>
            You are responsible for ensuring appropriate use and disclosure of
            AI-generated content
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          6. Privacy and Data Protection
        </h3>
        <p className="font-normal">
          Your privacy is important to us. Our collection and use of personal
          information is governed by our Privacy Policy, which is incorporated
          by reference into these Terms.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">7. Payment Terms</h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">7.1 Fees</h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>Certain features of our Service may require payment</li>
          <li>All fees are non-refundable unless otherwise specified</li>
          <li>
            We reserve the right to change our pricing with 30 days' notice
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2">7.2 Billing</h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>You authorize us to charge your designated payment method</li>
          <li>
            You are responsible for all taxes associated with your use of the
            Service
          </li>
        </ul>
      </section>

      {/* Section 8 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          8. Service Availability and Performance
        </h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">8.1 Availability</h4>
        <p className="font-normal">
          We strive to maintain high service availability but do not guarantee
          uninterrupted access. Scheduled maintenance may temporarily affect
          Service availability.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">8.2 Performance</h4>
        <p className="font-normal">
          AI-generated results are provided "as is" and may not always be
          accurate or suitable for your purposes. You should review and verify
          all AI-generated content before use.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">
          9. Limitation of Liability
        </h3>
        <ul className="list-disc list-inside space-y-2 font-normal mt-2">
          <li>
            OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID FOR THE SERVICE IN
            THE 12 MONTHS PRECEDING THE CLAIM
          </li>
          <li>
            WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES
          </li>
          <li>WE DISCLAIM ALL WARRANTIES EXCEPT AS REQUIRED BY LAW</li>
        </ul>
      </section>

      {/* Section 10 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">10. Indemnification</h3>
        <p className="font-normal">
          You agree to indemnify and hold nuumx.ai harmless from any claims,
          damages, or expenses arising from:
        </p>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights</li>
        </ul>
      </section>

      {/* Section 11 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">11. Termination</h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">
          11.1 Termination by You
        </h4>
        <p className="font-normal">
          You may terminate your account at any time by contacting us or using
          account deletion features.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          11.2 Termination by Us
        </h4>
        <ul className="list-disc list-inside space-y-2 font-normal">
          <li>Violation of these Terms</li>
          <li>Illegal or harmful activity</li>
          <li>Non-payment of fees</li>
          <li>At our sole discretion with or without cause</li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          11.3 Effect of Termination
        </h4>
        <p className="font-normal">
          Upon termination, your right to use the Service ceases, and we may
          delete your account and data.
        </p>
      </section>

      {/* Section 12 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">12. Dispute Resolution</h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">12.1 Governing Law</h4>
        <p className="font-normal">
          These Terms are governed by the laws of [Insert Jurisdiction], without
          regard to conflict of law principles.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">12.2 Arbitration</h4>
        <p className="font-normal">
          Any disputes will be resolved through binding arbitration rather than
          court proceedings, except for claims that may be brought in small
          claims court.
        </p>
      </section>

      {/* Section 13 */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">13. General Provisions</h3>

        <h4 className="text-xl font-semibold mt-4 mb-2">13.1 Modifications</h4>
        <p className="font-normal">
          We may update these Terms at any time. Continued use of the Service
          constitutes acceptance of updated Terms.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">13.2 Severability</h4>
        <p className="font-normal">
          If any provision of these Terms is found unenforceable, the remaining
          provisions will remain in full effect.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          13.3 Entire Agreement
        </h4>
        <p className="font-normal">
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and nuumx.ai.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">
          13.4 Contact Information
        </h4>
        <p className="font-normal">
          For questions about these Terms, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:legal@nuumx.ai" className="text-blue-500 underline">
            legal@nuumx.ai
          </a>
          <br />
          Address: Nuum X Ventures Pvt. Ltd. DLF Forum, Cybercity, Phase 3,
          Sector 24, Gurugram, Haryana, India – 2121003
        </p>
      </section>
    </div>
  );
};

export default TermsOfUseContent;
