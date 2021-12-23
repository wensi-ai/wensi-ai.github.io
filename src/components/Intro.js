import React from 'react'
import { name, short_description } from '../data/Info';
import "../styles/Home.css"

export default function Intro(props) {
    return (
        <div className="Intro">
            <h1>Hi, I'm {name}</h1>
            <div>{short_description}</div>
        </div>
    );
}
