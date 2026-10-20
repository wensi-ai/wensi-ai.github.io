import React from 'react'
import '../styles/research.css'
import '../styles/projects.css'

function ResourceLinks({ links }) {
    return <div className="resource-links">{links.map(link => {
        const [label, url] = Object.entries(link)[0]
        return <a href={url} key={label}>{label === 'Github' ? 'Code' : label} <span aria-hidden="true">↗</span></a>
    })}</div>
}

function Authors({ text }) {
    return text.split(/(Wensi Ai|[*†])/g).map((part, index) => {
        if (part === 'Wensi Ai') return <strong key={index}>{part}</strong>
        if (part === '*' || part === '†') return <sup key={index}>{part}</sup>
        return part
    })
}

export function AuthorLegend() {
    return <p className="author-legend"><span>* Equal contribution</span><span>† Equal advising</span></p>
}

export function ResearchItem({ props: item }) {
    const primaryLink = Object.values(item.Links.find(link => link.Website) || item.Links[0])[0]
    return <article className="publication">
        <a href={primaryLink} className="publication-image" aria-label={`${item.Name} ${item.Links.some(link => link.Website) ? 'project website' : 'paper'}`}><img src={item.Img} alt={`${item.Name} overview`} loading="lazy" /></a>
        <div className="publication-copy">
            <p className="venue">{item.Info}</p>
            <h3><a href={primaryLink}>{item.Name}</a></h3>
            <p className="authors"><Authors text={item.Authors} /></p>
            <ResourceLinks links={item.Links} />
        </div>
    </article>
}

export function ProjectItem({ props: item }) {
    const isDocument = /\.pdf$/i.test(item.Img)
    return <article className="project">
        {isDocument ? <a href={item.Img} className="project-image document-preview"><span>{item.Name}</span><span className="document-caption">View PDF ↗</span></a> : <div className="project-image"><img src={item.Img} alt={`${item.Name} preview`} loading="lazy" /></div>}
        <div className="project-copy"><h2>{item.Name}</h2><p>{item.Info}</p><ResourceLinks links={item.Links} /></div>
    </article>
}
