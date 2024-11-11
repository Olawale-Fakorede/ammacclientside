import React from 'react'

const Hero = () => {
  return (
    <div className="justify-center items-center">
        <section className='text-center'>
            <h1 className='font-[pacifico] text-3xl mb-4'>Welcome to</h1>
            
            <marquee className="text-2xl whitespace-nowrap font-[Doto] uppercase" >
                Adeyinka Adegbite Memorial Anglican Church
            </marquee>
        </section>
    </div>
  )
}

export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// // import video from '../assets/aamac_vid.mp4';


// const Hero = () => {

//     // const myStyle = {
//     //     backgroundImage:
//     //         "url('')",
//     //     height: "100vh",
//     //     marginTop: "0",
//     //     fontSize: "50px",
//     //     backgroundSize: "cover",
//     //     backgroundRepeat: "no-repeat",
//     // };

//   return (
//     <div  classname="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">

//         <video
//             className="absolute top-0 left-0 w-full h-full object-cover z-10"
//             src="/aamac_vid.mp4"  // Adjust path if your video is located elsewhere
//             autoPlay
//             loop
//             muted
//         />


//       <section className=" text-center">
//         <h1 className="font-[pacifico]  text-3xl mb-4">Welcome to</h1>

//         <motion.div
//           initial={{ x: '100%' }}   // Start from the right
//           animate={{ x: '-100%' }}  // Slide to the left
//           transition={{
//             duration: 10,           // Duration of one complete slide
//             repeat: Infinity,       // Repeat infinitely
//             ease: 'linear',         // Linear easing for smooth, continuous motion
//           }}
//           className=" text-2xl whitespace-nowrap font-[Doto] uppercase"
//         >
//           Adeyinka Adegbite Memorial Anglican Church
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Hero;