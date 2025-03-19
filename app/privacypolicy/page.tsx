// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - PrepAcademy</title>
        <meta name="description" content="PrepAcademy's privacy policy" />
      </Head>

      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24">
        <h1 className="text-3xl font-bold text-gray-700 mb-12 ">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">About</h2>
            <p className="text-lg leading-relaxed">
              This Privacy Policy governs the manner in which PrepAcademy collects, uses, maintains and discloses information collected from users (each, a "User") of the{' '}
              <Link href="https://prepacademy.in" className="text-pink-600 hover:underline">
                https://prepacademy.in
              </Link>{' '}
              website ("Site"). This privacy policy applies to the Site and all products and services offered by PrepAcademy.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">What we collect and store</h2>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Purchases</h2>
            <p className="text-lg leading-relaxed mb-4">
              When purchasing a product from us we will ask Users to provide information including their name, billing address, email address, credit card/payment details and account username. This information will be used to:
            </p>
            <ul className="list-disc pl-10 space-y-4 text-lg">
              <li>Send information about a User's account and order</li>
              <li>Process payments and prevent fraud</li>
              <li>Respond to User requests, including support inquiries and refunds</li>
              <li>Set up User accounts in our store</li>
              <li>Comply with any legal obligations we have, such as calculating taxes</li>
              <li>Send product update messages</li>
            </ul>
            <p className="text-lg leading-relaxed mt-3">
            When making a purchase we will store a User’s name, and billing address, which will be used to populate the checkout for future orders.
            We generally store information about users for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for as long as a subscription account remains active with us. Inactive accounts are stored for 10 years for tax and accounting purposes. This includes User name, email address and billing address.            </p>
           </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Forms
            </h2>
            <p className="text-lg leading-relaxed">
            A User’s name and email address are recorded when contacting our pre-sales department. We do not use the information submitted for marketing purposes unless consent is explicitly given.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Report Downloads

            </h2>
            <p className="text-lg leading-relaxed">
            A User’s email address is added to a marketing email list when requesting a free report download. The email address provided will receive the report and marketing content from PrepAcademy as users give consent in exchange for the information.            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Comments

            </h2>
            <p className="text-lg leading-relaxed">
            A User’s name and email address are recorded on this site when leaving a comment on a blog post. We do not use the information submitted for marketing purposes unless consent is explicitly given.            </p>
          </section>
          <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Analytics & Tracking</h2>
  <p className="text-lg leading-relaxed">
    We use Clicky for website visitor analytics. We do not log any Personal Data of site visitors; IP addresses are anonymized, "Do Not Track" headers and global{' '}
    <a href="#" className="text-pink-600 hover:underline">opt out cookies</a> are honored, and{' '}
    <a href="#" className="text-pink-600 hover:underline">custom data tracking</a> is disabled.
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
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Cookies


 </h2>
            <p className="text-lg leading-relaxed">
            Our Site may use “cookies” to enhance User experience. A User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert users when cookies are being sent. If this is done then note that some parts of the Site may not function properly.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Who in our company has access to stored data</h2>
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
  
  <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">What we share with others</h2>
  <p className="text-lg leading-relaxed">
    We share information with third parties who help us provide our service, including:
  </p>
  <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
    <li>
      <span className="font-semibold">MailChimp:</span> The newsletter opt-in option on the contact form transmits the User's email address to MailChimp. No emails are sent from this platform but are instead passed to ActiveCampaign (see above). Please see MailChimp Privacy Policy for more details.
    </li>
    <li>
      <span className="font-semibold">Akismet:</span> This site uses Akismet (by Automattic) to prevent comment spam on blog posts. Please see the Automattic Privacy Notice for more details.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Personal identification information
 </h2>
   <p className="text-lg leading-relaxed">
   We may collect personal identification information from users in a variety of ways, including, but not limited to, when users visit our site, send us a message from a contact form, place an order, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site.

</p>

    <p className="text-lg leading-relaxed mt-2">
    Users may be asked for, as appropriate, name, email address, mailing address, credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from users only if they voluntarily submit such information to us.
    </p>
    <p className="text-lg leading-relaxed mt-2">
    Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities. Users can request the deletion of this information by us at info@prepacademy.in.

    </p>
     </section>

     <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Non-personal identification information


 </h2>
            <p className="text-lg leading-relaxed">
            We may collect non-personal identification information about users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about users means of connection to our Sites, such as the operating system and the Internet service providers utilized and other similar information.</p>
 </section>
     <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">How we use collected information</h2>
  <p className="text-lg leading-relaxed">
    PrepAcademy may collect and use user personal information for the following purposes:
  </p>
  <ul className="list-disc pl-10 space-y-4 text-lg mt-4">
    <li>
      <span className="font-semibold italic">To improve customer service</span>
      <p className="mt-1">The information provided helps us respond to customer service requests and support needs more efficiently.</p>
    </li>
    
    <li>
      <span className="font-semibold italic">To personalize user experience</span>
      <p className="mt-1">We may use information in the aggregate to understand how our users as a group use the services and resources provided on our Site.</p>
    </li>
    
    <li>
      <span className="font-semibold italic">To improve our Site</span>
      <p className="mt-1">We may use feedback provided to improve our products and services.</p>
    </li>
    
    <li>
      <span className="font-semibold italic">To process payments</span>
      <p className="mt-1">We may use the information users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</p>
    </li>
    
    <li>
      <span className="font-semibold italic">To run a promotion, contest, survey or other Site feature</span>
      <p className="mt-1">To send users information they agreed to receive about topics we think will be of interest to them.</p>
    </li>
    
    <li>
      <span className="font-semibold italic">To send periodic emails</span>
      <p className="mt-1">We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</p>
    </li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">How we protect information



 </h2>
            <p className="text-lg leading-relaxed">
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of personal information, username, password, transaction information and data stored on our Site.

Sensitive and private data exchange between the Site and its users happens over an SSL secured communication channel and is encrypted and protected with digital signatures.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">What rights users have over their data
 </h2>
<p className="text-lg leading-relaxed">
If a User has left comments on this site then the User
 can request to receive an exported file of the personal data that this site holds,
  including any data provided by the User. Users can request that this data be erased. 
  This does not include any data we are obliged to keep for administrative, legal, or security purposes.
   The same rights are available for any data associated with commercial transactions made with our company.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Sharing of personal information

 </h2>
<p className="text-lg leading-relaxed">
We do not sell, trade, or rent a User’s personal identification information to others.
 We may share generic aggregated demographic information not linked to any personal identification information regarding 
 visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
 We may use third-party service providers to help us operate our business and the Site or administer activities on our behalf, 
 such as sending out newsletters or surveys. We may share information with these third parties for those
  limited purposes provided that users have given us permission.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Third party websites


 </h2>
<p className="text-lg leading-relaxed">
Users may find advertising or other content on our Site that link to the sites and 
services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. 
We do not control the content or links that appear on these sites and are not responsible for the practices employed by
 websites linked to or from our Site. In addition, these sites or services, including their content and links, may be
  constantly changing. These sites and services may have their own privacy policies and customer service policies.
   Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s 
   own terms and policies.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Affiliate Links



 </h2>
<p className="text-lg leading-relaxed">
Some blog posts and web pages within this site contain affiliate links.


</p>
<p className="text-lg leading-relaxed mt-2">
An affiliate link is used as a mechanism for revenue generation.
 This revenue is generated by users who click on ads or hyperlinks within this website and then subsequently make a purchase on a third party website.

</p>

<p className="text-lg leading-relaxed mt-2">
While the link usage does not increase a visitor’s purchase price, usage of the link may result in a commission that is credited to this site.



</p>

<p className="text-lg leading-relaxed mt-2">
We have chosen to recommend products and services that we personally use or have thoroughly researched.




</p>

<p className="text-lg leading-relaxed mt-2">
The opinions expressed here are not necessarily the opinions of nor reflect the views of any merchants we are affiliated with or represent via affiliate links.




</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Changes to this privacy policy


 </h2>
<p className="text-lg leading-relaxed">
PrepAcademy has the discretion to update this privacy policy at any time. 
When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently 
check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
</p>
 </section>

 <section>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">Acceptance of these terms



 </h2>
<p className="text-lg leading-relaxed">
By using this Site, you signify your acceptance of this policy. 
If you do not agree to this policy, please do not use our Site. Your continued use of the Site following 
the posting of changes to this policy will be deemed your acceptance of those changes.

</p>
 </section>
 <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Contacting us
            </h2>
            <p className="text-lg leading-relaxed">
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <p className="text-lg leading-relaxed mt-3">
            PrepAcademy

</p>
    <div className="flex flex-col ">
    <Link href="https://prepacademy.in" className="text-pink-600 hover:underline mt-3">
                https://prepacademy.in
              </Link>{' '}

              <Link href="info@prepacademy.in
              " className="text-pink-600 hover:underline mt-3 mb-24">
               info@prepacademy.in
              </Link>{' '}
    </div>
          
              
          </section>

        </div>
      </main>
    </div>
  );
}