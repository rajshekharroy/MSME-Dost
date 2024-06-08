import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import questionAnswer from "./faqQuestionAnswer";
import React, { useState, useRef } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Faq = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [answerHeight, setAnswerHeight] = useState("0px");
  // const answerRef = useRef(null);

  // const toggleOpen = () => {
  //   setIsOpen(!isOpen);
  //   setAnswerHeight(isOpen ? "0px" : `${answerRef.current.scrollHeight}px`);
  // };
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  const [openStates, setOpenStates] = useState(questionAnswer.map(() => false));
  const [answerHeights, setAnswerHeights] = useState(questionAnswer.map(() => "0px"));
  const answerRefs = questionAnswer.map(() => useRef(null));

  const toggleOpen = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
    setAnswerHeights((prevAnswerHeights) => {
      const newAnswerHeights = [...prevAnswerHeights];
      newAnswerHeights[index] = newAnswerHeights[index] === "0px" ? `${answerRefs[index].current.scrollHeight}px` : "0px";
      return newAnswerHeights;
    });

  }

  return (
    <>
    <div className={` w-screen p-4 px-44 md:px-2 transition-all duration-500 ${isDarkMode ? " bg-gray-700 text-white" : ""}`}>
      <h1 className=" text-center text-2xl font-semibold">FREQUENTLY ASKED QUESTIONS</h1>
      <div className=" w-full flex justify-center items-center my-4">
        <DarkModeSwitch className=" text-center float-right"
        checked={isDarkMode}
        onClick={toggleDarkMode}
        />
      </div>
      {questionAnswer.map((item, index) => (
        <div key={index}>
  <div className=" flex justify-between items-center rounded cursor-pointer mt-4 border-b-[0.5px] pb-4 border-gray-200" onClick={() => toggleOpen(index)}>
    <span style={{fontFamily: '"Amaranth", sans-serif'}} className={` pt-5 text-gray-600 text-xl hover:text-blue-500 transition-all duration-300 ${isDarkMode ? " text-slate-200 hover:text-slate-400" : ""}`}>{item.question}</span>
    <IoIosArrowDown className={` transition-all duration-300 ${openStates[index] ? ' rotate-180' : ' rotate-0'} text-3xl`} />
  
  </div>
  <div
    key={`${index}-answer`}
    ref={answerRefs[index]}
    style={{ maxHeight: `${answerHeights[index]}`, transition: "max-height 0.3s ease-in-out" }}
    className="overflow-hidden"
    >
    <div className= {` bg-gray-100 py-2 px-4 mt-2 text-gray-700 text-xl border-b-4 border-black ${isDarkMode ? " bg-gray-500 text-slate-100 border-b-4 border-gray-300" : ""}`}>{item.answer}</div>
  </div>
    </div>
))} 
    </div>
        </>
  );
};
export default Faq;


