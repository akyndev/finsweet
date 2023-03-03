import React from 'react'
import { Features, Header, Market, Remote, Time, Lead } from '../about_sections'
import { Feature, Logos } from '../home_sections'

const About = () => {
  return (
    <section className="mt-40">
      <Header />
      <Logos />
      <Features />
      <Market />
      <Time />
      <Lead />
      <Remote />
      <Feature />
    </section>
  )
}

export default About