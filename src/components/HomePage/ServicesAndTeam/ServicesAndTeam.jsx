import { motion } from "framer-motion";
import "./ServicesAndTeam.css";
import teamImages from "./teamImages";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function ServicesAndTeam() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div className=" p-4 mt-10 text-center">
        <h1 className=" text-2xl font-bold text-center mb-4">OUR TEAM</h1>
        <p>
        We proudly accept our National Advisory Team as our Guide, Mentor and all time Advisor for entire steps we take and our frequent update, suggestions and support from them is the keep to our growth and success.
        </p>
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
        >
          {teamImages.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default ServicesAndTeam;
