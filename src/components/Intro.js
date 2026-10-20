import React from 'react'
import { contacts, research_topic, research_interest } from '../data/Info'
import '../styles/Home.css'

export default function Intro() {
    return <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy">
            <h1 id="intro-title">Wensi <span className="nickname">(Vince)</span> Ai</h1>
            <div className="intro-bio">
                <p>I am a CS PhD student at Stanford University advised by Prof. <a href="https://profiles.stanford.edu/fei-fei-li">Fei-Fei Li</a> in the <a href="https://svl.stanford.edu">Stanford Vision and Learning Lab (SVL)</a>. My research is in {research_topic}, with a focus on {research_interest}.</p>
                <p>Previously, I received my M.S. in Computer Science from Stanford and B.S. in Computer Science and Applied Math from <span className="ucla-accent">UCLA</span>. I was fortunate to work with Prof. <a href="https://jiajunwu.com">Jiajun Wu</a> and Prof. <a href="http://www.stat.ucla.edu/~ywu/">Ying-Nian Wu</a>.</p>
            </div>
            <div className="social-links" aria-label="Contact and profiles">
                <a href="mailto:wsai@stanford.edu">Email <span aria-hidden="true">↗</span></a>
                {contacts.map(contact => <a key={contact.name} href={contact.url}>{contact.name === 'Github' ? 'GitHub' : contact.name === 'Linkedin' ? 'LinkedIn' : contact.name} <span aria-hidden="true">↗</span></a>)}
            </div>
        </div>
        <figure className="portrait"><img src="/selfie.jpg" alt="Wensi (Vince) Ai" width="1280" height="1707" /></figure>
    </section>
}
