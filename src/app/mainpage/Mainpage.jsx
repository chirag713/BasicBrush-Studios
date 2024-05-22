"use client";
import React from 'react'

import Services from '../components/Services';
import TypeWriter from '../components/TypeWriter';
import "./Mainpage.css";
import Image from 'next/image';
import logo from "../Assets/logo.png";
import insta from "../Assets/instagram.png";
import linkdien from "../Assets/linkdien.png"


const text = "Welcome to BasicBrush Studios, Your premier partner in story telling and brand elevation. Our passion-filled team specializes in crafting campaigns that delivers tangible results. With expertise in Social media management, web management, and Business management, we ensure that your brand's story resonates deeply with your audience, exceeding expectations and driving growth. Join us on this journey of creativity and success.";

const Mainpage = () => {
    
    return (
        <div>
            <div className="front">
                <div className="main">
                    <div className="firsttext">BASICBRUSH STUDIOS</div>
                    <div className="secondtext">WELCOME TO BASICBRUSH STUDIOS</div>
                    <div className="thirdtext">YOUR BRAND, OUR VOICE</div>
                    <div className="forthtext">BUILDING DIGITAL SUCCESS TOGETHER</div>
                </div>
                <div className="image">
                    <Image  src={logo}
                        alt='BasicBrush Studios Logo' />
                </div>
            </div>
            <div className="about">
                <div className="heading">ABOUT US</div>
                <div className="content1">
                    <TypeWriter text={text} />
                </div>
                <div className="links">
                    <div className="links1">
                        <a href="https://www.instagram.com/basicbrush_studios/">
                        <Image  src={insta}
                        alt='insta logo' />
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="links2">
                        <a href="https://www.linkedin.com/company/basicbrush-studios/">
                        <Image  src={linkdien}
                        alt='Linkdein logo' />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
            <Services />
        </div>
    )
}

export default Mainpage
