import React from "react";
import './parallexsection.css'


function Parallexsection(props){
    return(
        <div className="parallex"> 
            <h1>{props.heading}</h1>
            <div id="navigate">
            <h3>Home</h3>
            <h3 id="arrow">→</h3>
            <h3>{props.heading2}</h3>
            </div>
            <p>{props.description}</p>
        
        </div>

    )
}

export default Parallexsection;