import React from 'react'
import Navbar from '../../components/Navbar'
import { ResearchItem } from "../../components/Item"
import { research_en } from '../../data/Data'
import "../../styles/research.css"

export default function Research() {
    return (
        <div>
            <title>Research</title>
            <Navbar />
            <h1 className='ResearchTitle'>Research</h1>
            <div className='ResearchWrapper'>
                {
                    research_en.map(function(props){
                        return (
                            <ResearchItem className='ResearchItem' props={props} key={props.Name} />
                        );
                    }) 
                }
            </div>
        </div>
    )
}