import React from "react";
import { Link } from "react-router-dom";
import './aboutme.css';

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
            <p className="p-Aboutme">I am a junior-level web developer. Although I have a bachelor's degree in kinesiotherapy, I found myself drawn to coding. I began my programming journey with Codecademy. As a junior web developer, I have a strong passion for coding and a solid foundation in HTML, CSS, and JavaScript. I specialize in creating visually appealing and responsive websites, paying attention to clean and well-structured code to ensure a seamless browsing experience. I am committed to staying up-to-date with the latest trends and best practices in web development and am eager to take on new challenges to grow and learn as a developer. I am confident that with my positive attitude and dedication to my craft, I can become a valuable asset to any team.</p>
        </div>
            <div className="img-Aboutme">
            
        </div>
        </header>
        </>
    )
};