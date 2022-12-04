import React from 'react'
import { name, email, phone } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Last updated by {name} @ 12/04/2022</p>
            <strong>{email}</strong>
        </div>
    );
}
