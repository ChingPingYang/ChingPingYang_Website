import React from "react";
import react_logo from "./images/react_logo.svg";
import js_logo from "./images/js_logo.svg";
import html_logo from "./images/html_logo.svg";
import css_logo from "./images/css_logo.svg";

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap'; 

const Content = () => {

    return (
        <div className="content_container">
            <h2 id="subtitle" className="content_subtitle">Front-End Developer / UI & Visual Designer</h2>
            <Controller>
                <Scene                    
                    triggerElement= "#subtitle"
                    triggerHook= "0"
                    duration= "800"
                    >
                        <Timeline
                            target={
                            <h1 className="content_myName">CHING PING YANG</h1>
                            }
                        >
                        </Timeline>
                </Scene>
            </Controller>
            <div className="content_decoration"></div>
            <p className="content_about">Hi! Welcome to my website. I’m Ching-Ping Yang, you 
            can also call me James. Passionate at creating beautiful design content which can 
            be interacted with users. Currently, studying front end development in Vancouver.</p>
            <h3 className="content_specialties">SPECIALTIES</h3>
            <div className="content_specialties_logos">
                <img className="content_specialties_logos_react" src={react_logo} alt="React"/>
                <img className="content_specialties_logos_js" src={js_logo} alt="JavaScript"/>
                <img className="content_specialties_logos_html" src={html_logo} alt="HTML"/>
                <img className="content_specialties_logos_css" src={css_logo} alt="CSS"/>
            </div>
            <h3 className="content_more">MORE</h3>
            <h4 className="content_more_skills">JAVA, Node.js, Sass, Adobe XD, Figma, Illustrator, 
            Photoshope, After Effect, Premiere, C4D, MAYA</h4>

        </div>
    )
}

export default Content;