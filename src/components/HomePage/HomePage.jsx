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
        // question={question}
        // answer={answer}
        />
      
    </div>
  )
}
export default HomePage