import Banner from './sections/Home/Banner'
import './App.css'
import ExperienceCard from './sections/Experience/ExperienceCard'
import Experience from './sections/Experience/Experience'
import NavBar from './sections/Navbar/Navbar'
import About from './sections/About/About'
import { useRef } from 'react'

function App() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  
  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    experienceHeader: experienceRef as React.RefObject<HTMLElement>,
    aboutHeader: aboutRef as React.RefObject<HTMLElement>
  }
  return (
    <>
      <NavBar sections = {sectionRefs}></NavBar>
      <Banner></Banner>
      <Experience refProp = {experienceRef}></Experience>
      <About refProp={aboutRef}></About>
    </>
  )
}

export default App


