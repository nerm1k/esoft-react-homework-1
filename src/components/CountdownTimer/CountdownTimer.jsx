import React, { useEffect, useState } from "react";
import './countdown-timer.scss';

export function CountdownTimer(){
    const [currentTime, setCurrentTime] = useState(10);

    useEffect(() => {
        const timerId = setInterval(() => setCurrentTime(prevTime => prevTime - 1), 1000);
        if (currentTime == 0){
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [currentTime])

    return (
        <div className="timer">
            <h3 className="timer__title">
                Таймер
            </h3>
            <p className="timer__time">
                {currentTime}
            </p>
        </div>
    )
}