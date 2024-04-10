import React from "react";
import { CompetenceCard } from "./CompetenceCard";
import './competence-list.scss';

const competenciesArray = [{
    href: 'https://learn.javascript.ru/',
    imgSrc: '/javascript.png',
    title: 'JavaScript',
    descriprion: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
    },{
        href: 'https://git-scm.com/',
        imgSrc: '/git.png',
        title: 'Git',
        descriprion: 'Бесплатная распределенная система контроля версий с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов, от небольших до очень крупных.'
    },
    {
        href: 'https://sql-academy.org/ru/guide',
        imgSrc: '/sql.png',
        title: 'SQL',
        descriprion: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
    },
    {
        href: 'https://www.php.net/',
        imgSrc: '/php.png',
        title: 'PHP',
        descriprion: 'C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.'
    },
];

export function CompetenceList(){
    return(
        <div className="competencies">
            <p>Мои компетенции</p>
            <div className="competencies__container">
                {competenciesArray.map((competency) => {
                    return <CompetenceCard href={competency.href} imgSrc={competency.imgSrc} title={competency.title}>
                        {competency.descriprion}
                    </CompetenceCard>
                })}
            </div>
        </div>
    )
}