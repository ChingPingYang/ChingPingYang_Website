import React from "react";

const SliderContent = (props) => {
    const { slidesArray, currentSlide } = props;
    return (       
        <div className="sliderContent_container">
            { 
                slidesArray.map(slide => {
                    if(slide.id === currentSlide) {
                        return (
                            <>
                            <div className="sliderContent_titleContainer">
                                <h3 className="sliderContent_subtitle">{slide.subtitle}</h3>
                                <h1 className="sliderContent_title">{slide.title}</h1>
                            </div>
                            <div className="sliderContent_decoration_yellow"></div>
                            <p className="sliderContent_description">{slide.description}</p>
                            <div className="sliderContent_decoration_white"></div>
                            <h3 className="sliderContent_roles">Roles: {slide.roles}</h3>
                            </>
                        )
                    }
                })
            
            }
        </div>
    )
}

export default SliderContent;