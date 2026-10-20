import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { ResearchItem, AuthorLegend } from '../../components/Item'
import { research_en } from '../../data/Data'

export default function Research() {
    const [selected, setSelected] = useState(false)
    const items = research_en.filter(item => !selected || item.Selected)
    const years = [...new Set(items.map(item => item.Info.match(/\b20\d{2}\b/)[0]))].sort((a,b) => b-a)
    return <Layout>
        <div className="page-heading"><h1>Research</h1><p>Learning from simulation, demonstrations, and human interaction<br className="desktop-break" /> to build more capable, reliable robots.</p></div>
        <div className="research-toolbar"><div className="filter-buttons" aria-label="Filter publications"><button type="button" aria-pressed={!selected} onClick={() => setSelected(false)}>All work</button><button type="button" aria-pressed={selected} onClick={() => setSelected(true)}>Selected</button></div><AuthorLegend /></div>
        <div aria-live="polite">{years.map(year => <section className="publication-year" key={year} aria-labelledby={`year-${year}`}><h2 id={`year-${year}`} className="year-label">{year}</h2><div>{items.filter(item => item.Info.includes(year)).map(item => <ResearchItem props={item} key={item.Name} />)}</div></section>)}</div>
    </Layout>
}
export const Head = () => <><title>Research — Wensi Ai</title><meta name="description" content="Publications by Wensi Ai on robot learning, simulation, mobile manipulation, and human-robot interaction." /></>
