import React from 'react'
import { email } from '../data/Info'

export default function Footer() {
    return <footer className="site-footer">
        <span>Wensi (Vince) Ai <span className="footer-dot" aria-hidden="true">/</span> Stanford University</span>
        <span>{email}</span>
    </footer>
}
