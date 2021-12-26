import React from 'react'
import Navbar from '../../components/Navbar'
import Item from "../../components/Item"
import { research_en } from '../../data/Data'

export default function Research() {
    return (
        <div>
            <Navbar />
            <div className='ResearchWrapper'>
                {
                    research_en.map(function(props){
                        return (
                            <Item className='ResearchItem' props={props} />
                        );
                    }) 
                }
            </div>
        </div>
    )
}