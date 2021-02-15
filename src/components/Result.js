import React from 'react';
import "./Results.css";

function Result( { title, website, description }) {
    return (
        <a href={website}>
            <p className="result__title">{title}</p>
            <p className="result__website">{website}</p>
            <p className="result__description">{description}</p>
            
        </a>
    )
}

export default Result
