import Banner from './sections/Home/Banner'
import './App.css'
import ExperienceCard from './sections/Experience/ExperienceCard'
import Experience from './sections/Experience/Experience'
import NavBar from './sections/Navbar/Navbar'
import About from './sections/About/About'
import { useRef } from 'react'
import Resume from './sections/Resume/Resume'
import Education from './sections/Education/Education'
import Projects from './sections/Projects/Projects'

function App() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null) 

  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    experienceHeader: experienceRef as React.RefObject<HTMLElement>,
    aboutHeader: aboutRef as React.RefObject<HTMLElement>,
    educationHeader: educationRef as React.RefObject<HTMLElement>,
    resumeHeader: resumeRef as React.RefObject<HTMLElement>,
    projectsHeader: projectsRef as React.RefObject<HTMLElement> 
  }
  
  return (
    <>
      <NavBar sections = {sectionRefs}></NavBar>
      <Banner></Banner>
      <div className = "spaContainer">
        <Education refProp={educationRef} ></Education>
        <Experience refProp = {experienceRef}></Experience>
        <Projects refProp={projectsRef}></Projects> 
        <About refProp={aboutRef}></About>
        <Resume refProp={resumeRef} ></Resume>
      </div>
    </>
  )
}

export default App
