import React from 'react'
import { long_descroption } from '../data/Info'
import "../styles/Home.css"

export default function About() {
    return (
        <div className='About'>
            <h1>About me</h1>
            <div>{long_descroption}</div>
        </div>
    )
}
