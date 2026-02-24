import React from 'react'
import Hero from '@/components/landing/hero'
import Experience from '@/components/landing/experience'
import Overview from '@/components/landing/overview'
import Showcase from '@/components/landing/showcase'
import Metrics from '@/components/landing/metrics'
import Events from '@/components/landing/events'
import Banner from '@/components/landing/banner'
import Faq from '@/components/landing/faq'
import Explore from '@/components/landing/explore'

const page = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Overview />
      <Showcase />
      <Metrics />
      <Events />
      <Banner />
      <Faq />
      <Explore />
    </div>
  )
}

export default page