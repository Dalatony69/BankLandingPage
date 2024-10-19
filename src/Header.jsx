import React,{useState} from "react";
import RequestButton from "./RequestButton";

function Header(){

    const [Switch,setSwitch] = useState(true);
    return(
        <div className="header">
            <main className="logo">.</main>
            <main className="list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </main>
            <main className="hamburger-holder" onClick={()=>{setSwitch(!Switch)}}>
                <div className={Switch ? 'hamburger' : 'x'}>1</div>
            </main>
            <main className="sub-list" style={{display : Switch ? 'none': ''}}>
            <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </main>
            <main className="button-holder">
                <RequestButton/>
            </main>
        </div>
    );
}
export default Header;