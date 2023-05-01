import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import project1 from "./images/Project1.png";
import project2 from "./images/Project2.1.jpeg";
import project3 from "./images/Project2.2.jpeg";
import project4 from "./images/Project2.3.jpeg";

export default function Projects() {
    return(
        <>
            <header className="header-projects">
                <div className="containerNavBar-Aboutme">
                    <ul className="navigation-Aboutme">
                        <li><Link to="/" className="">Home</Link></li>
                    </ul>
                    <div className="container">
                        <div className="card">
                            <img src={project1}/>
                        </div>
                        <div className="card">
                            <img src={project2}/>
                        </div>
                        <div className="card">
                            <img src={project3}/>
                        </div>
                        <div className="card">
                            <img src={project4}/>
                        </div>
                    </div>
                </div>    
            </header>
        
        </>
    )
};