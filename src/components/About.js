import React from 'react'
import { long_descroption, tech_stack } from '../data/Info'
import "../styles/Home.css"

export default function About() {
    return (
        <div className='About'>
            <h1>About me</h1>
            <div>{long_descroption}</div>
            <h2>Some of my tech stack:</h2>
            <div className='TechStack'>{ tech_stack.map(item => <p>{item}</p>) }</div>
        </div>
    )
}
