import React , { Component } from "react";
import SliderPicture from "./slider/SliderPicture";
import project1_bg from "./images/project1_bg.jpg";
import project2_bg from "./images/project2_bg.jpg";
import project3_bg from "./images/project3_bg.jpg";
import SliderContent from "./slider/SliderContent";

class Main extends Component {
    constructor(){
        super()
        this.state ={
            slides: [{
                    id: 0,
                    url: project1_bg,
                    subtitle: "JavaScript / CSS / HTML",
                    title: "GONG CHA",
                    description: "Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.",
                    roles: "Developer, UI Design, Animation"                
                },
                {
                    id: 1,
                    url: project2_bg,
                    subtitle: "JavaScript / CSS / HTML",
                    title: "SECOND PROJECT",
                    description: "Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.",
                    roles: "Developer, UI Design, Animation"                
                },
                {
                    id: 2,
                    url: project3_bg,
                    subtitle: "JavaScript / CSS / HTML",
                    title: "THIRD PROJECT",
                    description: "Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me James. Passionate at creating beautiful design content which can be interacted with users. Currently, studying front end development in Vancouver.",
                    roles: "Developer, UI Design, Animation"                
                }
            ],
            currentSlide: 0
        }    
    }

    handlePrevious = () => {
        console.log('pr')
        this.setState({
            currentSlide: this.state.currentSlide <= 0
                          ? 0
                          : this.state.currentSlide -1
        },()=>{
            console.log(this.state.currentSlide)
        })
    }

    handleNext = () => {
        this.setState({
            currentSlide: this.state.currentSlide >= this.state.slides.length - 1
                          ? this.state.slides.length - 1
                          : this.state.currentSlide + 1
        },()=>{
            console.log(this.state.currentSlide)
        })
    }

    render() {
        return(
            <main id="main" className="main_container">

                <SliderPicture slidesArray={this.state.slides} currentSlide={this.state.currentSlide}/>                
                <SliderContent slidesArray={this.state.slides} currentSlide={this.state.currentSlide}/>
                <div className="main_btn previous" onClick={this.handlePrevious}></div>
                <div className="main_btn next" onClick={this.handleNext}></div>
            </main>
        )
    }
}
export default Main;