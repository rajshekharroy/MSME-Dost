import { Link } from 'react-router-dom'
import logo from '../../assets/MSME_logo.png'
import './Footer.css'

function Footer() {
  return (

    <div className='footer'>
      <div className='flex p-10 justify-evenly gap-10 text-white lg2:flex-col'>
            <div className=' flex flex-col gap-4 z-10'>
              <Link to="/"><img src={logo} alt="" /></Link>
              <p>Kolkata 700001, India</p>
              <a href="tel:+918582848434">Phone: +91 85828 48434</a>
              <a href="mailto:msmedostskj@gmail.com">Email: msmedostskj@gmail.com</a>
            </div>
            <div className=' z-10'>
                <h1 className=' text-2xl font-medium mb-5 text-gray-200 '>Useful Links</h1>
                <ul className=' flex flex-col gap-4'>
                    <Link to="/"><li><span className=' mr-3 text-xl'>{">"}</span>Home</li></Link>
                    <li><span className=' mr-3 text-xl'>{">"}</span>About Us</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Service</li>
                    <Link to="/gallery"><li><span className=' mr-3 text-xl'>{">"}</span>Gallery</li></Link>
                </ul>
            </div>
            <div>
                <h1 className=' text-2xl font-medium mb-5 text-gray-200'>Our Services</h1>
                <ul className=' flex flex-col gap-4'>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Register As an Atihti</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Become a MSME DOST</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Franchise Registration</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Support</li>
                </ul>
          </div>
      </div>
    </div>
  )
}
export default Footer