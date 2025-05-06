// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#2B1615]">
      <Head>
        <title>Privacy Policy - PrepAcademy</title>
        <meta name="description" content="PrepAcademy's privacy policy" />
      </Head>

      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24 text-white">
        <h1 className="text-3xl font-bold text-white mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About</h2>
            <p className="text-lg leading-relaxed">
              This Privacy Policy governs the manner in which PrepAcademy collects, uses, maintains and discloses information collected from users (each, a User) of the{' '}
              <Link href="https://prepacademy.in" className="text-pink-300 hover:underline">
                https://prepacademy.in
              </Link>{' '}
              website (Site). This privacy policy applies to the Site and all products and services offered by PrepAcademy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-white mb-2">a. Personal Information:</h3>
              <ul className="list-disc pl-10 space-y-2 text-lg">
                <li>Name</li>
                <li>Contact details (email, phone number)</li>
                <li>Educational background</li>
                <li>Payment and billing information</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">b. Usage Information:</h3>
              <ul className="list-disc pl-10 space-y-2 text-lg">
                <li>IP address</li>
                <li>Browser/device type</li>
                <li>Date and time of access</li>
                <li>Pages visited and usage patterns</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-lg leading-relaxed mb-2">We use the information to:</p>
            <ul className="list-disc pl-10 space-y-2 text-lg">
              <li>Provide and manage user accounts and services</li>
              <li>Personalize educational content and experience</li>
              <li>Communicate with users (updates, support, marketing)</li>
              <li>Ensure platform security and prevent misuse</li>
              <li>Analyze usage data to improve our services</li>
              <li>Send information about a User&apos;s account and order</li>
              <li>Process payments and prevent fraud</li>
              <li>Respond to User requests, including support inquiries and refunds</li>
              <li>Set up User accounts in our store</li>
              <li>Comply with any legal obligations we have, such as calculating taxes</li>
              <li>Send product update messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
            <p className="text-lg leading-relaxed mb-4">
              We do not sell or trade your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg">
              <li>Service providers (e.g., hosting, payment gateways, analytics)</li>
              <li>Legal or regulatory authorities if required by law</li>
              <li>Partners, only with your prior consent</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              From time to time, we may <span className="font-bold">publicly recognize high-performing students or achievers</span> (e.g., top scorers, competition winners) by publishing their names, photographs, or academic highlights on our website, social media platforms, or promotional materials. Such recognitions are made with sensitivity and are intended to motivate and celebrate student success.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We share information with third parties who help us provide our service, including:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
              <li>
                <span className="font-semibold">MailChimp:</span> The newsletter opt-in option on the contact form transmits the User&apos;s email address to MailChimp. No emails are sent from this platform but are instead passed to ActiveCampaign. Please see MailChimp Privacy Policy for more details.
              </li>
              <li>
                <span className="font-semibold">Akismet:</span> This site uses Akismet (by Automattic) to prevent comment spam on blog posts. Please see the Automattic Privacy Notice for more details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Use of Cookies</h2>
            <p className="text-lg leading-relaxed mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg">
              <li>Maintain session data</li>
              <li>Remember user preferences</li>
              <li>Track site performance</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              You may disable cookies in your browser settings, but some features may not work properly.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our Site may use cookies to enhance User experience. A User&apos;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert users when cookies are being sent. If this is done then note that some parts of the Site may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-lg leading-relaxed">
              We implement reasonable physical, administrative, and technical safeguards to protect your data. However, no system is entirely immune to breaches.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of personal information, username, password, transaction information and data stored on our Site.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Sensitive and private data exchange between the Site and its users happens over an SSL secured communication channel and is encrypted and protected with digital signatures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Children&apos;s Privacy</h2>
            <p className="text-lg leading-relaxed">
              Our services are not directed to children under 13. If we learn that personal data from a child under 13 has been collected, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              You may:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg">
              <li>Access and update your personal information</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Contact us at <Link href="mailto:info@prepacademy.in" className="text-pink-300 hover:underline">info@prepacademy.in</Link> to exercise these rights.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              If a User has left comments on this site then the User
              can request to receive an exported file of the personal data that this site holds,
              including any data provided by the User. Users can request that this data be erased.
              This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              The same rights are available for any data associated with commercial transactions made with our company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-lg leading-relaxed">
              We may update this Privacy Policy. Changes will be posted on this page with the revised date. Continued use of the platform constitutes acceptance of the changes.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              PrepAcademy has the discretion to update this privacy policy at any time.
              When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently
              check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Legal Jurisdiction</h2>
            <p className="text-lg leading-relaxed">
              This Privacy Policy is governed by the laws of <strong>India</strong>, and any disputes shall be subject to the exclusive jurisdiction of the <strong>courts in Chengannur, Kerala</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Product Purchases</h2>
            <p className="text-lg leading-relaxed mb-4">
              When purchasing a product from us we will ask Users to provide information including their name, billing address, email address, credit card/payment details and account username. This information will be used to process your orders and manage your account.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              When making a purchase we will store a User&apos;s name, and billing address, which will be used to populate the checkout for future orders.
              We generally store information about users for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for as long as a subscription account remains active with us. Inactive accounts are stored for 10 years for tax and accounting purposes. This includes User name, email address and billing address.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Forms</h2>
            <p className="text-lg leading-relaxed">
              A User&apos;s name and email address are recorded when contacting our pre-sales department. We do not use the information submitted for marketing purposes unless consent is explicitly given.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Report Downloads</h2>
            <p className="text-lg leading-relaxed">
              A User&apos;s email address is added to a marketing email list when requesting a free report download. The email address provided will receive the report and marketing content from PrepAcademy as users give consent in exchange for the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Comments</h2>
            <p className="text-lg leading-relaxed">
              A User&apos;s name and email address are recorded on this site when leaving a comment on a blog post. We do not use the information submitted for marketing purposes unless consent is explicitly given.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Analytics & Tracking</h2>
            <p className="text-lg leading-relaxed">
              We use Clicky for website visitor analytics. We do not log any Personal Data of site visitors; IP addresses are anonymized, Do Not Track headers and global{' '}
             opt out cookies are honored, and{' '}
            custom data tracking  is disabled.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We use ActiveCampaign site tracking to personalize experiences for any User who has purchased a product from us or who has willingly subscribed to an email list. The following information is stored in ActiveCampaign when a purchase of one of our products is made or a User subscribes to an email list:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
              <li>Name</li>
              <li>Email Address</li>
              <li>Location</li>
              <li>Visitor history</li>
              <li>Interest tags</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who in our company has access to stored data</h2>
            <p className="text-lg leading-relaxed">
              Members of our team have access to the information users provide us. For example, Administrators and Managers can access:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
              <li>Order information like what was purchased, when it was purchased, and;</li>
              <li>Customer information like name, email address, and billing information.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Administrators, Managers, and Support Representatives can access:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
              <li>Contact information (name and email address) from submitted contact forms.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Our team members have access to this information to provide user support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Affiliate Links</h2>
            <p className="text-lg leading-relaxed">
              Some blog posts and web pages within this site contain affiliate links.
            </p>
            <p className="text-lg leading-relaxed mt-2">
              An affiliate link is used as a mechanism for revenue generation.
              This revenue is generated by users who click on ads or hyperlinks within this website and then subsequently make a purchase on a third party website.
            </p>
            <p className="text-lg leading-relaxed mt-2">
              While the link usage does not increase a visitor&apos;s purchase price, usage of the link may result in a commission that is credited to this site.
            </p>
            <p className="text-lg leading-relaxed mt-2">
              We have chosen to recommend products and services that we personally use or have thoroughly researched.
            </p>
            <p className="text-lg leading-relaxed mt-2">
              The opinions expressed here are not necessarily the opinions of nor reflect the views of any merchants we are affiliated with or represent via affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of these terms</h2>
            <p className="text-lg leading-relaxed">
              By using this Site, you signify your acceptance of this policy.
              If you do not agree to this policy, please do not use our Site. Your continued use of the Site following
              the posting of changes to this policy will be deemed your acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contacting us</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <p className="text-lg leading-relaxed mt-3">
              PrepAcademy
            </p>
            <div className="flex flex-col">
              <Link href="https://prepacademy.in" className="text-pink-300 hover:underline mt-3">
                https://prepacademy.in
              </Link>
              <Link href="mailto:info@prepacademy.in" className="text-pink-300 hover:underline mt-3 mb-24">
                info@prepacademy.in
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}