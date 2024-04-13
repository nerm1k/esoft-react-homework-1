import React, {useState} from "react";
import { FutureCompetenceCard } from "../FutureCompetenceCard/FutureCompetenceCard";
import { Button } from "../Button/Button";
import './future-competence-list.scss';

const futureCompetenciesArray = [{
    title: 'React',
    imgSrc: '/react.png',
    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
},
{
    title: 'TypeScript',
    imgSrc: '/typescript.png',
    description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#.'
},{
    title: 'Backend Node.js',
    imgSrc: '/nodejs.png',
    description: 'Среда выполнения кода JavaScript вне браузера, которая позволяет писать серверный код для веб-страниц и веб-приложений, а также для программ командной строки.'
},{
    title: 'Docker',
    imgSrc: '/docker.png',
    description: 'Программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации, контейнеризатор приложений.'
},{
    title: 'PostgreSQL',
    imgSrc: '/postgresql.png',
    description: 'Свободная объектно-реляционная система управления базами данных. Существует в реализациях для множества UNIX-подобных платформ, включая AIX, различные BSD-системы, HP-UX, IRIX, Linux, macOS, Solaris/OpenSolaris, Tru64, QNX, а также для Microsoft Windows.'
},{
    title: 'REST API',
    imgSrc: '/rest.png',
    description: 'Архитектурный стиль взаимодействия компонентов распределённого приложения в сети. Другими словами, REST — это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать.'
},{
    title: 'React Native',
    imgSrc: '/reactnative.png',
    description: 'Кроссплатформенный фреймворк с открытым исходным кодом для разработки нативных мобильных и настольных приложений на JavaScript и TypeScript, созданный Facebook, Inc.'
},{
    title: 'Vue.js',
    imgSrc: '/vue.png',
    description: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.'
},{
    title: 'Angular',
    imgSrc: '/angular.png',
    description: 'Открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний. Angular — полностью переписанный фреймворк от той же команды, которая написала AngularJS.'
},{
    title: 'Flutter',
    imgSrc: '/flutter.jpg',
    description: 'Комплект средств разработки и фреймворк с открытым исходным кодом для создания мобильных приложений под Android и iOS, веб-приложений, а также настольных приложений под Windows, macOS и Linux с использованием языка программирования Dart, разработанный и развиваемый корпорацией Google.'
}]

export function FutureCompetenceList(){
    const [isShown, setIsShown] = useState(true);

    function changeIsShown(){
        setIsShown(prev => !prev);
    }

    return(
        <div className="future-competencies">
            <div className="future-competencies__header">
                <div></div>
                <p>Компетенции, которые я бы хотел изучить</p>
                <Button onClick={changeIsShown}>
                    {isShown ? "Скрыть" : "Показать"}
                </Button>
            </div>
            <div className={isShown ? "future-competencies__container" : "future-competencies__container hidden"}>
                {futureCompetenciesArray.map((futureCompetence, i) => {
                    return <FutureCompetenceCard key={i} title={futureCompetence.title} imgSrc={futureCompetence.imgSrc}>{futureCompetence.description}</FutureCompetenceCard>
                })}
            </div>
        </div>
    )
}