import React from "react";
import { SocialIcon } from "react-social-icons";
import "./mobilefooter.css";

function MobileFooter() {
    return (
        <div className="mobile-footer">
            <ul className="mobile-footer-ul">
                <li id="mobile-footer-note" className="mobile-footer-li">Designed and built by Austin Meyer</li>
                <br></br>
                <li className="mobile-footer-li"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.linkedin.com/in/austin-meyer-6a7609164/" /></li>
                <li className="mobile-footer-li"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://twitter.com/OGlobalATM" /></li>
                <li className="mobile-footer-li"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://github.com/ameyer12" /></li>
                <li className="mobile-footer-li"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.facebook.com/austin.meyer.58" /></li>
                <li className="mobile-footer-li"><SocialIcon fgColor={"aquamarine"} bgColor={"transparent"} style={{width:"2rem"}} url="https://www.instagram.com/_austin.meyer_/" /></li>
            </ul>
        </div>
    )
  }

export default MobileFooter;