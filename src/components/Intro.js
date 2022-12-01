import React from 'react'
import { name, long_descroption, contacts, tech_stack } from '../data/Info'
import "../styles/Home.css"

export default function About() {
    return (
        <div className='Intro'>
            <div className="IntroWrapper">
                <main className="About">
                    <h1>Hi, I'm {name}</h1>
                    <div className='IntroParagraph'>{long_descroption}</div>
                    <div className='ContactImg'>
                        {
                            contacts.map(function(dict){
                                return <a href={dict.url} key={dict.name}><img src={dict.img} alt={dict.name}/></a>
                            }) 
                        }
                    </div>
                </main>
                <img src='/selfie.jpg' alt='selfie' />
            </div>
            <br />
        </div>
    )
}
