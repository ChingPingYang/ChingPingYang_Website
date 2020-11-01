import React, { Component } from "react";
import github_logo from "./images/github_logo.svg";
import linkedin_logo from "./images/linkedin_logo.svg";
import cv_logo from "./images/cv_logo.svg";
import arrow_icon from "./images/arrow.svg";
import cv_pdf from "../header/images/Resume_ChingPing-Yang.pdf";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
    };
  }

  handleOpen = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  componentDidMount() {
    setInterval(() => {
      if (window.pageYOffset > window.innerHeight / 2) {
        this.setState({
          isClicked: false,
        });
      }
    }, 250);
  }

  render() {
    return (
      <div
        className="sidebar_container"
        style={this.state.isClicked ? { right: "-47px" } : { right: "-120px" }}
      >
        <svg
          className="svg_container"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 215 310"
          width="150px"
        >
          <path
            className={this.state.isClicked ? "svg_fill_out" : "svg_fill_in"}
            strokeMiterlimit="10"
            d="M43.59 0.88L43.59 73.18 0.78 73.18 0.78 236.82 43.59 236.82 43.59 309.12 214.22 309.12 214.22 0.88 43.59 0.88z"
          ></path>
        </svg>
        <div
          className="sidebar_arrow_container"
          onClick={this.handleOpen}
          style={{
            transform: `${this.state.isClicked ? "scale(-1)" : "scale(1)"}`,
          }}
        >
          <img src={arrow_icon} alt="arrow_icon" width="17px"></img>
        </div>
        <div className="sidebar_logos_container">
          <a
            className="sidebar_logos_logo"
            href="https://github.com/ChingPingYang"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src={github_logo}
              alt="ching-ping yang github"
              width="40px"
            />{" "}
          </a>
          <a
            className="sidebar_logos_logo"
            href="https://www.linkedin.com/in/chingpingyang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src={linkedin_logo}
              alt="ching-ping yang linkedin"
              width="40px"
            />{" "}
          </a>
          <a
            className="sidebar_logos_logo"
            href={cv_pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={cv_logo} alt="ching-ping yang cv" width="40px" />{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
