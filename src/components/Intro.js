import React from "react";
import { name, contacts, research_interest } from "../data/Info";
import "../styles/Home.css";

export default function About() {
    return (
        <div className="Intro">
            <div className="IntroWrapper">
                <h1>Hi, I'm {name}</h1>
                <div className="ContactImg">
                    {contacts.map(function (dict) {
                        return (
                        <a href={dict.url} key={dict.name}>
                            <img src={dict.img} alt={dict.name} />
                        </a>
                        );
                    })}
                </div>
                <main className="About">
                    <div className="AboutParagraph">
                        I am Wensi (Vince) Ai, a senior CS & Applied Mathematics undergraduate at UCLA. 
                        I am currently working as a research assistant under Prof. <a href="https://jiajunwu.com">Jiajun Wu</a> at <a href="https://svl.stanford.edu">Stanford Vision and Learning Lab (SVL)</a>.
                        Previously I worked as an undergraduate research assistant under Prof. <a href="http://www.stat.ucla.edu/~sczhu/">Song-Chun Wu</a> and Prof. <a href="http://www.stat.ucla.edu/~ywu/">Ying Nian Wu</a> at <a href="https://vcla.stat.ucla.edu/">Center for Vision, Cognition, Learning, and Autonomy (VCLA)</a>.
                        I've also been fortunate to work as a SWE intern at <a href="https://www.metabit-trading.com">Metabit Trading</a>. 
                        I am broadly interested in computer graphics, vision, and robotics, with a special interest in {research_interest}.
                        Besides academics, I also love to do all kinds of activities, including running, hiking, cycling, and playing the violin.
                    </div>
                    <img className="Selfie" src="/selfie.jpg" alt="selfie" />
                </main>
        </div>
        <br />
        </div>
    );
    }
