import React from 'react'
import { Project } from '@/data/projects'

interface GalleryProps {
  project: Project
}

const gallery = ({ project }: GalleryProps) => {
  return (
    <section className="section_gallery">
                <div className="padding-global padding-secion-overview">
                    <div className="container-large">
                        <div className="gallery_wrap">
                            <div className="gallery_header">
                                <div data-w-id="1d8301a1-1975-75f6-94a5-8996f28f34c3"
                                    style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                    className="label-wrapper"><img
                                        src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/674dddf7391111706be28b45_black%20dot.svg"
                                        loading="lazy" alt="" className="icon-1x1-extra-small" />
                                    <h2 className="text-base">{project.title}</h2>
                                </div>
                                <div className="gallery_header-right">
                                    <div data-w-id="9f0f241f-238d-5712-d805-b8085ff5dd6d"
                                        style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                        className="label-wrapper hide-tablet"><img
                                            src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/674dddf7391111706be28b45_black%20dot.svg"
                                            loading="lazy" alt="" className="icon-1x1-extra-small" />
                                        <div className="text-base">Overview</div>
                                    </div>
                                    <div data-w-id="514ef198-e6b5-38d1-f725-d7605d7cc7ed"
                                        style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                        className="text-2xl">{project.overviewText}</div>
                                </div>
                            </div>
                            <div data-w-id="c44f33dd-52d3-fe77-0db7-14299c1d55e2" className="gallery_visual"><img
                                    src={project.overviewImage}
                                    loading="lazy" data-w-id="d11cec6e-6a1e-659f-0fce-e02eaddf4f30" alt={project.title} sizes="100vw"
                                    className="img img-parallax"
                                    style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', filter: 'blur(0px)', willChange: 'transform'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default gallery
