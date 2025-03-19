// pages/refund-policy.js
import Head from 'next/head';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>Refund Policy - PrepAcademy</title>
        <meta name="description" content="PrepAcademy's refund policy" />
      </Head>

      <main className="max-w-5xl min-h-screen flex-grow mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Refund Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            We have a 15-day fees refund policy, which means you have 15 days after paying your fees to request a refund. The refund is applicable only for live classes and not available for recorded classes, Test series & mock tests.
          </p>

          <p className="text-lg">
            To be eligible for a refund. You'll also need the receipt or proof of purchase.
          </p>

          <p className="text-lg">
            To start a refund, you can contact us at <a href="mailto:info@prepacademy.in" className="text-green-700 hover:underline">info@prepacademy.in</a>. If your refund is accepted, we'll send you a refund in 7 working days.
          </p>

          <p className="text-lg">
            You can always contact us for any return question at <a href="mailto:info@prepacademy.in" className="text-green-700 hover:underline">info@prepacademy.in</a>.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Issues</h2>
            <p className="text-lg">
              Please inspect your portal upon receiving your username and password and contact us immediately if the site is defective, or if you receive the wrong product, so that we can evaluate the issue and make it right.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Exceptions / non-returnable items</h2>
            <p className="text-lg">
              Unfortunately, we cannot accept refunds on recorded classes, Test series & mock tests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Exchanges</h2>
            <p className="text-lg">
              The product purchase cannot be exchanged or fees cannot be transferred to another product.
            </p>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Refunds</h2>
            <p className="text-lg mb-20">
              We will notify you once we've received and inspected your refund, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
}
