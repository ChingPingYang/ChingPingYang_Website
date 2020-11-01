import project1_bg from "./images/project1_bg.png";
import project2_bg from "./images/project2_bg.jpg";
import project3_bg from "./images/project3_bg.jpg";
import project4_bg from "./images/project4_bg.jpg";
import project5_bg from "./images/project5_bg.jpg";
import project1_number from "./images/project1_number.svg";
import project2_number from "./images/project2_number.svg";
import project3_number from "./images/project3_number.svg";
import project4_number from "./images/project4_number.svg";
import project5_number from "./images/project5_number.svg";

export const data = {
  slides: [
    // {
    //     id: 0,
    //     url: project1_bg,
    //     number_url: project1_number,
    //     website_url: "https://vigorous-visvesvaraya-70500e.netlify.com/",
    //     subtitle: "React.js / HTML / CSS",
    //     title: "BRICKHOUSE VENTURES",
    //     description: `This website is built for a Vancouver based company called Brickhouse Ventures.
    //                   In this project, I developed the About and Partners sections according to the client's needs. I also implemented GSAP and Scrollmagic
    //                   libraries to create fade-in animation.`,
    //     roles: "Developer, Animation"
    // },
    {
      id: 0,
      url: project1_bg,
      number_url: project1_number,
      website_url: "https://www.chingpingyang.club/",
      subtitle: "NERN Stack / DigitalOcean / Styled-Components",
      title: "Full Stack eCOMMERCE",
      description: `After some self-study and practice, I decided to make a web application with MERN stack and implement payment gateway (Braintree Sandbox) to it.
                      And for the deployment, I chose DigitalOcean as my cloud service.
                      In this project, users can search for any book they like through the filter system. Users can also register and log-in to pay the order. 
                      For admin, we can create new categories and products to the database (please email me for the admin account).`,
      roles: "Full Stack Development, UI Design",
    },
    {
      id: 1,
      url: project2_bg,
      number_url: project2_number,
      website_url: "https://intense-temple-41335.herokuapp.com/",
      subtitle: "React.js / Node.js / Express.js / MongoDB Atlas",
      title: "Developer Connector",
      description: `This project is based on an online course taught by Brad Traversy. I learned to develop a React app from front-end to back-end and
                      understand the use of Redux. Although it's not my own project, I've learned a lot from it and tried to implement my own action in it.`,
      roles: "Developer, UI Design, Animation",
    },
    {
      id: 2,
      url: project3_bg,
      number_url: project3_number,
      website_url: "https://riddles-app-james.herokuapp.com/",
      subtitle: "Node.js / Express.js / MongoDB Atlas / EJS / Sass",
      title: "Riddles!",
      description: `Riddles is a full-stack web app built on Node.js. We use EJS template to render the view and store data in MongoDB Atlas. 
                      In this project, I was in charge of the whole design, front-end/back-end of the landing page, the agree/disagree functions 
                      of the comment section, and finally the deployment by using Heroku.`,
      roles: "Developer, UI Design, Animation",
    },
    {
      id: 3,
      url: project4_bg,
      number_url: project4_number,
      website_url: "https://eager-volhard-bd9102.netlify.com",
      subtitle: "HTML / CSS",
      title: "Gong Cha",
      description: `GONG CHA is a school project which was done by a small group of people (three people including me) in 4 days. 
        The instruction was to make a mockup website for whichever existing brand with HTML and CSS, and no JavaScript is allowed. 
        In this project, I played two roles, designer and developer. I had one day to design the entire website and the rest of the
        days to develop the Hero and Feature sections.`,
      roles: "Developer, UI Design, Animation",
    },
    {
      id: 4,
      url: project5_bg,
      number_url: project5_number,
      website_url: "https://nostalgic-joliot-05ad64.netlify.com",
      subtitle: "JavaScript / CSS / HTML",
      title: "Hiding From Balls",
      description: `A small game I made for practicing logic in JavaScript. The game starts with a small green ball in which the player can move 
                      around on the game board. In the meantime, there will be few other balls moving randomly in the game area to try to kill the 
                      player. Random balls will increase as time goes, but the player also has the chance to deny the auto-generated balls when it 
                      turns red.`,
      roles: "Developer, Animation",
    },
  ],
};
