import React from 'react'
import { contacts } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Copyright Wensi Ai @ 2022</p>
            <strong>Email: va0817@ucla.edu</strong>
            <strong>Phone: 4244027280</strong>
            <div className='ContactImg'>
                {
                    contacts.map(function(dict){
                        return <a href={dict.url}><img src={dict.img} alt={dict.name}/></a>
                    }) 
                }
            </div>
        </div>
    );
}
