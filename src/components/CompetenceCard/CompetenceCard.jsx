import React from "react";
import './competence-card.scss';
import { Button } from "../Button/Button";

export function CompetenceCard({id, href, imgSrc, title, skill, handleDelete, children}){
    return(
        <div className="competence-card--outer">
            <a href={href} target="_blank">
                <div className="competence-card">
                    <div className="competence-card__image">
                        <img src={imgSrc} alt={title} />
                    </div>
                    <div className="competence-card__title">
                        {title}
                    </div>
                    <div className="competence-card__skill">
                        Уровень владения: {skill}%
                    </div>
                    <div className="competence-card__description">
                        {children}
                    </div>
                </div>
            </a>
            <Button onClick={() => handleDelete(id)}>Удалить</Button>
        </div>  
    )
}   