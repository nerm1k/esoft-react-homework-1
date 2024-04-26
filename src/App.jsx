import React, { useState } from "react";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { CompetenceList } from "./components/CompetenceList/CompetenceList";
import { FutureCompetenceList } from "./components/FutureCompetenceList/FutureCompetenceList";
import { Form } from "./components/Form/Form";

const competenciesArray = [{
  href: 'https://learn.javascript.ru/',
  imgSrc: '/javascript.png',
  title: 'JavaScript',
  skill: 30,
  description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
  },{
      href: 'https://git-scm.com/',
      imgSrc: '/git.png',
      title: 'Git',
      skill: 70,
      description: 'Бесплатная распределенная система контроля версий с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов, от небольших до очень крупных.'
  },
  {
      href: 'https://sql-academy.org/ru/guide',
      imgSrc: '/sql.png',
      title: 'SQL',
      skill: 25,
      description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
  },
  {
      href: 'https://www.php.net/',
      imgSrc: '/php.png',
      title: 'PHP',
      skill: 45,
      description: 'C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.'
  },
];

function App() {
  const [competencies, setCompetencies] = useState(competenciesArray);

  function addCompetency(values){
    setCompetencies([...competencies, values]);
  }

  return (
    <>
        <ProfileCard />
        <CompetenceList competenciesArray={competencies} handleEdit={setCompetencies}/>
        <Form addCompetency={addCompetency}/>
        <FutureCompetenceList />
    </>
  )
}

export default App
