import React from "react";
import './profile-card.scss';

export function ProfileCard(){
    return(
        <div className="card">
            <div className="card__background"></div>
            <div className="card__info">
                <div className="card__info__photo">
                    <img src="/me.jpg" alt="Roman Boyko"/>
                </div>
                <div className="card__info__name">
                    Бойко Роман Олегович
                </div>
                <div className="card__info__status">
                    Ученик ШП ESOFT
                </div>
                <div className="card__info__links">
                    <a href="https://twitter.com/nerm1k" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
                    <a href="https://www.instagram.com/nerm1k/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://vk.com/nermi" target="_blank"><i className="fa-brands fa-vk"></i></a>
                    <a href="https://github.com/nerm1k" target="_blank"><i className="fa-brands fa-square-github"></i></a>        
                </div>
            </div>
        </div>
    )
}