import React from 'react'
import { notFound } from 'next/navigation'
import SlugHero from '@/components/project/slug_hero'
import Gallery from '@/components/project/gallery'
import Concept from '@/components/project/concept'
import SlugProject from '@/components/project/slug_project'
import { getProjectBySlug, getOtherProjects, getAllProjects } from '@/data/projects'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }

  const otherProjects = getOtherProjects(slug)

  return (
    <>
      <SlugHero project={project} />
      <Gallery project={project} />
      <Concept project={project} />
      <SlugProject projects={otherProjects} />
    </>
  )
}

export default page