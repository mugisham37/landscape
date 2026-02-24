import React from 'react'
import Hero from '@/components/about/hero'
import Purpose from '@/components/about/purpose'
import Story from '@/components/about/story'
import Journey from '@/components/about/journey'
import Team from '@/components/about/team'
import Faq from '@/components/about/faq'
import Explore from '@/components/about/explore'

const page = () => {
  return (
    <div>
      <Hero />
      <Purpose />
      <Story />
      <Journey />
      <Team />
      <Faq />
      <Explore />
    </div>
  )
}

export default page