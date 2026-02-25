import React from 'react'
import Hero from '@/components/project/hero'
import Project from '@/components/project/project'
import { getAllProjects } from '@/data/projects'

const page = () => {
  const projects = getAllProjects()

  return (
    <>
      <Hero />
      <Project projects={projects} />
    </>
  )
}

export default page