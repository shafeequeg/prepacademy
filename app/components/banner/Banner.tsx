"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gradient-to-r text-white py-14 md:py-12">
  <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-around">
    {/* Left Section - Text and Buttons */}
    <div className="max-w-xl text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-none text-[#F55D3E]">Your Mentor <br /> And Guide <br /></span> For Brighter Future
      </h1>
      <p className="text-base md:text-lg mb-5">
        Empowering students with knowledge and skills for a brighter future
        through exceptional education and unwavering support.
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-4">
        <Link
          href="#"
          className="bg-[#F55D3E] text-black px-5 py-3 rounded-lg font-semibold hover:bg-[#a52a1a] transition"
        >
          FREE Career Counseling
        </Link>

        <Link
          href="#"
          className="bg-none text-[#F55D3E] px-5 py-3 rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition"
        >
          KNOW MORE
        </Link>
      </div>
    </div>

    {/* Right Section - Image */}
    <div className="relative mt-6 md:mt-0 md:w-4/12">
      {/* Background Image */}
      <div
        className="absolute left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bannerround.png')" }}
      ></div>

      <style>
        {`
          @media (min-width: 768px) and (max-width: 1024px) {
            .bannerimage {
              top: 100px !important;
            }
          }

          @media (min-width: 1024px) {
            .bannerimage {
              top: 50px !important;
            }
          }
        `}
      </style>

      {/* Foreground Image */}
      <Image
        src="/prepbannerlogo.png"
        alt="Foreground"
        layout="responsive"
        width={450} // Reduced slightly
        height={300}
        className="relative object-cover rounded-lg bannerimage"
        style={{ top: "50px", maxWidth: "85%" }}
      />
    </div>
  </div>
</section>



      {/* Cards Section */}
      <section className="container mx-auto px-4 md:px-8 py-12  bg-[#2B1615] relative w-[90%]">
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

  {/* Background gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#F55D3E]/5 to-transparent"></div>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full">
    {/* Card 1 */}
    <div className="bg-gradient-to-b from-[#F55D3E]/30 to-transparent border-l border-[#F55D3E] rounded-lg p-6 text-center relative w-full group">
      <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerbook.png"
          alt="School Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-white text-2xl font-bold mb-4 relative z-10">School</h2>
      <p className="text-white/90 text-sm mb-2 relative z-10">Foundational Learning</p>
      <p className="text-white/70 text-sm relative z-10">For All Ages</p>
    </div>

    {/* Card 2 */}
    <div className=" bg-gradient-to-b from-[#F55D3E]/20 to-transparent border-l border-[#F55D3E] rounded-lg p-6 text-center relative w-full group">
      <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerbank.png"
          alt="College Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-white text-2xl font-bold mb-4 relative z-10">College</h2>
      <p className="text-white/90 text-sm mb-2 relative z-10">Foundational Learning</p>
      <p className="text-white/70 text-sm relative z-10">For All Ages</p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-b from-[#F55D3E]/20 to-transparent border-l border-[#F55D3E] rounded-lg p-6 text-center relative w-full group">
      <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
      <div className="mb-4 relative z-10">
        <Image
          src="/bannerglobal.png"
          alt="Study Abroad Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      <h2 className="text-white text-2xl font-bold mb-4 relative z-10">Study Abroad</h2>
      <p className="text-white/90 text-sm mb-2 relative z-10">Foundational Learning</p>
      <p className="text-white/70 text-sm relative z-10">For All Ages</p>
    </div>
  </div>
</section>


    </div>
  );
}
