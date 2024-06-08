import ServicesAndTeam from "./ServicesAndTeam/ServicesAndTeam"
import About from "./About/About"
import Faq from "./Faq/Faq"
import Hero from "./Hero/Hero"
import WhyToJoin from "./WhyToJoin/WhyToJoin"
import React, { useEffect } from 'react';

function HomePage() {
 
  return (
    <div>
      
        <Hero />
  
        <section id="about-section">
      <About />
        </section>
  
      <WhyToJoin />

      <ServicesAndTeam />
      <Faq />
      
    </div>
  )
}
export default HomePage