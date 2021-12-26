import * as React from "react"
import Navbar from "../components/Navbar"
import Intro from "../components/Intro"
import News from "../components/News"
import About from "../components/About"
import Footer from "../components/Footer"
import "../styles/index.css"

export default function Home(prpos) {
    return (
        <div className="indexWrapper">
            <Navbar />
            <Intro />
            <About />
            <News />
            <Footer />
        </div>
    )
}