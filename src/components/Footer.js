import React from 'react'
import { name, email, phone } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Last updated by {name} @ 11/24/2022</p>
            <strong>{email}</strong>
            <strong>{phone}</strong>
        </div>
    );
}
