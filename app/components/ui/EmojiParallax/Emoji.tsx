'use client'
import { useState } from 'react';
import * as React from 'react';
import './styles.css'


interface ParallaxProps {
    emoji: string;
}

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const Parallax: React.FC<ParallaxProps> = ({ emoji }) => {
    const [seed, setSeed] = useState(randomNumber(1, 10));
    const [left, setLeft] = useState(seed * 10);
    const [size, setSize] = useState(seed * 12);

    // duration in ms
    const [time, setTime] = useState((12 - seed) * 500);

    // delay in ms
    const [delay, setDelay] = useState(Math.floor(Math.random() * 100));

    const AnimationEnd = () => {
        setSeed(randomNumber(5, 10))
    };
    return (<div style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        animation: `rise ${time}ms ease-in ${delay}ms infinite`,
    }} onAnimationEnd={AnimationEnd} className="z-20 fixed bottom-0">
        <span>{emoji}</span>
    </div>
    );
};

export default Parallax;
