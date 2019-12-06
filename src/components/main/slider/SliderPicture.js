import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const SliderPicture = (props) => {
    const { slidesArray, currentSlide } = props;
    
    return(
        <Controller>
            <Scene
                triggerElement= "#main"
                triggerHook= "0.7"
                classToggle= {['.sliderPicture_container', 'animateIn']}
            >
                <div className="sliderPicture_container">
                    <div className="sliderPicture_rowOfPictures" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                        {
                            slidesArray.map((slide, index) => {
                                console.log(slide.url)
                                return (
                                    <div key={index} 
                                        className={ `${slide.id === currentSlide ? "sliderPicture_picture currentSlide" : "sliderPicture_picture"}` } 
                                        style={{backgroundImage: `url(${slide.url})`}}>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="sliderPicture_mask top"></div>
                    <div className="sliderPicture_mask right"></div>
                </div>
            </Scene>
        </Controller>
    )
}

export default SliderPicture