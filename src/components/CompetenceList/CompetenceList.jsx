import React, { useState } from "react";
import { CompetenceCard } from "../CompetenceCard/CompetenceCard";
import { Button } from "../Button/Button";
import './competence-list.scss';


export function CompetenceList({competenciesArray, handleEdit}){
    const [isShown, setIsShown] = useState(true);
    const [showHighSkill, setShowHighSkill] = useState(false);
    const [showLowSkill, setShowLowSkill] = useState(false);

    function changeIsShown(){
        setIsShown(prev => !prev);
    }

    function showSkillAbove50(){
        showLowSkill && setShowLowSkill(prev => !prev);
        setShowHighSkill(prev => !prev);
    }

    function showSkillBelow50(){
        showHighSkill && setShowHighSkill(prev => !prev);
        setShowLowSkill(prev => !prev);
    }

    function deleteCompetency(i){
        const newCompetenciesArray = competenciesArray.filter((_, index) => i != index);
        handleEdit(newCompetenciesArray);
    }

    return(
        <div className="competencies">
            <div className="competencies__header">
                <div></div>
                <p>Мои компетенции</p>
                <div className="competencies__header__buttons">
                <Button onClick={showSkillBelow50}>
                    {showLowSkill ? "Все" : "Уровень скилла <50%"}
                </Button>
                <Button onClick={showSkillAbove50}>
                    {showHighSkill ? "Все" : "Уровень скилла >50%"}
                </Button>
                <Button onClick={changeIsShown}>
                    {isShown ? "Скрыть" : "Показать"}
                </Button>
                </div>
            </div>
            <div className={isShown ? "competencies__container" : "competencies__container hidden"}>
                {showHighSkill ? 
                    competenciesArray.map((competency, i) => {
                        if (competency.skill > 50){
                            return <CompetenceCard key={i} id={i} href={competency.href} imgSrc={competency.imgSrc} title={competency.title} skill={competency.skill} handleDelete={deleteCompetency}>
                            {competency.description}
                        </CompetenceCard>
                        }
                    }) : showLowSkill ? 
                            competenciesArray.map((competency, i) => {
                                if (competency.skill < 50){
                                    return <CompetenceCard key={i} id={i} href={competency.href} imgSrc={competency.imgSrc} title={competency.title} skill={competency.skill} handleDelete={deleteCompetency}>
                                    {competency.description}
                                </CompetenceCard>
                                }
                            }) : competenciesArray.map((competency, i) => {
                                    return <CompetenceCard key={i} id={i} href={competency.href} imgSrc={competency.imgSrc} title={competency.title} skill={competency.skill} handleDelete={deleteCompetency}>
                                        {competency.description}
                                    </CompetenceCard>
                                    }
                                )
                }
                
            </div>
        </div>
    )
}