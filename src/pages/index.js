import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'

export default function Home() {
    return <Layout>
        <Intro />
        <div className="clustrmap"><script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=3J6uOG7w6BbV0bcsIOYUlnhVQCIg3x7DeTN92vMMjY4&cl=ffffff&w=a" /></div>
    </Layout>
}
export const Head = () => <><title>Wensi (Vince) Ai — Robot Learning</title><meta name="description" content="Wensi (Vince) Ai is a Computer Science PhD student at Stanford researching robot learning, simulation, imitation learning, and human data." /></>
