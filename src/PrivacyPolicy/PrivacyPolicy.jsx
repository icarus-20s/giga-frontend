import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 border-b border-gray-200">
        <div className="w-full mx-auto px-6 py-30">
          <h1 className="text-3xl font-bold text-white text-center">Privacy Policy</h1>
          <p className="text-center text-white mt-3">
            Effective Date: <span className="font-medium">February 23, 2024</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-6 py-12">

        {/* Section 1 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            Welcome to Giga School ERP ("we," "our," or "us"), a product of Giga Infosoft Pvt. Ltd.. This Privacy Policy is designed to help you understand how we collect, use, share, and safeguard your personal information. By using Giga School ERP, you agree to the practices outlined in this policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
          <div className="space-y-10 mt-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1. User Information</h3>
              <p className="text-lg text-gray-700 leading-8">
                Giga School ERP may collect personal information such as names, contact details, and user credentials when you register.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2. Usage Information</h3>
              <p className="text-lg text-gray-700 leading-8">
                We gather data on how you interact with Giga School ERP, including log files, IP addresses, browser type, and other usage information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.3. Student Information</h3>
              <p className="text-lg text-gray-700 leading-8">
                In the context of a school ERP software, Giga School ERP may collect and store student information, such as grades, attendance records, and other educational data.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
          <div className="space-y-10 mt-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1. Providing Services</h3>
              <p className="text-lg text-gray-700 leading-8">
                We use the collected information to deliver and enhance the features and services of Giga School ERP.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2. Communication</h3>
              <p className="text-lg text-gray-700 leading-8">
                Giga School ERP may use your contact information to send important updates, announcements, and other relevant information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3. Improvement and Research</h3>
              <p className="text-lg text-gray-700 leading-8">
                We may use aggregated and anonymized data for research and improvement of Giga School ERP.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Sharing Your Information</h2>
          <div className="space-y-10 mt-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1. Third-Party Service Providers</h3>
              <p className="text-lg text-gray-700 leading-8">
                We may share your information that you allow with third-party service providers who assist us in providing and improving our services. The information that we share to third-party is governed by their privacy policies so we kindly request you to visit their privacy policies before allowing your information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2. Legal Compliance</h3>
              <p className="text-lg text-gray-700 leading-8">
                Giga School ERP may disclose your information in response to legal requests or when necessary to protect our rights, users, or others.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Security</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Choices</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            You can control and manage your information through the settings provided in Giga School ERP.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Changes to this Privacy Policy</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            We reserve the right to modify this Privacy Policy at any time. Updates will be posted on our website, and you are encouraged to review this policy periodically.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact Us</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact Giga Infosoft Pvt. Ltd. at{" "}
            <a
              href="mailto:gigaimplementation@gmail.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              gigaimplementation@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Footer Note */}
        <div className="mt-20 pt-10 border-t-2 border-gray-300">
          <p className="text-center text-gray-600 italic">
            This privacy policy is a legal document. Please read it carefully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;