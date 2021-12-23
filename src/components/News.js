import React from 'react'
import { news_en } from '../data/Info';
import "../styles/Home.css"

export default function News(props) {
    return (
        <div className="News">
            <h1 className='NewsHeader'>News</h1>
            <ul>
            {
                news_en.map(function(dict){
                    return (
                        <li className='NewsItem' key={dict.content}>
                            <strong>{dict.date}</strong>
                            <div>{dict.content}</div>
                        </li>
                    );
                }) 
            }
            </ul>
        </div>
    );
}
