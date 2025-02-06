import react from 'react';

export default function RefundPolicy() {
    return (
      <div className="bg-green-50 mt-14 min-h-screen py-10 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            Refund Policy
          </h1>
          <p className="text-lg text-green-700 leading-relaxed mb-8">
            At Cropzap, we strive to ensure customer satisfaction. This Refund Policy outlines the conditions under which refunds may be granted.
          </p>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              1. Eligibility for Refunds
            </h2>
            <ul className="list-disc list-inside text-green-700">
              <li>Refunds are applicable for defective, damaged, or incorrect products/services delivered.</li>
              <li>Refund requests must be submitted within 4 hours of delivery for perishable goods and within 48 hours for non-perishable goods.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              2. Refund Process
            </h2>
            <p className="text-green-700">
              To request a refund, contact <a href="mailto:cropzapservices@gmail.com" className="text-green-900 font-medium underline">cropzapservices@gmail.com</a> with your order details and reason for the refund.
            </p>
            <p className="text-green-700">
              Upon verification, refunds will be processed within 7-10 business days to the original payment method.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              3. Non-Refundable Items
            </h2>
            <ul className="list-disc list-inside text-green-700">
              <li>Perishable goods (e.g., fresh produce) unless delivered defective or damaged.</li>
              <li>Services rendered and utilized by the customer.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              4. Cancellation Policy
            </h2>
            <p className="text-green-700">
              Orders may be canceled before shipment for a full refund. Once shipped, cancellations are not permitted.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              5. Exceptions
            </h2>
            <p className="text-green-700">
              Cropzap reserves the right to deny refunds in cases of fraud, misuse, or violation of terms.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              For additional inquiries, please contact us at:
            </h2>
            <p className="text-green-700">
              Email: <a href="mailto:cropzapservices@gmail.com" className="text-green-900 font-medium underline">cropzapservices@gmail.com</a>
            </p>
            <p className="text-green-700">
              Phone: +91-9952492456
            </p>
          </section>
        </div>
      </div>
    );
  }
  