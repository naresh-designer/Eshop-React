import React from 'react'
import Hero from '../Components/Hero/Hero'
import Faq from '../Components/Faq/Faq'
import Team from '../Components/Team/Team'

const About = () => {
  const heroData={
    img:'../Images/about.png',
    heading:'WE ARE PASSIONATE',
    pageName:'About',
  }
  return (
    <>
    <Hero heroData={heroData}/>
    <Team/>
    <Faq/>
    </>
  )
}

export default About