import "./About.css"
import Slider from './components/Slider/Slider'
import TeamFablab from "./components/TeamFablab/TeamFablab"

const About = () => {
  return (
    <div className='container__about' >
      <Slider/> 

      <TeamFablab/> 
    </div>
  )
}

export default About