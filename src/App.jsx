import './App.css'
import FixedHeader from './components/FixedHeader/FixedHeader'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/RouterComponents/Contact/Contact'
import JoinAsAtithi from './components/RouterComponents/JoinAsAtithi/JoinAsAtithi'
import { Rotate } from 'hamburger-react'
import Gallery from './components/Gallery/Gallery'


function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div>
      <Header setShowLogin={setShowLogin}/>
      <FixedHeader setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/atithi' element={<JoinAsAtithi />}/>
        <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      <Footer />
     </div>
    </>
  )
}

export default App
