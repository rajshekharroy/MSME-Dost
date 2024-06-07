// import React, { useState } from "react";
// import Login from "../Login/Login";

// function LoginPopup({setShowLogin}) {
//   const [isLoginPage, setIsLoginPage] = useState(true);

//   const toggleLoginToSignUp = () =>{
//     setIsLoginPage(prev => !prev)
//   }

//   return(
//     <div className=" animation1 w-screen h-screen bg-black bg-opacity-80 fixed flex items-center justify-center sm:px-4 z-50">
//       <div className=" animation2 w-fit min-w-96 rounded-md sm:min-w-full bg-white text-blue-600 relative">  
//       <button className=" absolute top-4 right-4 bg-gray-600 text-white w-6 h-6 rounded-full" onClick={()=>setShowLogin(false)}> X</button>
//       {
//         isLoginPage ? <Login/> 
//         : 
//         <>
//         <p>This is registration Page</p>
//         </>
//       }
//       {/* <p onClick={toggleLoginToSignUp} >{`${isLoginPage? "Register" : "Click to login"}`}</p> */} 
//       {/* don't delete */}
    
// 5904973b8
// t default LoginPopup;

import React, { useState } from "react";
import Login from "../Login/Login";

function LoginPopup({ setShowLogin }) {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const toggleLoginToSignUp = () => {
    setIsLoginPage(prev => !prev);
  };

  return (
    <div className="animation1 w-screen h-screen bg-black bg-opacity-80 fixed flex items-center justify-center sm:px-4 z-50">
      <div className="animation2 w-fit min-w-96 rounded-md sm:min-w-full bg-white text-blue-600 relative">
        <button
          className="absolute top-4 right-4 bg-gray-600 text-white w-6 h-6 rounded-full"
          onClick={() => setShowLogin(false)}
        >
          X
        </button>
        {isLoginPage ? (
          <Login />
        ) : (
          <>
            <p>This is registration Page</p>
          </>
        )}
        <p onClick={toggleLoginToSignUp}>
          {isLoginPage ? "Register" : "Click to login"}
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;

