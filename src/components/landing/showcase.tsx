import React from 'react'
import Link from 'next/link'
import { getAllProjects } from '@/data/projects'

const Showcase = () => {
  const projects = getAllProjects()

  return (
    <section className="section_showcase">
                <div className="padding-global padding-section-large">
                    <div className="container-large">
                        <div className="showcase_wrap">
                            <div className="header">
                                <div data-w-id="eb2b0c0f-9b16-c187-944d-bfb3898e49e1"
                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                    className="badge-wrapper">
                                    <div className="badge">
                                        <div className="badge-text">Our latest project<br /></div>
                                    </div>
                                </div>
                                <h2 data-w-id="244e3197-12ba-94a4-0483-233f8f555855"
                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                    className="text-6xl">Showcase of excellence</h2>
                                <div data-w-id="cfee7309-a7cc-2ad9-b612-feae3ec9703a"
                                    style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                    className="text-base text-color-secondary">Check Out Our Latest Projects</div>
                            </div>
                            <div className="w-dyn-list">
                                <div role="list" className="showcase_grid w-dyn-items">
                                    {projects.map((project, index) => (
                                    <div key={project.id} data-w-id="500da0dd-74e3-ede0-cfe3-640336f10c2f"
                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                        role="listitem" className="w-dyn-item">
                                        <Link
                                            data-w-id="ad8eabbf-346b-c293-283c-f6a9352649b0"
                                            href={`/project/${project.slug}`}
                                            className="showcase_card w-inline-block">
                                            <div className="showcase_card-header">
                                                <div style={{"borderColor":"rgb(228, 228, 228)"}}
                                                    className="showcase_card-title-wrap">
                                                    <div data-w-id="86ea5708-90c3-90d9-d170-dbbcc59a1b63"
                                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                                        className="text-xl">{project.title}</div>
                                                    <div data-w-id="c0e52711-77b1-4161-3592-f89107807f4e"
                                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                                        className="showcard_card-year-wrap"><img
                                                            src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/674dddf7391111706be28b45_black%20dot.svg"
                                                            loading="lazy" alt="" className="showcase_card-year-icon" />
                                                        <div className="text-xl">{2021 + index}</div>
                                                    </div>
                                                </div>
                                                <div data-w-id="8ae3e3df-ea8a-ac21-108a-1c4f3eda447c"
                                                    className="showcase_card-visual"><img
                                                        src={project.cardImagePrimary}
                                                        loading="lazy"
                                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","willChange":"transform"}}
                                                        data-w-id="37f7eeb2-0868-bed1-afd2-bba7d68d668e" alt={project.title}
                                                        className="img img-parallax" /></div>
                                            </div>
                                            <div data-w-id="ab5779b5-a713-53ef-b61e-0c1bb1842f25"
                                                style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                                className="text-base text-color-secondary">{project.description}</div>
                                            <div data-w-id="10b8233a-0681-3c9c-c31c-ad21c51a26fc"
                                                style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1","borderColor":"rgb(228, 228, 228)"}}
                                                className="showcase_card-bottom">
                                                <div style={{"borderColor":"rgb(228, 228, 228)"}}
                                                    className="showcase_card-bottom-content is-top">
                                                    <div data-w-id="abed54b4-ee2a-b83a-4d68-17e036f6f435"
                                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                                        className="showcase_card-bottom-title">
                                                        <div className="text-base text-color-secondary">Location:</div>
                                                    </div>
                                                    <div data-w-id="cd16f111-24d1-b655-e9da-e98451020010"
                                                        style={{"opacity":"1","transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d"}}
                                                        className="text-base">{project.location}</div>
                                                </div>
                                                <div className="showcase_card-bottom-content">
                                                    <div data-w-id="01b0273e-96a7-cb81-9d48-83478b00943f"
                                                        style={{"transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d","opacity":"1"}}
                                                        className="showcase_card-bottom-title">
                                                        <div className="text-base text-color-secondary">Type of work:</div>
                                                    </div>
                                                    <div data-w-id="01b0273e-96a7-cb81-9d48-83478b009442"
                                                        style={{"opacity":"1","transform":"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","transformStyle":"preserve-3d"}}
                                                        className="text-base">{project.category}</div>
                                                </div>
                                            </div>
                                        </Link>
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

export default Showcase
