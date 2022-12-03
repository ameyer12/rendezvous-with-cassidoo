import React from "react";
import { SocialIcon } from "react-social-icons";
import "./sidebar.css";

function Sidebar() {
    return (
        <div class="left-side">
            <ul className="social-icons">
                <li className="top-line">___</li>
                <li className="linkedin-icon"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.linkedin.com/in/austin-meyer-6a7609164/" /></li>
                <li className="twitter-icon"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://twitter.com/OGlobalATM" /></li>
                <li className="github-icon"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://github.com/ameyer12" /></li>
                <li className="facebook-icon"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.facebook.com/austin.meyer.58" /></li>
                <li className="instagram-icon"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.instagram.com/_austin.meyer_/" /></li>
                <li className="bottom-line">___</li>
            </ul>
        </div>
    )
  }

export default Sidebar;





