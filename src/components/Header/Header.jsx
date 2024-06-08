import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from 'react'

function Header({setShowLogin}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {isOpen? <div className=' w-screen h-screen bg-black bg-opacity-70 transition-all duration-500 z-20 fixed'></div> : <div></div>}
      <div className={`w-[80vw] h-screen fixed z-20 bg-white top-0 right-0 transition-all ease-in-out duration-500 p-4 ${!isOpen ? "translate-x-[80vw] opacity-0" : "translate-x-0" }`}>
        <img className=' w-40' src={logo} alt="" />
      <ul className=' px-8 flex flex-col gap-4 pt-20'>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Home</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>About Us</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Join As Atithi</li>
        <li className=' border-b-[0.5px] border-opacity-15 border-black'>Contact</li>
      </ul>
      </div>

      <div className=' absolute w-screen top-0 left-0 z-10 md:static'>
        <div className=" flex justify-around bg-black text-white w-full h-10 bg-opacity-70">
            <div className=" flex gap-10 justify-center items-center md:text-sm md:w-full md:px-2 md:justify-evenly md:gap-4">
                <a href="mailto:msmedostskj@gmail.com" className=' flex justify-center items-center gap-2'><FontAwesomeIcon icon={faEnvelope}/>msmedostskj@gmail.com</a>
                <a href='tel:+918582848434' className=' flex justify-center items-center gap-2'><FontAwesomeIcon icon={faPhone} />+91 85828 48434</a>
            </div>
            <div className=" flex gap-3 justify-center items-center">
                <div className=' flex gap-4 mr-4 sm:hidden'>
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <button className=' bg-gray-300 text-black rounded-md p-1 transition-all duration-500 text-sm hover:bg-gray-200 md:hidden'>FAQs</button>
                <button className=' bg-gray-300 text-black rounded-md p-1 transition-all duration-500 text-sm hover:bg-gray-200 md:hidden'>Testimonials</button>
            </div>
        </div>
       
        <div className=' flex justify-around items-center h-20 bg-white bg-opacity-70'>
          <img src={logo} alt="" className=' w-40'/>
          <div>
            <ul className=' flex gap-5 lg2:hidden'>
              <Link to="/"><li>Home</li></Link>
              <li>About Us</li>
              <Link to="/atithi"><li>Join as Atithi</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
              <li>Register Now</li>
              <button onClick={()=>setShowLogin(true)}><FontAwesomeIcon icon={faUser} className=' px-2'/>Login</button>
            </ul>
          </div>
          <div className=' hidden lg2:block text-4xl'><CgProfile onClick={()=>setShowLogin(true)}/></div>
          <div className={`${isOpen ? "fixed right-4" : "static"} hidden lg2:block z-30`}><Hamburger toggled={isOpen} toggle={setIsOpen}/></div>
        </div>
      </div>





      </>
  )
}
export default Header