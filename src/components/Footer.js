import React from 'react'
import { name, email } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Last updated by {name} @ 8/9/2024</p>
            <strong>{email}</strong>
        </div>
    );
}
