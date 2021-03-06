import React from "react";
import react_logo from "./images/react_logo.svg";
import js_logo from "./images/js_logo.svg";
import nodeJS_logo from "./images/nodeJS_logo.svg";
import Sass_logo from "./images/Sass_logo.svg";

const Content = () => {
  return (
    <div className="content_container">
      <div className="content_mask">
        <h2 id="subtitle" className="content_subtitle">
          Front-End / Full-Stack Developer
        </h2>
        <h1 className="content_myName">CHING PING YANG</h1>
        <div className="content_decoration"></div>
        <p className="content_about">
          Hi! Welcome to my website. I’m Ching-Ping Yang, you can also call me
          James. Passionate about creating beautiful design content and
          implementing into real-life websites. Currently working in Vancouver.
        </p>
        <h3 className="content_specialties">SPECIALTIES</h3>
        <div className="content_specialties_logos">
          <img
            className="content_specialties_logos_react"
            src={react_logo}
            alt="React"
          />
          <img
            className="content_specialties_logos_js"
            src={js_logo}
            alt="JavaScript"
          />
          <img
            className="content_specialties_logos_html"
            src={nodeJS_logo}
            alt="HTML"
          />
          <img
            className="content_specialties_logos_css"
            src={Sass_logo}
            alt="CSS"
          />
        </div>
        <h3 className="content_more">MORE</h3>
        <h4 className="content_more_skills">
          Next.js, Gatsby.js, Material-UI, TypeScript, RESTful API, GraphQL,
          MongoDB, Express, PostgreSQL, JAVA, Adobe XD, Figma
        </h4>
      </div>
    </div>
  );
};

export default Content;
