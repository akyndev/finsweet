import React from 'react'
import { Features, Hero, Feature, Testimonial, Why_us, CTA, Discover, Logos } from '../home_sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Why_us />
      <CTA />
      <Logos />
      <Discover />
      <Feature />
      <Testimonial />
    </div>
  )
}

export default Home