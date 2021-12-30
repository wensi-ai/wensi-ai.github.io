import React from 'react'
import { Link } from 'gatsby'
import '../styles/Navbar.css'
import { SideBar } from "./MenuBar"

const enDict = ["Home", "Research", "Projects", "Resume"];

export default function Navbar(props) {
    let Dict = enDict;

    return (
        <header className="NavBarHeader">
            <SideBar  Dict={Dict}/>
            <nav className = "NavBarWrapper">
                <div className="Spacer" />
                <div className="NavItem">
                    <ul>
                        <Link to="/">{Dict[0]}</Link>
                        <Link to="/research">{Dict[1]}</Link>
                        <Link to="/projects">{Dict[2]}</Link>
                        <a href="/Wensi_Ai_Resume.pdf">{Dict[3]}</a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
