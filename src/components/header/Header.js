import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";

//import scrollmagic and gsap
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap'; 

class Header extends Component {
 
   
    render() {
        return (
            <header id="header_container" className="header_container">
                <Navbar />
                <Controller>
                    <Scene
                        triggerHook= "0"
                        duration= "1700"
                    >   
                        <Tween
                            to={{y: "90vh",  scale: "1.08"}}
                        >   
                            <div className="header_bg sky"></div>
                        </Tween>
                    </Scene>
                    <Scene
                        triggerHook= "0"
                        duration= "900"
                    >   
                        <Tween
                            to={{y: "50vh", scale: "1.08"}}
                        >
                            <div className="header_bg sea"></div>
                        </Tween>
                    </Scene>
                    <Scene
                        triggerHook= "0"
                        duration= "1000"
                    >   
                        <Tween
                            to={{y: "0vh"}}
                        >
                            <div className="header_bg me"></div>
                        </Tween>
                    </Scene>
                </Controller>
                <Content />
                <Sidebar />
                <div className="header_bottom_mask"></div>
            </header>

        )
    }
}

export default Header;
