import react from 'react';

export default function TermsOfUse() {
    return (
      <div className="bg-green-50 mt-14 min-h-screen py-10 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            Terms of Use
          </h1>
          <p className="text-lg text-green-700 leading-relaxed mb-8">
            These Terms of Use govern your access to and use of the Cropzap Services platform ("Platform"). By accessing or using the Platform, you agree to comply with these terms.
          </p>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              1. Eligibility
            </h2>
            <ul className="list-disc list-inside text-green-700">
              <li>Be at least 18 years of age or have parental consent.</li>
              <li>Provide accurate and complete information during registration.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              2. Use of the Platform
            </h2>
            <p className="text-green-700">
              You agree to use the Platform only for lawful purposes and in compliance with applicable laws.
            </p>
            <p className="text-green-700">
              You may not engage in activities that disrupt the functionality of the Platform or harm other users.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-green-700">
              All content on the Platform, including trademarks, logos, and software, is owned by Cropzap. Unauthorized use is prohibited.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-green-700">
              Cropzap is not liable for:
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>Losses due to user error, technical disruptions, or unauthorized access.</li>
              <li>Price or product discrepancies caused by third-party data sources.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              5. Termination
            </h2>
            <p className="text-green-700">
              Cropzap reserves the right to terminate your account for violations of these terms or misuse of the Platform.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-green-700">
              Cropzap may modify these terms at its discretion. Continued use of the Platform constitutes acceptance of any updates.
            </p>
          </section>
        </div>
      </div>
    );
  }
  