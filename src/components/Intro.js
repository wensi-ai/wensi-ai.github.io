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
                        <div>
                            I am a CS PhD student at Stanford University advised by Prof. <a href="https://profiles.stanford.edu/fei-fei-li"> Fei-Fei Li</a> as part of the <a href="https://svl.stanford.edu">Stanford Vision and Learning Lab (SVL)</a>. I am generally interested in {research_topic}, with a focus on {research_interest}.
                        </div>
                        <br/>
                        <div>
                            Previously, I received M.S. in Computer Science from Stanford University, and B.S. in Computer Science and Applied Math from UCLA. 
                            I was fortunate to have worked with Prof. <a href="https://jiajunwu.com">Jiajun Wu</a> and Prof. <a href="http://www.stat.ucla.edu/~ywu/">Ying-Nian Wu</a>. 
                        </div>
                    </div>
                    <img className="Selfie" src="/selfie.jpg" alt="selfie" />
                </main>
        </div>
        <br/>
        </div>
    );
    }
