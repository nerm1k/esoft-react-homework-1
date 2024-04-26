import React from "react";
import './button.scss';

export function Button({onClick, children}){
    return(
        <button onClick={onClick}>{children}</button>
    )
}