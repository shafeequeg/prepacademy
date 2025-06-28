// pages/refund-policy.js
import Head from 'next/head';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#2B1615] flex flex-col">
      <Head>
        <title>Refund Policy - PrepAcademy</title>
        <meta name="description" content="PrepAcademy&apos;s refund policy" />
      </Head>

      <main className="max-w-5xl min-h-screen flex-grow mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-12 md:mt-12">
        <h1 className="text-3xl font-bold text-white mb-8">Refund Policy</h1>

        <div className="space-y-6 text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Eligibility for Refund</h2>
            <p className="text-lg">
              We offer a <strong>full refund</strong> if a formal refund request is submitted <strong>within 7 calendar days of the date of purchase</strong>.
            </p>
            <p className="text-lg mt-4">
              To be eligible:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg mt-2">
              <li>The request must be sent in writing to <Link href="mailto:info@prepacademy.in" className="text-green-400 hover:underline">info@prepacademy.in</Link>.</li>
              <li>It must include: your full name, registered email address, course or service name, purchase date, and the reason for the refund.</li>
              <li>You&apos;ll also need the receipt or proof of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Non-Refundable Situations</h2>
            <p className="text-lg">
              Refunds will <strong>not be issued</strong> under the following circumstances:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg mt-2">
              <li>The request is made <strong>after 7 days</strong> from the purchase date.</li>
              <li>Refunds will not be provided for the purchase of Mock tests and Test series.</li>
              <li>The course or service has been <strong>substantially completed</strong> or a <strong>certificate has been issued</strong>.</li>
              <li>The user has violated the platform&apos;s Terms of Use or engaged in inappropriate activity.</li>
              <li>Refunds are requested due to <strong>change of mind</strong>, <strong>lack of usage</strong>, or <strong>performance dissatisfaction</strong>, unless otherwise covered under the 7-day window.</li>
            </ul>
            <p className="text-lg mt-4">
              Unfortunately, we cannot accept refunds on recorded classes, Test series &amp; mock tests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Technical Issues and Exceptions</h2>
            <p className="text-lg">
              If you encounter a technical issue that prevents access to purchased content and we are <strong>unable to resolve it within 5 working days</strong>, you may be eligible for a full refund— even beyond the 7-day window—at our discretion.
            </p>
            <p className="text-lg mt-4">
              Please inspect your portal upon receiving your username and password and contact us immediately if the site is defective, or if you receive the wrong product, so that we can evaluate the issue and make it right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. How to Request a Refund</h2>
            <p className="text-lg">
              Send an email to <Link href="mailto:info@prepacademy.in" className="text-green-400 hover:underline">info@prepacademy.in</Link> with the following:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg mt-2">
              <li>Full name</li>
              <li>Registered email ID</li>
              <li>Name of the course or service</li>
              <li>Date of purchase</li>
              <li>Reason for the refund</li>
            </ul>
            <p className="text-lg mt-4">
              Our support team will respond within <strong>3–5 business days</strong>.
            </p>
            <p className="text-lg mt-4">
              You can always contact us for any return question at <Link href="mailto:info@prepacademy.in" className="text-green-400 hover:underline">info@prepacademy.in</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Refund Processing</h2>
            <p className="text-lg">
              If approved, your refund will be issued to the original method of payment within <strong>7–10 business days</strong>. We are not responsible for any delays caused by your payment provider.
            </p>
            <p className="text-lg mt-4">
              We will notify you once we&apos;ve received and inspected your refund, and let you know if the refund was approved or not. If approved, you&apos;ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Exchanges</h2>
            <p className="text-lg">
              The product purchase cannot be exchanged or fees cannot be transferred to another product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="text-lg mb-20">
              We reserve the right to update this Refund Policy at any time. Any changes will be posted on this page with a revised &quot;Effective Date.&quot; Continued use of our platform after such changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}