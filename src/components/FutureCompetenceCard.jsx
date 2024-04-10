import React from "react";
import './future-competence-card.scss';

export function FutureCompetenceCard({imgSrc, title, children}){
    return(
        <div className="future-competence-card">
            <div className="future-competence-card__image">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="future-competence-card__info">
                <div className="future-competence-card__info__title">
                    {title}
                </div>
                <div className="future-competence-card__info__description">
                    {children}
                </div>
            </div>
        </div>
    )
}