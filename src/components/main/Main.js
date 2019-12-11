import React , { Component } from "react";
import SliderContent from "./slider/SliderContent";
import SliderPicture from "./slider/SliderPicture";
import {data} from "./data";
import { ReactComponent as PreviousIcon } from '../main/images/btn.svg';

class Main extends Component {
    constructor(){
        super()
        this.state ={
            slides: data.slides,
            currentSlide: 0
        }    
    }

    handlePrevious = () => {
        this.setState({
            currentSlide: this.state.currentSlide <= 0
                          ? 0
                          : this.state.currentSlide -1
        })
    }

    handleNext = () => {
        this.setState({
            currentSlide: this.state.currentSlide >= this.state.slides.length - 1
                          ? this.state.slides.length - 1
                          : this.state.currentSlide + 1
        })
    }


    render() {
        return(
            <main id="main" className="main_container">
                <SliderPicture slidesArray={this.state.slides} currentSlide={this.state.currentSlide}/>                
                <SliderContent slidesArray={this.state.slides} currentSlide={this.state.currentSlide}/>
                 
                <PreviousIcon onClick={this.handlePrevious}/>
                <PreviousIcon className="next" onClick={this.handleNext}/>
                
            </main>
        )
    }
}
export default Main;