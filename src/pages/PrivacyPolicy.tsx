import react from 'react';


export default function PrivacyPolicy() {
    return (
      <div className="bg-green-50 min-h-screen py-10 mt-14 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-green-700 leading-relaxed mb-8">
            At <strong>Cropzap Services</strong> (<strong>"Cropzap"</strong>), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.
          </p>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-green-700">
              <li>
                <strong>Personal Information:</strong> Name, contact details (phone number, email address), billing and delivery addresses.
              </li>
              <li>
                <strong>Business Information:</strong> Business name, GST number (if applicable), and business address.
              </li>
              <li>
                <strong>Transactional Data:</strong> Orders, payments, and service usage history.
              </li>
              <li>
                <strong>Technical Data:</strong> IP addresses, browser type, device information, and cookies.
              </li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-green-700">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>Provide and manage our services.</li>
              <li>Process transactions and send notifications.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Improve our platform, offerings, and marketing strategies.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              3. Sharing of Information
            </h2>
            <p className="text-green-700">
              We do not sell or rent your personal information to third parties. However, we may share your data with:
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>Service providers and partners assisting in delivering our services.</li>
              <li>Legal authorities if required by law.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              4. Security Measures
            </h2>
            <p className="text-green-700">
              We use industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure. By using Cropzap, you acknowledge the inherent risks.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              5. Your Rights
            </h2>
            <p className="text-green-700">
              You can access, update, or delete your personal information by contacting us at{' '}
              <a href="mailto:cropzapservices@gmail.com" className="text-green-900 font-medium underline">
                cropzapservices@gmail.com
              </a>.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              6. Changes to this Privacy Policy
            </h2>
            <p className="text-green-700">
              We may update this policy periodically. Changes will be effective upon posting on our website.
            </p>
          </section>
        </div>
      </div>
    );
  }
  