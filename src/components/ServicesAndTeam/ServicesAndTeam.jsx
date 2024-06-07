import { motion } from "framer-motion";
import "./ServicesAndTeam.css";
import teamImages from "./teamImages";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'


function ServicesAndTeam() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
<div className=" p-14">
    <h1 className=" text-2xl font-bold text-center">Why to join MSME DOST</h1>
    <p>WHY TO JOIN MSME DOST
Join MSME DOST and unlock the potential to amplify your business, build valuable relationships, and thrive in the dynamic world of entrepreneurshipp</p>

<div className=" flex flex-wrap justify-evenly gap-6">

<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
<div className="icon-content bg-blue-800 text-white w-[40vw] p-5 transition-all duration-300 rounded-lg hover:bg-purple-800">
    <div className=" text-5xl"><FontAwesomeIcon icon={faBagShopping} /></div>
    <div className=" w-4/5 text-left ml-5">
        <h1 className=" text-lg font-bold">Bssines Networking</h1>
        <p className=" pt-4">Connect with like-minded entrepreneurs and professionals to expand your business network and discover new opportunities for growth and collaboration.</p>
    </div>
</div>
</div>


</div>


      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.8}
          className="inner-carousel"

          //     snap={{
          //     x: (value) => {
          //         const nextIndex = Math.round(-value / width);
          //         return nextIndex * width;
          //     },
          //     velocity: 500
          // }}
        >
          {teamImages.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
          {/* <motion.div className="item">
                <img src={image1} alt="" />
                </motion.div>
                <motion.div className="item">
                <img src={image2} alt="" />
                </motion.div>
            <motion.div className="item">
                <img src={image3} alt="" />
                </motion.div>
                <motion.div className="item">
                <img src={image4} alt="" />
                </motion.div>
                <motion.div className="item">
                <img src={image5} alt="" />
            </motion.div> */}
        </motion.div>
      </motion.div>
    </>
  );
}

export default ServicesAndTeam;

//see this code for snap property and drag elastic
// import { useState, useRef, useEffect } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// // Assuming your images array is like this
// const images = [image1, image2, image3, image4, image5];

// function ServicesAndTeam() {
//     const [carouselWidth, setCarouselWidth] = useState(0);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef(null);
//     const dragX = useMotionValue(0);
//     const constraintsRef = useRef(null);

//     useEffect(() => {
//         setCarouselWidth(carouselRef.current.offsetWidth);
//     }, []);

//     useEffect(() => {
//         if (carouselWidth && images.length) {
//             const maxDrag = -(images.length * carouselWidth - carouselWidth);
//             constraintsRef.current = { left: maxDrag, right: 0 };
//         }
//     }, [carouselWidth, images.length]);

//     useEffect(() => {
//         const unsubscribeX = dragX.onChange((x) => {
//             const newIndex = Math.round(-x / carouselWidth);
//             if (newIndex !== currentIndex) {
//                 setCurrentIndex(newIndex);
//             }
//         });
//         return () => {
//             unsubscribeX();
//         };
//     }, [dragX, carouselWidth, currentIndex]);

//     return (
//         <motion.div className="carousel" ref={carouselRef}>
//             <motion.div
//                 drag="x"
//                 dragConstraints={constraintsRef}
//                  dragElastic={0.8}
//                 style={{ x: dragX }}
//                 className="inner-carousel"
//                 snap={{
//                     x: (value) => {
//                         const nextIndex = Math.round(-value / carouselWidth);
//                         return nextIndex * carouselWidth;
//                     },
//                     velocity: 500 // adjust velocity to control snapping speed
//                 }}
//             >
//                 {images.map((image, index) => (
//                     <motion.div className="item" key={index}>
//                         <img src={image} alt="" />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// }

// export default ServicesAndTeam;
