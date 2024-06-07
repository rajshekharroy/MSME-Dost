import ServicesAndTeam from "./ServicesAndTeam/ServicesAndTeam"
import About from "./About/About"
import Faq from "./Faq/Faq"
import Hero from "./Hero/Hero"
import WhyToJoin from "./WhyToJoin/WhyToJoin"


function HomePage() {
  return (
    <div>
        <Hero />
      <About />
      <WhyToJoin />
      <ServicesAndTeam />
      <Faq
        question="What is the objective of MSME DOST? Who can join it? How it is beneficial for my Business?"
        answer="MSME DOST is a business networking platform that brings together entrepreneurs and small business owners to network, promote, and grow their businesses. Any entrepreneur, small business owner, or professional who is interested in networking and growing their business can join MSME DOST. The benefits of joining MSME DOST include networking opportunities, access to potential clients and partners, exposure for your business, and the ability to learn from other business owners."
        />
      
    </div>
  )
}
export default HomePage