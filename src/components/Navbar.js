import React from 'react'
import { Link } from 'gatsby'
import '../styles/Navbar.css'

export default function Navbar() {
    return <header className="site-header">
        <div className="header-inner">
            <Link className="wordmark" to="/" aria-label="Wensi Ai home">Wensi Ai</Link>
            <nav aria-label="Main navigation">
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="/research/" activeClassName="active">Research</Link>
                <Link to="/projects/" activeClassName="active">Projects</Link>
                <a href="/Wensi_Ai_CV.pdf">CV <span aria-hidden="true">↗</span></a>
            </nav>
        </div>
    </header>
}
