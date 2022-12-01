import * as React from "react"
import Navbar from "../components/Navbar"
import News from "../components/News"
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import "../styles/index.css"

export default function Home(prpos) {
    return (
        <div className="indexWrapper">
            <title>Wensi Ai</title>
            <Navbar />
            <Intro />
            <News />
            <Footer />
        </div>
    )
}