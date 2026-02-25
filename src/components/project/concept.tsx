import React from 'react'
import { Project } from '@/data/projects'

interface ConceptProps {
  project: Project
}

const concept = ({ project }: ConceptProps) => {
  return (
    <section className="section_concept">
                <div className="padding-global padding-section-concept">
                    <div className="container-large">
                        <div className="concept_wrap">
                            <div className="concept_top">
                                <div data-w-id="78a5d19c-73ea-d0f2-8204-ed4fc35f972a"
                                    style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                    className="label-wrapper"><img
                                        src="https://cdn.prod.website-files.com/67463b290def428dc18a7933/674dddf7391111706be28b45_black%20dot.svg"
                                        loading="lazy" alt="" className="icon-1x1-extra-small" />
                                    <div className="text-base">Project property</div>
                                </div>
                                <div className="concept_top-right">
                                    <div className="concept_card">
                                        <div data-w-id="073eba7a-ecd2-0256-12f4-3ad8816bd944"
                                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                            className="text-base text-color-secondary">Type:</div>
                                        <div className="concept_card-value">
                                            <div data-w-id="26439b00-bec9-9407-f400-d81e94518c6f"
                                                style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                                className="text-xl">{project.properties.type}</div>
                                        </div>
                                    </div>
                                    <div className="concept_card">
                                        <div data-w-id="7d967c6a-1b33-01b9-0ed7-8125fa4e7e21"
                                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                            className="text-base text-color-secondary">Modern:</div>
                                        <div className="concept_card-value">
                                            <div data-w-id="7d967c6a-1b33-01b9-0ed7-8125fa4e7e23"
                                                style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                                className="text-xl">{project.properties.modern}</div>
                                        </div>
                                    </div>
                                    <div className="concept_card">
                                        <div data-w-id="6722bf58-b329-3413-60f6-ec0918127b75"
                                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                            className="text-base text-color-secondary">Target Market:</div>
                                        <div className="concept_card-value">
                                            <div data-w-id="6722bf58-b329-3413-60f6-ec0918127b77"
                                                style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                                className="text-xl">{project.properties.targetMarket}</div>
                                        </div>
                                    </div>
                                    <div className="concept_card">
                                        <div data-w-id="87412995-bae2-ab70-598d-b41785ee55a5"
                                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d'}}
                                            className="text-base text-color-secondary">Unique Selling Points:</div>
                                        <div className="concept_card-value">
                                            <div data-w-id="87412995-bae2-ab70-598d-b41785ee55a7"
                                                style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                                className="text-xl">{project.properties.uniqueSellingPoints}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="concept_bottom">
                                {project.propertyImages.map((image, index) => (
                                    <div key={index} data-w-id={index === 0 ? "6fc77e60-9986-b2df-4e45-0e415e54476a" : "ab1430a8-b12c-fe93-53f8-d2304654dd1b"} className="concept_visual-left">
                                        <img
                                            src={image}
                                            loading="lazy" 
                                            data-w-id={index === 0 ? "9b624d1c-5d30-a75b-b720-3fb01c44ac3b" : "ab1430a8-b12c-fe93-53f8-d2304654dd1c"} 
                                            alt={`${project.title} property ${index + 1}`}
                                            sizes="100vw"
                                            className="img img-parallax"
                                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', filter: 'blur(0px)', willChange: 'transform'}} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default concept
