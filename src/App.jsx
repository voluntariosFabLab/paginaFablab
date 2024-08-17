import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import About from './views/About/About'
import Services from './views/Services/Services'
import Workshops from './views/Workshops/Workshops'
import Contact from './views/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header/> 
      <Routes>
        <Route path='/' element={ <Home/> } /> 
        <Route path='/about' element={<About/> } /> 
        <Route path='/services' element={ <Services/> } /> 
        <Route path='/workshops' element={ <Workshops/> } /> 
        <Route path='/contact' element={ <Contact/> } /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
