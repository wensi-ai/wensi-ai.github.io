import React from "react";
import { name, long_descroption, contacts, tech_stack } from "../data/Info";
import "../styles/Home.css";

export default function About() {
  return (
    <div className="Intro">
      <div className="IntroWrapper">
        <h1>Hi, I'm {name}</h1>
        <main className="About">
          <div className="IntroParagraph">{long_descroption}</div>
          <img src="/selfie.jpg" alt="selfie" />
        </main>

        <div className="ContactImg">
          {contacts.map(function (dict) {
            return (
              <a href={dict.url} key={dict.name}>
                <img src={dict.img} alt={dict.name} />
              </a>
            );
          })}
        </div>
      </div>
      <br />
    </div>
  );
}
