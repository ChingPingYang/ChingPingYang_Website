import project1_bg from "./images/project1_bg.jpg";
import project2_bg from "./images/project2_bg.jpg";
import project3_bg from "./images/project3_bg.jpg";
import project1_number from "./images/project1_number.svg"
import project2_number from "./images/project2_number.svg"
import project3_number from "./images/project3_number.svg"
import project4_number from "./images/project4_number.svg"
import project5_number from "./images/project5_number.svg"

export const data = {
    slides: [{
        id: 0,
        url: project1_bg,
        number_url: project1_number,
        website_url: "https://eager-volhard-bd9102.netlify.com",
        subtitle: "HTML / CSS",
        title: "GONG CHA",
        description: `GONG CHA is a school project which was done by a small group of people (three people including me) in 4 days. 
                      The instruction was to make a mockup website for whichever existing brand with HTML and CSS, and no JavaScript is allowed. 
                      In this project I played two roles, designer and developer. I had one day to design the entire website and the rest of 
                      days to develop the Hero and Feature sections.`,
        roles: "Developer, UI Design, Animation"                
    },
    {
        id: 1,
        url: project2_bg,
        number_url: project2_number,
        website_url: "https://nostalgic-joliot-05ad64.netlify.com",
        subtitle: "JavaScript / CSS / HTML",
        title: "HIDING FROM BALLS",
        description: `A small game I made for practicing logic in JavaScript. The game starts with a small green ball which 
                      the player can move around in the game board. In the meantime there will be few other balls moving randomly in the game 
                      area to try to kill the player. Random balls will increase as time goes, but the player also has chance to deny the auto-generated
                      balls when it turns red.`,
        roles: "Developer, Animation"                
    },
    {
        id: 2,
        url: project3_bg,
        number_url: project3_number,
        website_url: "https://vigorous-visvesvaraya-70500e.netlify.com/",
        subtitle: "React.js / HTML / CSS",
        title: "BRICKHOUSE VENTURES",
        description: `The website is a school project which is made for a real existing Vancouver based company called Brickhouse Ventures.
                      In this project I developed About and Partners sections according to client's needs. I also implemented Gsap and Scrollmagic
                      libraries to create fade-in animation.`,
        roles: "Developer, Animation"                
    }
    ]

}