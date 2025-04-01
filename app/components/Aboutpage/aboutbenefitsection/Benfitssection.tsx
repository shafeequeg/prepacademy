import Image from "next/image";

export default function PrepAcademyFeature() {
  return (
    <section className="w-full bg-[#231818] flex flex-col items-center px-4 md:px-12 lg:px-24 py-12">
      {/* Section 1 - Why CAT With PrepAcademy */}
      <div className="w-full max-w-5xl bg-gradient-to-r from-[#1A1A1A] to-[#221818] rounded-xl overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Text Content */}
          <div className="flex-1 text-white">
            <h2 className="font-serif">
              <span className="text-2xl md:text-3xl font-medium text-[#FF6B45] italic block">Why CAT With</span>
              <span className="text-3xl md:text-4xl font-bold text-white block mt-1">PrepAcademy?</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-5 leading-relaxed max-w-xl">
              The Master of Business Administration (MBA) is a highly sought-after qualification, with entrance exams in India being extremely competitive. These exams serve as gateways to prestigious B-Schools across the country and internationally. Popular exams include CAT, XAT, CMAT, and GMAT, with the CAT being especially challenging due to limited seats and a vast pool of applicants.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-[#FF6B45] text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-[#E55D38] transition-colors">Enroll Now</button>
              <button className="border border-[#FF6B45] text-[#FF6B45] px-6 py-3 rounded-md font-medium text-sm hover:bg-[#FF6B45]/10 transition-colors">Try CAT Mocks</button>
            </div>
          </div>
          {/* Image */}
         {/* Image */}        
<div className="flex-1 mt-6 md:mt-0 w-full min-h-[200px] sm:min-h-[250px] md:min-h-[280px]">        
  <div className="relative w-full h-full rounded-lg overflow-hidden">        
       <Image        
      src="/aboutbenefitlogo.png"        
      alt="Student studying for CAT exam"        
      width={400}         
      height={300}
              className="rounded-lg object-cover w-full h-full"
              priority        
         />        
         </div>
        </div>

        </div>
      </div>

      {/* Section 2 - Expert Educators */}
      <div className="w-full max-w-5xl bg-gradient-to-r from-[#241A1A] to-[#1E1E1E] rounded-xl mt-6 overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="font-serif">
              <span className="text-2xl md:text-3xl font-medium text-[#FF6B45] italic block">Our Team Of Expert Educators</span>
              <span className="text-3xl md:text-4xl font-bold text-white block mt-1">Will Always Be There For You</span>
            </h2>
            
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-gray-200">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FF6B45]/20 text-[#FF6B45]">✓</span>
                <span>Dynamic Live Sessions</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FF6B45]/20 text-[#FF6B45]">✓</span>
                <span>1000+ Targeted Questions</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FF6B45]/20 text-[#FF6B45]">✓</span>
                <span>20 Simulated Mock Tests</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FF6B45]/20 text-[#FF6B45]">✓</span>
                <span>Personalized Learning Path</span>
              </li>
            </ul>
          </div>
          
          {/* Image Section with Logo */}
          <div className="flex-1 relative">
            <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden">
              <Image 
                src="/groupphotopopularcourse.png" 
                alt="Team of expert educators" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg mt-16"
              />
            </div>
            
            {/* PREP ACADEMY Logo */}
            <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2">
  {/* <span className="w-8 h-8  rounded-full flex items-center justify-center"> */}
    <Image
      src="/Headerlogo.png" 
      alt="Logo" 
      className="w-full h-full object-cover rounded-full"
    />
  {/* </span> */}
  {/* <div className="flex flex-col">
    <span className="text-[#FF6B45] font-bold text-lg leading-tight">PREP</span>
    <span className="text-[#4ECDC4] font-bold text-lg leading-tight">ACADEMY</span>
  </div> */}
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}