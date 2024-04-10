import React from "react";
import './competence-card.scss';

export function CompetenceCard({href, imgSrc, title, children}){
    return(
        <a href={href} target="_blank">
            <div className="competence-card">
                <div className="competence-card__image">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="competence-card__title">
                    {title}
                </div>
                <div className="competence-card__description">
                    {children}
                </div>
            </div>
        </a>
        
    )
}   