import React from 'react'
import Navbar from '../../components/Navbar'
import Item from "../../components/Item"
import { proj_en } from '../../data/Data'

export default function Projects() {
    return (
        <div>
            <Navbar />
            <div className='ProjectsWrapper'>
                {
                    proj_en.map(function(props){
                        return (
                            <Item className='ProjItem' props={props} />
                        );
                    }) 
                }
            </div>
        </div>
    )
}
