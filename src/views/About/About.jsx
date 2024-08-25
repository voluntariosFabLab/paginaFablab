import "./About.css"
import Faq from "./components/FAQ/Faq"
import Offer from "./components/Offer/Offer"
import Slider from './components/Slider/Slider'
import TeamFablab from "./components/TeamFablab/TeamFablab"
import WhoWeAre from "./components/WhoWeAre/WhoWeAre"

const About = () => {
  return (
    <div className='container__about' >
      <Slider/> 
      <WhoWeAre/> 
      <Offer/>
      <TeamFablab/> 
      <Faq/>
      
    </div>
  )
}

export default About