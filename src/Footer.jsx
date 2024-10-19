import React from "react";
import RequestButton from "./RequestButton";

function Footer(){
    return(
        <div className="footer">
            <main className="left">
                <div className="logo">logo</div>
                <div className="icon-list">
                    <ul>
                        <li className="facebook">.</li>
                        <li className="youtube">.</li>
                        <li className="twitter">.</li>
                        <li className="pinterest">.</li>
                        <li className="instagram">.</li>
                    </ul>
                </div>
            </main>
            <main className="middle">
                <ul>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </main>
            <main className="right">
                <div className="button-holder">
                    <RequestButton />
                </div>
                <div><span>@EasyBank.All Rights Reserved</span></div>
            </main>
        </div>
    );
}
export default Footer