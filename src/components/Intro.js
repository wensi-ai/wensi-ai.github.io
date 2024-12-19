import React from "react";
import { name, contacts, research_topic, research_interest } from "../data/Info";
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
                        I am currently a second year MSCS student at Stanford University, working as a research assistant advised by Prof. <a href="https://jiajunwu.com">Jiajun Wu</a> and Prof. <a href="https://profiles.stanford.edu/fei-fei-li"> Fei-Fei Li</a> at <a href="https://svl.stanford.edu">Stanford Vision and Learning Lab (SVL)</a>.
                        I received B.S. in computer science and applied mathematics at UCLA, where I worked as an undergraduate research assistant with Prof. <a href="http://www.stat.ucla.edu/~sczhu/">Song-Chun Zhu</a> at <a href="https://vcla.stat.ucla.edu/">VCLA</a>. 
                        I am generally interested in {research_topic}, with a focus on {research_interest}.
                        Besides academics, I also love to do all kinds of activities, including running, hiking, cycling, and playing the violin!
                    </div>
                    <img className="Selfie" src="/selfie.jpg" alt="selfie" />
                </main>
        </div>
        <br/>
        </div>
    );
    }
