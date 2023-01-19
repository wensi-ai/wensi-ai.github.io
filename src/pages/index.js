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
            <div className="clustrmap">
                <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=3J6uOG7w6BbV0bcsIOYUlnhVQCIg3x7DeTN92vMMjY4&cl=ffffff&w=a"></script>
            </div>
        </div>
    )
}