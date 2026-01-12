import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Experience from './Experience.jsx' 
import Projects from './Project.jsx'
import Certification from './Certification.jsx'
import Contact from './Contact.jsx' 
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Education />
    <Skills />
    <Experience />
    <Projects />
    <Certification/>
    <Contact />
    <Footer />
  </React.StrictMode>
)
