import React from 'react'
import Navbar from './Navbar'
import '../styles/index.css'

export default function Layout({ children }) {
    return <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="page-content">{children}</main>
    </div>
}
