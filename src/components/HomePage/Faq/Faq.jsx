import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
// import { useState } from "react";

// function Faq() {
//     const [toggle, setToggle] = useState(false)
//   return (
//     <div>
//         <h1>FREQUENTLY ASKED QUESTIONS</h1>
//         <div>
//             <p>What is the objective of MSME DOST? Who can join it? How it is beneficial for my Business?</p>
//             <IoIosArrowDown />
//             <RxCross2 />
//         </div>
//         <div>
//             <p>
//                 MSME DOST is a business networking platform that brings together entrepreneurs and small business owners to network, promote, and grow their businesses. Any entrepreneur, small business owner, or professional who is interested in networking and growing their business can join MSME DOST. The benefits of joining MSME DOST include networking opportunities, access to potential clients and partners, exposure for your business, and the ability to learn from other business owners.
//             </p>
//         </div>
//     </div>
//   )
// }
// export default Faq
import React, { useState, useRef } from "react";


const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState("0px");
  const answerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setAnswerHeight(isOpen ? "0px" : `${answerRef.current.scrollHeight}px`);
  };

  return (
    <>
    <div className=" my-8 w-screen p-4 px-44 md:px-2">
      <h1 className=" text-center text-2xl font-semibold">FREQUENTLY ASKED QUESTIONS</h1>
      <div
        className=" text-center flex justify-between items-center rounded cursor-pointer mt-4"
        onClick={toggleOpen}
      >
        <span>{question}</span>
            <IoIosArrowDown className={`${isOpen ? 'hidden' : 'block'} text-3xl`}/>
            <RxCross2 className={`${!isOpen ? 'hidden' : 'block'} text-3xl`}/>
  
      </div>
      <div
        ref={answerRef}
        style={{ maxHeight: `${answerHeight}`, transition: "max-height 0.3s ease-in-out" }}
        className="overflow-hidden"
        >
        <div className="bg-gray-100 py-2 px-4 mt-2 rounded">{answer}</div>
        <hr className=" w-screen"/>
      </div>
    </div>
        </>
  );
};
export default Faq;


