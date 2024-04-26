import React, { useState } from "react";
import { Button } from "../Button/Button";
import './form.scss';


export function Form({addCompetency}){
    const [values, setValues] = useState({});

    function handleChange(e){
        const {name, value} = e.target;
        setValues({
            ...values,
            imgSrc: '/test.png',
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        addCompetency(values);
        setValues({});
    }

    return(
     <form onSubmit={handleSubmit}>
        <p>Добавление компетенций</p>
        <label htmlFor="form__title">Название компетенции</label>
        <input type="text" name="title" id="form__title" value={values.title || ""} onChange={handleChange}/>
        <label htmlFor="form__skill">Уровень владения от 0 до 100</label>
        <input type="number" name="skill" id="form__skill" value={values.skill || ""} onChange={handleChange}/>
        <label htmlFor="form__description">Описание</label>
        <textarea name="description" id="form__description" value={values.description || ""} onChange={handleChange}></textarea>
        <Button>Сохранить</Button>
     </form>   
    )
}