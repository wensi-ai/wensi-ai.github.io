import React from 'react'
import { name, email } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Last updated by {name} @ 10/23/2023</p>
            <strong>{email}</strong>
        </div>
    );
}
