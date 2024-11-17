// import React from 'react'
// import backgroundVideo from '../home/aamac_vid.mp4';

// const Hero = () => {
//   return (
//     <div className="h-screen w-full justify-center items-center bg-center bg-no-repeat"
//         style={{backgroundVideo: `url(${backgroundVideo})`}}
//     >

//       {/* <video
//         autoPlay
//         loop
//         muted
//         className='absolute -top-56 object-contain h-full w-full z-0'
//       >
//         <source src={require('../home/aamac_vid.mp4')} type='video/mp4'/>
//       </video> */}

//         {/* <section className='text-center z-10 text-black'>
//             <h1 className='font-[pacifico] text-5xl mb-4 text-black z-30'>
//               Welcome to
//             </h1>
            
            // <marquee className="text-4xl font-extrabold whitespace-nowrap font-[Doto] uppercase" >
            //     Adeyinka Adegbite Memorial Anglican Church
            // </marquee>
//         </section> */}
//     </div>
//   )
// }

// export default Hero;


import React from 'react';
import backgroundVideo from '../home/aamac_vid.mp4';

const Hero = () => {
  return (
    <div className="relative h-screen sm:w-1/2 md:w-full overflow-hidden text-gray-900 dark:text-white">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-auto md:w-full h-1/2 md:h-3/4 object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />

      {/* Overlay text or content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        
      </div>

      {/* Optional overlay for darkening */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
        <h1 className="font-[pacifico] text-white text-4xl font-bold z-10 flex justify-center items-center mt-16 md:mt-64 lg:mt-36">
          Welcome to
        </h1>

        <marquee className="text-5xl font-extrabold whitespace-nowrap font-[Doto] uppercase mt-14 text-rose-800 dark:text-white" >
                Adeyinka Adegbite Memorial Anglican Church
        </marquee>

        <div className="flex justify-center items-center mt-10 gap-10">
          <button className="bg-gradient-to-tr from-rose-600 to-teal-500 text-white px-6 py-3 rounded-lg">
            Explore More
          </button>

          <button className="bg-gradient-to-tr from-teal-600 to-rose-500 text-white px-6 py-3 rounded-lg">
            JOIN US
          </button>
        </div>
    
      </div>

    </div>
  );
}

export default Hero;