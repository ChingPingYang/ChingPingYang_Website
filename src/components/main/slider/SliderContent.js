import React from "react";
import { Tween } from 'react-gsap';
import { Controller, Scene } from "react-scrollmagic";

const SliderContent = (props) => {
    const { slidesArray, currentSlide } = props;
    return (
        <Controller>
            <Scene
                triggerElement= "#main"
                triggerHook= "0.7"
                classToggle= {['.sliderContent_container', 'animateIn']}
            >
        <div className="sliderContent_container">
            { 
                slidesArray.map(slide => {
                    if(slide.id === currentSlide) {
                        return (
                            <Tween 
                            from={{ opacity: 0 }} 
                            duration={2}
                            ease="easeInOut"
                            key={slide.id}
                            >
                                <div className="sliderContent_mapDiv_container">
                                <Controller>
                                    <Scene
                                        triggerElement= "#main"
                                        triggerHook= "0.7"
                                        classToggle= {['.sliderContent_titleContainer', 'animateIn']}
                                    >
                                        <div className="sliderContent_titleContainer">
                                            <h3 className="sliderContent_subtitle">{slide.subtitle}</h3>
                                            <h1 className="sliderContent_title">{slide.title}</h1>
                                        </div>
                                    </Scene>

                                        <div className="sliderContent_decoration_yellow"></div>

                                    <Scene
                                        triggerElement= "#main"
                                        triggerHook= "0.7"
                                        classToggle= {['.sliderContent_description', 'animateIn']}
                                    >
                                        <p className="sliderContent_description">{slide.description}</p>
                                    </Scene>

                                    <div className="sliderContent_decoration_white"></div>
                                    <h3 className="sliderContent_roles">Roles: {slide.roles}</h3>
                                    <div className="sliderContent_btn"><a href={slide.website_url} target="_blank">View</a></div>
                                    <div className="sliderContent_numberBG" style={{backgroundImage: `url(${slide.number_url})`}}></div>
                                </Controller>
                                </div>
                            </Tween>
                        )
                    }
                })
            }
        </div>
            </Scene>
        </Controller>
    )
}

export default SliderContent;