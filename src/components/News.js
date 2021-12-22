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
                        <li>
                            <div>{dict.date}</div>
                            <div>{dict.content}</div>
                        </li>
                    );
                }) 
            }
            </ul>
        </div>
    );
}
