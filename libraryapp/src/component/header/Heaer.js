import React from 'react';
import './header.css';


function Header(){
    return (
        <header className="header">
            <img src="logo.png" alt="Logo" className="logo" />
            <nav>
                <ul className="ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header ;