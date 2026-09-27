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
        <h1 className="content_myName">CHINGPING YANG</h1>
        <div className="content_decoration"></div>
        <p className="content_about">
          Full-stack developer with 5+ years of experience, primarily focused on front-end development. I work with React, Backbone.js, and PHP (Symfony), building and maintaining production systems backed by MySQL.
        </p>
        {/* <h3 className="content_specialties">SPECIALTIES</h3>
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
        </div> */}
        <h3 className="content_more">Tech stack:</h3>
        <h4 className="content_more_skills">
          JavaScript, Backbone.js, React, PHP (Symfony), MySQL, AWS
        </h4>
      </div>
    </div>
  );
};

export default Content;
