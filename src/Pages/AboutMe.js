import React from "react";
import { Link } from "react-router-dom";
export default function AboutMe() {
    return(
        <>
        <header className="header-Aboutme">
            <div className="containerNavBar-Aboutme">
                <ul className="navigation-Aboutme">
                    <li><Link to="/" className="home-aboutmepage">Home</Link></li>
                </ul>
            </div>
        <div className="container-Aboutme">
            <h1 className="h1-Aboutme">About Me</h1>
            <span className="span-Aboutme">Adrian Mititelu</span>
        </div>
        <div className="text-Aboutme">
            <p className="p-Aboutme">I'm a young individual with well-defined goals and aspirations, actively seeking a career opportunity that allows me to grow and excel. 
                                     In return, I can offer the following: 
                                     <br /> 
                                     Strong technical background: Hardware, Software, Networking(TCP/IP),
                                     Security, Operating System, Troubleshooting, Databases, Programming
                                     language(Front-end development HTML/CSS, JavaScript/React).</p>
        </div>
            <div className="img-Aboutme">
            
        </div>
        </header>
        </>
    )
};