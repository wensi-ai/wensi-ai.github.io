import React, { useState } from 'react'
import { Link } from  'gatsby';
import "../styles/NavBar.css"

function BackDrop(props) {
    let conditionalName= props.isOpen ? "BackDropOpen" : "BackDrop"
    return (
        <div className={conditionalName} onClick={()=>{
            if (props.isOpen) props.setOpen(!props.isOpen)
        }}></div>
    );
}

export function SideBar(props) {
    const [isOpen, setOpen] = useState(false)
    let conditionalName = isOpen ? "SideBar open" : "SideBar";

    return(
        <div>
            <button className="MenuBtn" onClick={()=>setOpen(!isOpen)}>
            </button>
            <BackDrop isOpen={isOpen} setOpen={setOpen}/>
            <nav className={conditionalName}>
                <ul>
                    <Link to="/" onClick={() => setOpen(!isOpen)}>{props.Dict[0]}</Link>
                    <Link to="/research" onClick={() => setOpen(!isOpen)}>{props.Dict[1]}</Link>
                    <Link to="/projects" onClick={() => setOpen(!isOpen)}>{props.Dict[2]}</Link>
                    <a href="/Wensi_Ai_Resume.pdf" onClick={() => setOpen(!isOpen)}>{props.Dict[3]}</a>
                </ul>
            </nav>
        </div>
    )
}