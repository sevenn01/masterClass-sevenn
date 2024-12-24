//'use client'

import { createUser } from "@/lib/createUser";
import { fetchUserByEmail, fetchUserCount } from "@/lib/user";
import { SignIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
//import { useRouter } from "next/navigation";
//import { useCallback, useEffect } from "react";
  


 export default function Page() {


    return (
      <section className="w-full bg-white">
       {/* <div className=" lg:grid lg:min-h-screen lg:grid-cols-12">
           Left Section (Image and Content) 
          <section className="relative flex h-48 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="Log-img"
              src="/img-4.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
  
            <div className="hidden lg:flex lg:flex-col lg:relative lg:p-12 text-white">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white w-20 h-20"
                href="#"
              >
                <Image
                  src="/seven-logo.svg"
                  alt="logo-sevenn"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </a>
  
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Welcome to 6-Weeks-class 🎬
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
  */}
          {/* Right Section (Sign In Form) 
          <main className="flex items-center justify-center px-6 py-12 sm:px-16 lg:col-span-7 xl:col-span-6">
            <div className="w-full max-w-lg lg:max-w-3xl">
              {// Mobile View Heading }
              <div
                className="lg:hidden mb-8 text-center sticky top-0 bg-white z-10"
              >
                <a
                  className="inline-flex items-center justify-center rounded-full bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 mx-auto"
                  href="#"
                >
                  <Image
                    src="/seven-logo.svg"
                    alt="logo-sevenn"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </a>
  
                <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Welcome to 6-Weeks-class 🎬
                </h1>
                <p className="mt-2 text-gray-500 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
  
              {/* Sign-in Section }
              <div className="mt-10 flex items-center justify-center">
                <SignIn />
              </div>
            </div>
          </main>
          </div>*/}

          <div className="w-full h-[100vh] flex justify-center items-center
            bg-[url('/img-4.jpg')]
            bg-cover bg-center
          ">
          <SignIn />
        </div>
        
      </section>
    
  
  


//   return (

//     <section className="w-full bg-white">
//   <div className="lg:grid h-[50%] lg:min-h-screen lg:grid-cols-12">
//     {/* Left Section (Image and Content) */}
//     <section className="relative flex h-48 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
//       <Image
//         alt="Log-img"
//         src="/img-4.jpg"
//         width={800}
//         height={800}
//         className="absolute inset-0 h-full w-full object-cover opacity-80"
//       />

//       <div className="hidden lg:flex lg:flex-col lg:relative lg:p-12 text-white">
//         <a
//           className="inline-flex items-center justify-center rounded-full bg-white w-20 h-20"
//           href="#"
//         >
//           <Image
//             src="/seven-logo.svg"
//             alt="logo-sevenn"
//             width={80}
//             height={80}
//             className="object-contain"
//           />
//         </a>

//         <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
//           Welcome to 6-Weeks-class 🎬
//         </h2>
//         <p className="mt-4 leading-relaxed text-white/80">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
//           dolorum aliquam, quibusdam aperiam voluptatum.
//         </p>
//       </div>
//     </section>

//     {/* Right Section (Sign In Form) */}
//     <main className="flex items-center justify-center px-6 py-12 sm:px-16 lg:col-span-7 xl:col-span-6">
//       <div className="w-full max-w-lg lg:max-w-3xl">
//         {/* Mobile View Heading */}
//         <div className="lg:hidden mb-8 text-center">
//           <a
//             className="inline-flex items-center justify-center rounded-full bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 mx-auto"
//             href="#"
//           >
//             <Image
//               src="/seven-logo.svg"
//               alt="logo-sevenn"
//               width={80}
//               height={80}
//               className="object-contain"
//             />
//           </a>

//           <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Welcome to 6-Weeks-class 🎬
//           </h1>
//           <p className="mt-2 text-gray-500 text-sm sm:text-base">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//         </div>

//         {/* Sign-in Section */}
//         <div className="mt-10 flex items-center justify-center">
//           <SignIn />
//         </div>
//       </div>
//     </main>
//   </div>
// </section>


    // <section className="w-full  bg-white">
    //   <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    //     <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
    //       <Image
    //         alt="Log-img"
    //         src="/img-4.jpg"
    //         width={600}
    //         height={600}
    //         className="absolute inset-0 h-full w-full object-cover opacity-80"
    //       />

    //       <div className="hidden lg:relative lg:block lg:p-12">
            
    //         <a
    //           className="inline-flex  items-center justify-center rounded-full bg-white  sm:size-20"
    //           href="#"
    //         >
    //           <Image
    //             src={'/seven-logo.svg'}
    //             alt='logo-sevenn'
    //             width={800}
    //             height={800}
    //             className="h-[140px] "

    //           />
    //         </a>   

    //         <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
    //           Welcome to Squid 🦑
    //         </h2>

    //         <p className="mt-4 leading-relaxed text-white/90">
    //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
    //           quibusdam aperiam voluptatum.
    //         </p>
    //       </div>
    //     </section>

    //     <main
    //       className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    //     >
    //       <div className="max-w-xl lg:max-w-3xl">
    //         <div className="relative -mt-16 block lg:hidden">
    //           <a
    //             className="inline-flex size-16 items-center justify-center rounded-full bg-white  sm:size-20"
    //             href="#"
    //           >
    //             <svg  viewBox="0 0 783 783" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <circle 
    //               cx="391.5" 
    //               cy="391.5" 
    //               r="391.5" 
    //               fill="white"/>
    //             <path 
    //               fillRule="evenodd" 
    //               clipRule="evenodd" 
    //               d="M636 201.5C636 255.913 594.012 300.518 540.668 304.683C524.775 307.564 513.711 308.299 505.182 308.866H505.177C496.698 309.429 490.724 309.825 485 312C465 319.6 448 339.167 442 348C428 363.6 430.33 388.5 438.5 404.5C450.5 428 481.5 443 503.5 443C510.582 443 527.333 438.829 541.612 435.273C543.63 434.771 545.599 434.28 547.483 433.816C558.978 429.413 571.457 427 584.5 427C641.662 427 688 473.338 688 530.5C688 587.662 641.662 634 584.5 634C534.062 634 492.05 597.921 482.865 550.163C480.698 542.21 479.101 532.232 477.38 521.486L477.377 521.464L477.376 521.454L477.375 521.445C475.225 508.01 472.884 493.377 469 480C461.8 455.2 424.5 436 418 436C404.5 436 379.5 441.714 376 443C356.4 450.2 341 479.791 341 500C341 505.094 343.551 518.037 346.175 531.354C348.042 540.823 349.946 550.481 350.996 557.641C352.959 565.604 354 573.931 354 582.5C354 639.662 307.662 686 250.5 686C193.339 686 147 639.662 147 582.5C147 530.44 185.436 487.358 235.479 480.082C241.007 478.59 250.899 477.916 261.912 477.166H261.919C278.131 476.062 296.772 474.792 307.5 470.5C339.5 457.7 348.667 419.5 347 404.5C342.889 367.5 307.6 353.5 292 347.5C281.56 343.485 260.229 347.925 240.666 351.997C225.946 355.061 212.228 357.916 204.902 356.805C202.785 356.935 200.65 357 198.5 357C141.339 357 95 310.662 95 253.5C95 196.338 141.339 150 198.5 150C255.244 150 301.323 195.664 301.993 252.25C302.996 259.273 303.493 265.798 303.964 271.983C304.883 284.053 305.704 294.829 310 305.5C318.253 326 344.5 358.75 385.5 350C449.243 336.396 439.062 274.988 432.447 235.086L432.445 235.076C430.79 225.09 429.357 216.452 429.364 210.248C429.123 207.364 429 204.446 429 201.5C429 144.338 475.338 98 532.5 98C589.662 98 636 144.338 636 201.5Z" fill="black"/>
                
    //             </svg>

    //           </a>

    //           <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
    //             Welcome to Squid 🦑
    //           </h1>

    //           <p className="mt-4 leading-relaxed text-gray-500">
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
    //             quibusdam aperiam voluptatum.
    //           </p>
    //         </div>
    //         <div className="w-full  flex justify-center mt-20 ">
    //           <SignIn /> 
    //         </div>

    //       </div>
    //     </main>
    //   </div>
    // </section> 
      
    
  )
}