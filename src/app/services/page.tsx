import React from 'react'
import Hero from '@/components/service/hero'
import Logos from '@/components/service/logos'
import Services from '@/components/service/services'
import Workflow from '@/components/service/workflow'
import Design from '@/components/service/design'
import Cta from '@/components/service/cta'

const page = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <Services />
      <Workflow />
      <Design />
      <Cta />
    </div>
  )
}

export default page