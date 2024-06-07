import logo from '../../assets/MSME_logo.png'
import './Footer.css'

function Footer() {
  return (

    <div className='footer'>
      <div className='flex p-10 justify-evenly gap-10 text-white lg2:flex-col'>
            <div className=' flex flex-col gap-4'>
              <img src={logo} alt="" />
              <p>Kolkata 700001, India</p>
              <p>Phone: +91 85828 48434</p>
            </div>
            <div>
                <h1 className=' text-2xl font-medium mb-5 text-gray-200 '>Useful Links</h1>
                <ul className=' flex flex-col gap-4'>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Home</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>About Us</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Service</li>
                    <li><span className=' mr-3 text-xl'>{">"}</span>Gallery</li>
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