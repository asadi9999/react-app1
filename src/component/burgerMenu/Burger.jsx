import React from 'react'
import './burger.css'
import { useState } from 'react';
import { FaApple } from "react-icons/fa";
const Burger = () => {
    const [showburger,setShowburger]=useState('hide');
    return (
        <>
            <div className="main">
                <div className="burger">
                    <div className="burger-icon" onClick={() => setShowburger(showburger === 'show' ? 'hide' : 'show')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
                <ul className={showburger}>
                    <li><FaApple /></li>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>services</li>
                </ul>
            </div>
        </>
    )
}

export default Burger
