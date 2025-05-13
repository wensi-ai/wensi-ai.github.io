import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { ResearchItem } from "../../components/Item"
import { research_en } from '../../data/Data'
import "../../styles/research.css"

export default function Research() {
    const [isSelected, setSelected] = useState(false)
    
    return (
        <div>
            <title>Research</title>
            <Navbar />
            <h1 className='ResearchTitle'>Research</h1>
            <div className='ResearchSelection'>
                <button className='ResearchButton' id='active_research_button' onMouseUp={()=>{
                    setSelected(false);
                    const research_buttons = document.querySelectorAll('.ResearchButton');
                    research_buttons[0].id = 'active_research_button';
                    research_buttons[1].id = 'inactive_research_button';
                }}>
                    Show All
                </button> 
                |
                <button className='ResearchButton' id='inactive_research_button' onMouseUp={()=>{
                    setSelected(true);
                    const research_buttons = document.querySelectorAll('.ResearchButton');
                    research_buttons[1].id = 'active_research_button';
                    research_buttons[0].id = 'inactive_research_button';
                }}>
                   Show Selected
                </button>
            </div>
            <div className='ResearchWrapper'>
                {
                    research_en.map(function(props){
                        // Only return if props.selected is true
                        if (isSelected && props.Selected === false) {
                            return null;
                        }
                        return (
                            <ResearchItem className='ResearchItem' props={props} key={props.Name} />
                        );
                    }) 
                }
            </div>
        </div>
    )
}