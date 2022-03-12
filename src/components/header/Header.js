import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";
class Header extends Component {
    render() {
        return (
            <header id="header_container" className="header_container">
                <Navbar /> 
                <div className="header_bg sea"></div>
                <div className="header_bg me"></div>
                <Content />
                <Sidebar />
                <div className="header_bottom_mask"></div>
            </header>

        )
    }
}

export default Header;
