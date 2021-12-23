import React from 'react'
import { contacts } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Copyright Wensi Ai @ 2022</p>
            <p>Email: va0817@ucla.edu</p>
            <p>Phone: 4244027280</p>
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
