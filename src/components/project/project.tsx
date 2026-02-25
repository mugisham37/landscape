import React from 'react'
import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectProps {
  projects: Project[]
}

const project = ({ projects }: ProjectProps) => {
  return (
    <section className="section_projects">
                <div className="padding-global padding-section-large">
                    <div className="container-large">
                        <div className="content_wrap">
                            <div className="header">
                                <div data-w-id="65743f4c-a2bc-a99f-1333-7bc5c9f2853e"
                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","opacity":"1","transformStyle":"preserve-3d"}}
                                    className="badge-wrapper">
                                    <div className="badge">
                                        <div className="badge-text">Our latest project<br /></div>
                                    </div>
                                </div>
                                <h2 data-w-id="47a6a76b-fc17-9136-e890-748b0a4b7cf3"
                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","opacity":"1","transformStyle":"preserve-3d"}}
                                    className="text-5xl">Our sustainability journey</h2>
                            </div>
                            <div className="w-dyn-list">
                                <div role="list" className="projects_content w-dyn-items">
                                    {projects.map((proj) => (
                                        <div key={proj.id} role="listitem" className="w-dyn-item">
                                            <div data-w-id="a3e912ca-9eb2-71a1-1bbe-1b89eb0a8636" className="projects_card"
                                                style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}>
                                                <div className="projects_card-badge"><img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/674dddf7391111706be28b45_black%20dot.svg"
                                                        alt="" className="projects_card-icon" />
                                                    <div className="text-xl">{proj.category}</div>
                                                </div>
                                                <div id="w-node-a3e912ca-9eb2-71a1-1bbe-1b89eb0a863a-eb0a8636"
                                                    className="projects_card-header">
                                                    <div className="projects_card-title">
                                                        <h3 className="text-2xl">{proj.title}</h3>
                                                    </div>
                                                    <div className="projects_card-description">
                                                        <div className="text-base text-color-secondary">{proj.description}
                                                        </div>
                                                    </div>
                                                    <div className="projects_card-link">
                                                        <div data-w-id="a3e912ca-9eb2-71a1-1bbe-1b89eb0a8640" className="link">
                                                            <div className="link_text-wrap">
                                                                <div className="text-base is-link-text-one"
                                                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d"}}>
                                                                    Open project</div>
                                                                <div className="text-base is-link-text-two"
                                                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d"}}>
                                                                    Close project</div>
                                                            </div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                                                viewBox="0 0 16 16" fill="none" className="icon-1x1-small"
                                                                style={{"transform":"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d"}}>
                                                                <path
                                                                    d="M5.08364 4.55307L11.4476 4.55307L11.4476 10.917M11.0057 4.99502L4.55331 11.4474"
                                                                    stroke="currentColor" strokeWidth="1.5"
                                                                    strokeMiterlimit="10" strokeLinecap="square"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="w-node-a3e912ca-9eb2-71a1-1bbe-1b89eb0a8648-eb0a8636"
                                                    className="projects_card-bottom" style={{"height":"0px"}}>
                                                    <div className="projects_card-bottom-content">
                                                        <div className="projects_card-visual-wrap">
                                                            <div className="projects_card-visual-one"
                                                                style={{"transform":"translate3d(0px, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"0"}}>
                                                                <img loading="lazy"
                                                                    src={proj.cardImagePrimary}
                                                                    alt={proj.title}
                                                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 91vw, 70vw"
                                                                    className="img" /></div>
                                                            <div className="projects_card-visual-two hide-mobile-portrait"
                                                                style={{"transform":"translate3d(0px, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"0"}}>
                                                                <img loading="lazy"
                                                                    src={proj.cardImageSecondary}
                                                                    alt={`${proj.title} secondary`}
                                                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 73vw, (max-width: 991px) 45vw, 35vw"
                                                                    className="img" /></div>
                                                        </div>
                                                        <div className="project_card-location-wrap">
                                                            <div className="projects_card-location"
                                                                style={{"transform":"translate3d(0px, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"0"}}>
                                                                <div className="text-base">{proj.location}
                                                                </div>
                                                            </div>
                                                            <div className="button-wrapper"
                                                                style={{"transform":"translate3d(0px, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"0"}}>
                                                                <Link href={`/project/${proj.slug}`}
                                                                    className="button is-tertiary w-button">View project</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default project
