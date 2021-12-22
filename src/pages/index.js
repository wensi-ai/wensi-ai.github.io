import * as React from "react"
import Navbar from "../components/Navbar"
import Intro from "../components/Intro"
import News from "../components/News"
import Footer from "../components/Footer"

export default function Home(prpos) {
    return (
        <div>
            <Navbar />
            <Intro />
            <News />
            <Footer />
        </div>
    )
}