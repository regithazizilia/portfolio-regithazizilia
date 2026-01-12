import React from 'react'
import ProfilePic from './assets/images/about.jpeg'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  return (
    <section id="about" ref={ref} className="flex flex-col lg:flex-row items-center px-40 py-24 bg-main text-white lg:justify-between">
      
      {/* Text */}
      <div className={`lg:w-2/3 text-justify lg:pr-6 transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-fuchsia-50 mb-4">
            I am a graduate of Computer Engineering with a strong interest in software development and data analysis. 
            I enjoy the process of building software from the design stage to deployment, as well as processing data 
            into valuable insights to support decision making.
          </p>
          <p className="text-fuchsia-50 mb-4">
              During my undergraduate studies, internships, and independent study programs, I have worked on various projects, 
              particularly in system development and data-driven projects, which have helped me understand user needs and the 
              technical implementation of solutions.

          </p>
          <p className="text-fuchsia-50">
              I possess a combination of hard skills and soft skills that I continuously develop by learning new technologies, enabling me 
              to contribute optimally and responsibly in every role I undertake.
          </p>
      </div>

      {/* Image */}
      <div className={`lg:w-1/3 flex justify-start lg:pl-16 mt-10 lg:mt-0 transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <img src={ProfilePic} alt="Profile" className="w-80 h-80 rounded-full object-cover"/>
      </div>
      
    </section>
  )
}
