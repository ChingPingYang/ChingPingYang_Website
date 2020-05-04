import React from "react";
import email_icon from "./images/email_icon.svg";
import facebook_icon from "./images/facebook_icon.svg";
import instagram_icon from "./images/instagram_icon.svg";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_icons_container">
                <a href="mailto: gn00999829@gmail.com" target="_blank"><img src={email_icon} alt="ching-ping yang email" width="28px"/></a>
                <a href="https://www.facebook.com/james.yang.397" target="_blank"><img src={facebook_icon} alt="ching-ping yang facebook" width="28px"/></a>
                <a href="https://www.instagram.com/as00999829/" target="_blank"><img src={instagram_icon} alt="ching-ping yang instagram" width="28px"/></a>
            </div>
            <h3 className="footer_copyright">Copyright © 2020 Ching-Ping Yang. All rights reserved.</h3>
        </div>
    )
}

export default Footer;