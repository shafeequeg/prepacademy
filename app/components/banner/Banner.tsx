"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gradient-to-r text-white py-20 " >
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Text and Buttons */}
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-none text-[#F55D3E]">Your Mentor <br /> And Guide <br /></span> For Brighter Future
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering students with knowledge and skills for a brighter future
              through exceptional education and unwavering support.
            </p>

            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="#"
                className="bg-[#F55D3E] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#a52a1a] transition"
              >
                FREE Career Counseling
              </Link>

              <Link
                href="#"
                className="bg-none text-[#F55D3E] px-8 py-3 rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition"
              >
                KNOW MORE
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
        {/* Right Section - Image with Background */}
        <div className="relative mt-10 md:mt-0 md:w-1/2">
  {/* Background Image */}
  <div
    className="absolute left-0 w-full h-full bg-cover bg-center opacity-50"
    style={{ backgroundImage: "url('/bannerround.png')" }} // Adjusted top position
  ></div>
 <style>
  {`
    @media (min-width: 768px) and (max-width: 1024px) {
      .bannerimage {
        top: 150px !important;
      }
    }

    @media (min-width: 1024px) and (max-width: 1024px) {
      .bannerimage {
        top: 80px !important;
      }
    }
  `}
</style>

  {/* Foreground Image */}
  <Image
    src="/prepbannerlogo.png" // Update with your actual foreground image
    alt="Foreground"
    layout="responsive"
    width={600} // Adjust according to the aspect ratio
    height={400} // Adjust according to the aspect ratio
    className="relative object-cover rounded-lg bannerimage"
    style={{top:"80px"}}
  />
</div>


        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 md:px-8 py-12 relative">
      <style>
    {`
      @media (max-width: 912px) {
        section {
          width: 100vw !important;
          max-width: 100% !important;
        }
      }
    `}
  </style>
  <div className="absolute inset-0 bg-[#F55D3E] opacity-20"></div> {/* Overlay Background for Section */}
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full">
    {/* Card 1 */}
    <div className="bg-black shadow-[0px 0px 15px rgba(245, 93, 62, 0.5)] border-l-2 border-r-2 border-[#F55D3E] rounded-lg p-6 text-center relative w-full">
      <div className="absolute inset-0 bg-[#F55D3E] opacity-20 rounded-lg"></div> {/* Overlay inside Card */}
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerbook.png" // Replace with your logo image source
          alt="School Logo"
          width={50} // Adjust size as needed
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-2xl font-bold text-[#F55D3E] mb-4 relative z-10">School</h2>
      <p className="text-white mb-4 relative z-10">Foundational Learning</p>
      <p className="text-white relative z-10">For All Ages</p>
    </div>

    {/* Card 2 */}
    <div className="bg-black shadow-[0px 0px 15px rgba(245, 93, 62, 0.5)] border-l-2 border-r-2 border-[#F55D3E] rounded-lg p-6 text-center relative w-full">
      <div className="absolute inset-0 bg-[#F55D3E] opacity-20 rounded-lg"></div> {/* Overlay inside Card */}
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerbank.png" // Replace with your logo image source
          alt="College Logo"
          width={50} // Adjust size as needed
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-2xl font-bold text-[#F55D3E] mb-4 relative z-10">College</h2>
      <p className="text-white mb-4 relative z-10">Foundational Learning</p>
      <p className="text-white relative z-10">For All Ages</p>
    </div>

    {/* Card 3 */}
    <div className="bg-black shadow-[0px 0px 15px rgba(245, 93, 62, 0.5)] border-l-2 border-r-2 border-[#F55D3E] rounded-lg p-6 text-center relative w-full">
      <div className="absolute inset-0 bg-[#F55D3E] opacity-20 rounded-lg"></div> {/* Overlay inside Card */}
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerglobal.png" // Replace with your logo image source
          alt="Study Abroad Logo"
          width={50} // Adjust size as needed
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-2xl font-bold text-[#F55D3E] mb-4 relative z-10">Study Abroad</h2>
      <p className="text-white mb-4 relative z-10">Foundational Learning</p>
      <p className="text-white relative z-10">For All Ages</p>
    </div>
  </div>
</section>


    </div>
  );
}
