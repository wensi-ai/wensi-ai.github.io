import React from 'react'
import Navbar from '../../components/Navbar'
import { ProjectItem } from "../../components/Item"
import { proj_en } from '../../data/Data'
import "../../styles/projects.css"

export default function Projects() {
    return (
        <div>
            <title>Projects</title>
            <Navbar />
            <h1 className='ProjectsTitle'>Projects</h1>
            <div className='ProjectsWrapper'>
                {
                    proj_en.map(function(props){
                        return (
                            <ProjectItem className='ProjItem' props={props} key={props.Name} />
                        );
                    }) 
                }
            </div>
        </div>
    )
}
