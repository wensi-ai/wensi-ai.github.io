import React from 'react'
import { name, email, phone, contacts } from "../data/Info"
import "../styles/Home.css"

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>Copyright {name} @ 2022</p>
            <strong>{email}</strong>
            <strong>{phone}</strong>
            <div className='ContactImg'>
                {
                    contacts.map(function(dict){
                        return <a href={dict.url} key={dict.name}><img src={dict.img} alt={dict.name}/></a>
                    }) 
                }
            </div>
        </div>
    );
}
