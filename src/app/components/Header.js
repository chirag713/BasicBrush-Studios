// components/Header.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../Assets/logo.png";
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
    const [navActive, setNavActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavToggle = () => setNavActive(!navActive);

    return (
        <>
            <header id="header" className={scrolling ? "scrolling" : 'normal'}>
                <a href="#">
                    <Image className='logo' src={logo}
                        alt='BasicBrush Studios Logo' />
                </a>
                <div>
                    <ul id="navbar" className={navActive ? "active" : ''}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Clients</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <a href="#" onClick={handleNavToggle} id="close"><IoIosClose /></a>
                    </ul>
                </div>
                <div id="mobile">
                    <i><HiBars3 id="bar" onClick={handleNavToggle} /></i>
                </div>
            </header>
        </>
    );
};

export default Header;
