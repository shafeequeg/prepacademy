// 'use client'

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function ComingSoon() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const confettiElements = document.querySelectorAll('.confetti');
//     confettiElements.forEach((element) => {
//       const delay = Math.random() * 2;
//       const duration = 2 + Math.random() * 4;
//       const htmlElement = element as HTMLElement;
//       htmlElement.style.animationDelay = `${delay}s`;
//       htmlElement.style.animationDuration = `${duration}s`;
//     });
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#130808] relative overflow-hidden">
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//             opacity: 0.7;
//           }
//           100% {
//             transform: translateY(0) rotate(360deg);
//             opacity: 1;
//           }
//         }

//         .confetti {
//           animation: float 8s ease-in-out infinite;
//         }
//       `}</style>

//       {Array.from({ length: 30 }).map((_, index) => {
//         const size = Math.floor(Math.random() * 20) + 10;
//         const top = Math.random() * 100;
//         const left = Math.random() * 100;
//         const type = Math.floor(Math.random() * 4);
//         const color = [
//           '#F55D3E',
//           '#00E6E6',
//           '#FF47D2',
//           '#FFFF00',
//           '#50E991',
//           '#FFFFFF',
//         ][Math.floor(Math.random() * 6)];

//         return (
//           <span
//             key={index}
//             className="confetti absolute block"
//             style={{
//               top: `${top}%`,
//               left: `${left}%`,
//               color,
//               width: `${size}px`,
//               height: `${size / (type === 0 ? 3 : 1)}px`,
//               transform: `rotate(${Math.random() * 360}deg)`,
//             }}
//           >
//             {type === 0 && (
//               <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
//             )}
//             {type === 1 && (
//               <div className="text-2xl font-bold" style={{ color }}>+</div>
//             )}
//             {type === 2 && (
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
//             )}
//             {type === 3 && (
//               <div className="text-2xl font-bold" style={{ color }}>×</div>
//             )}
//           </span>
//         );
//       })}

//       {/* Main content */}
//       <div className="z-10 text-center px-4">
//         <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white mb-5">
//           COMING
//           <br />
//           SOON
//         </h1>

//         {/* <p className="text-sm md:text-base text-gray-300 mt-6 mb-6">
//           We will be celebrating the launch of our new site very soon!
//         </p> */}

//         <Link
//           href="/"
//           className="mt-4 px-8 py-2 bg-[#F55D3E] text-[#130808] text-sm font-medium rounded hover:bg-opacity-80 transition-all"
//         >
//           NOTIFY ME
//         </Link>
//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-4 text-xs text-gray-500">
//         <p>© 2025 by &quot;Coming Soon&quot;. Proudly created by Pixelboho</p>

//         <div className="flex justify-center mt-2 space-x-4">
//           <a href="https://www.facebook.com/prepacademy.in" className="text-gray-400 hover:text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
//             </svg>
//           </a>
//           <a href="https://www.linkedin.com/company/prep-academy-india/?viewAsMember=true" className="text-gray-400 hover:text-white">
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
//   </svg>
// </a>
//           <a href="https://www.instagram.com/prepacademy.in/" className="text-gray-400 hover:text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PageNotAvailable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#130808] px-4">
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(245, 93, 62, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(245, 93, 62, 0.4);
          }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main content */}
      <div className="z-10 text-center max-w-2xl mx-auto">
        {/* Large 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-[#F55D3E] mb-6">
          404
        </h1>

        {/* Main heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="px-6 py-2 bg-[#F55D3E] text-[#130808] text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all pulse-glow"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-orange-500 text-orange-500 text-sm sm:text-base font-medium rounded-md hover:bg-orange-500 hover:text-white transition-all"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center w-full px-4">
        <p className="text-xs text-gray-500">
          © 2025 by Prep Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
