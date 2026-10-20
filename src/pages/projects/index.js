import React from 'react'
import Layout from '../../components/Layout'
import { ProjectItem } from '../../components/Item'
import { proj_en } from '../../data/Data'

export default function Projects() {
    return <Layout><div className="page-heading"><h1>Projects</h1><p>Simulation tools, open-source contributions, and things I’ve built.</p></div><div className="projects-grid">{proj_en.map(item => <ProjectItem props={item} key={item.Name} />)}</div></Layout>
}
export const Head = () => <><title>Projects — Wensi Ai</title><meta name="description" content="Open-source tools, simulation projects, and software built by Wensi Ai." /></>
