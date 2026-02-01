import React from "react";
import email_icon from "./images/email_icon.svg";
import facebook_icon from "./images/facebook_icon.svg";
import instagram_icon from "./images/instagram_icon.svg";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_icons_container">
                <a href="mailto: gn00999829@gmail.com" target="_blank"><img src={email_icon} alt="ching-ping yang email" width="28px"/></a>
            </div>
            <h3 className="footer_copyright">Copyright © {new Date().getFullYear()} Ching-Ping Yang. All rights reserved.</h3>
        </div>
    )
}

export default Footer;