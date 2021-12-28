import React from 'react'
import { long_descroption, tech_stack } from '../data/Info'
import "../styles/Home.css"

export default function About() {
    return (
        <div className='About'>
            <h1>About me</h1>
            <main className='AboutWrapper'>
                <div className='AboutParagraph'>{long_descroption}</div>
                <img src='/selfie.jpg' alt='selfie' />
            </main>
            <br />
            <h2>Here are some of my tech stack:</h2>
            <div className='TechStack'>{ tech_stack.map(item => <p key={item}>{item}</p>) }</div>
        </div>
    )
}
