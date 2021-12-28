import React from 'react'

/*
    Item: A single research item
    Props: Name, Abstract, Img, 
           Links: Json [Github, Paper, Poster, Demo]
*/
export function ProjectItem (props) {
    return(
        <main className="ProjItemWrapper">
            <img src={props.props.Img} alt=""/>
            <div className="ProjWordsWrapper">
                <strong className="ProjName">{props.props.Name}</strong>
                <p className="ProjInfo">{props.props.Info}</p>
                <div className="ProjLinks">
                    {props.props.Links.map(link =>
                        <a href={Object.values(link)[0]} key={Object.keys(link)[0]}>{Object.keys(link)[0]}</a>
                    )}
                </div>
            </div>
        </main>
    );
}

export function ResearchItem (props) {
    return(
        <main className="ResearchItemWrapper">
            <img src={props.props.Img} alt=""/>
            <div className="ResearchWordsWrapper">
                <strong className="ResearchName">{props.props.Name}</strong>
                <p className="ResearchInfo">{props.props.Info}</p>
                <div className="ResearchLinks">
                    {props.props.Links.map(link =>
                        <a href={Object.values(link)[0]} key={Object.keys(link)[0]}>{Object.keys(link)[0]}</a>
                    )}
                </div>
            </div>
        </main>
    );
}