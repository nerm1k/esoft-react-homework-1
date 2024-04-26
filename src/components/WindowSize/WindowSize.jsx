import React, { useEffect, useState } from "react";
import './window-size.scss';

export function WindowSize(){
    const [currentWindowSize, setCurrentWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResizeWindow(){
            setCurrentWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        
        window.addEventListener("resize", handleResizeWindow);
        
        return () => {
            console.log('q')
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, [])

    return(
        <div className="current-window-size">
            <p className="current-width">Ширина: {currentWindowSize.width}</p>
            <p className="current-height">Высота: {currentWindowSize.height}</p>
        </div>
    )
}